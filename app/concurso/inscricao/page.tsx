"use client";

import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckCircle2, Download, ArrowLeft, Lock } from "lucide-react";
import { useTheme } from "styled-components";
import { cpfMask, phoneMask } from "@/lib/concurso/utils/masks";
import { registrationService } from "@/lib/concurso/services/registrationService";
import { getConcursoSupabase } from "@/lib/concurso/supabase";
import {
  Input,
  Button,
  Checkbox,
  Modal,
  FileInput,
} from "@/components/concurso/ui";
import type { Registration } from "@/types/concurso";
import { registrationSchema, type RegistrationFormData } from "./schema";
import { generateProtocolTemplate } from "./utils/generateProtocolTemplate";
import * as S from "./page.styles";
import { sanitizeFilename } from "./utils/formatters";

function useRegistrationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataTmp, setFormDataTmp] = useState<RegistrationFormData | null>(
    null,
  );
  const [protocolNumber, setProtocolNumber] = useState("");
  const lastTimestamp = useRef(-1);
  const sequence = useRef(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    mode: "onBlur",
  });

  const handlePreSubmit = useCallback((data: RegistrationFormData) => {
    setFormDataTmp(data);
    setIsModalOpen(true);
  }, []);

  const generateSnowflakeId = useCallback(() => {
    let timestamp = Date.now();
    if (timestamp === lastTimestamp.current) {
      sequence.current = (sequence.current + 1) & 4095;
      if (sequence.current === 0) {
        while (timestamp <= lastTimestamp.current) timestamp = Date.now();
      }
    } else {
      sequence.current = 0;
    }
    lastTimestamp.current = timestamp;

    const generatedProtocol = (
      (BigInt(timestamp - 1735689600000) << 22n) |
      (1n << 12n) |
      BigInt(sequence.current)
    ).toString();
    setProtocolNumber(generatedProtocol);
    return generatedProtocol;
  }, []);

  const handleDownloadProtocol = useCallback(
    (externalProtocol?: string | null) => {
      const activeProtocol = externalProtocol || protocolNumber;
      if (!formDataTmp || !activeProtocol) return;

      const fileContent = generateProtocolTemplate({
        formData: formDataTmp,
        protocolNumber: activeProtocol,
      });
      const url = URL.createObjectURL(
        new Blob([fileContent], { type: "text/plain;charset=utf-8" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `comprovante-${activeProtocol}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    [formDataTmp, protocolNumber],
  );

  return {
    register,
    handleSubmit,
    errors,
    isModalOpen,
    formDataTmp,
    handlePreSubmit,
    generateSnowflakeId,
    handleCloseModal: () => setIsModalOpen(false),
    handleDownloadProtocol,
    handleResetFormState: () => {
      reset();
      setProtocolNumber("");
      setFormDataTmp(null);
    },
  };
}

function useSubmitRegistration() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successProtocol, setSuccessProtocol] = useState<string | null>(null);

  const registerCandidate = async (
    candidateData: Omit<Registration, "protocol_number" | "file_path">,
    file: File | null,
    customProtocol?: string,
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      if (!file)
        throw new Error(
          "O arquivo do regulamento/projeto em PDF é obrigatório.",
        );

      const supabase = getConcursoSupabase();
      const { data: existingCandidates, error: checkError } = await supabase
        .from("registrations")
        .select("id")
        .ilike("document", `%${candidateData.document.trim()}%`);

      if (checkError) throw new Error("Erro ao verificar a existência do CPF.");
      if (existingCandidates?.length) {
        throw new Error("Este CPF já está inscrito no concurso.");
      }

      const generatedProtocol = customProtocol || String(Date.now());
      const fileExtension = file.name.split(".").pop();
      const uploadedPath = await registrationService.uploadDocument(
        file,
        `${generatedProtocol}.${fileExtension}`,
      );

      await registrationService.create({
        ...candidateData,
        protocol_number: generatedProtocol,
        file_path: uploadedPath,
      });
      setSuccessProtocol(generatedProtocol);
    } catch (caughtError: unknown) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Ocorreu um erro ao processar sua inscrição.",
      );
      throw caughtError;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    registerCandidate,
    isLoading,
    error,
    successProtocol,
    resetSubmission: () => {
      setSuccessProtocol(null);
      setError(null);
    },
  };
}

export default function ConcursoRegistrationPage() {
  const theme = useTheme();
  const isSubmittingRef = useRef(false);

  const {
    registerCandidate,
    isLoading: isSupabaseLoading,
    error: supabaseError,
    successProtocol,
    resetSubmission,
  } = useSubmitRegistration();

  const {
    register,
    handleSubmit,
    errors,
    isModalOpen,
    formDataTmp,
    handlePreSubmit,
    generateSnowflakeId,
    handleCloseModal,
    handleDownloadProtocol,
    handleResetFormState,
  } = useRegistrationForm();

  const isRealSuccess = !!successProtocol;

  const handleConfirmRegistration = async () => {
    if (!formDataTmp) return;
    if (isSubmittingRef.current) return;

    isSubmittingRef.current = true;

    try {
      const realProtocolId = generateSnowflakeId();

      const fileList = formDataTmp.documentFile as FileList;
      let fileToUpload = fileList && fileList.length > 0 ? fileList[0] : null;

      
      if (fileToUpload) {
        const cleanFilename = sanitizeFilename(fileToUpload.name);

        // Cria uma CÓPIA exata do arquivo, mas com o nome limpo!
        fileToUpload = new File([fileToUpload], cleanFilename, {
          type: fileToUpload.type,
          lastModified: fileToUpload.lastModified,
        });
      }
      // ===================================

      const candidateData = {
        full_name: formDataTmp.fullName,
        document: formDataTmp.document.replace(/\D/g, ""),
        email: formDataTmp.email,
        phone: formDataTmp.phone.replace(/\D/g, ""),
        payment_number: formDataTmp.paymentNumber,
      };

      // Mandamos o "fileToUpload" que agora é o arquivo renomeado!
      await registerCandidate(candidateData, fileToUpload, realProtocolId);
      handleCloseModal();
    } catch (err) {
      console.error(err);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  if (isRealSuccess) {
    return (
      <S.PageContainer>
        <S.FormCard as="div">
          <S.SuccessContainer>
            <CheckCircle2 size={56} color={theme.colors.success} />

            <S.SuccessTitle>Inscrição Concluída!</S.SuccessTitle>

            <S.SuccessSubtitle>
              Os seus dados foram enviados. Um e-mail de confirmação foi
              encaminhado para: <br />
              <span>{formDataTmp?.email}</span>
            </S.SuccessSubtitle>

            <S.ProtocolBox>
              <S.ProtocolLabel>Número do Protocolo</S.ProtocolLabel>
              <S.ProtocolValue>{successProtocol}</S.ProtocolValue>
            </S.ProtocolBox>

            <S.ActionGroup>
              <Button
                type="button"
                variant="primary"
                onClick={() => handleDownloadProtocol(successProtocol)}
              >
                <Download size={18} />
                Baixar Comprovante (.txt)
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  handleResetFormState();
                  resetSubmission();
                  isSubmittingRef.current = false;
                }}
              >
                <ArrowLeft size={18} />
                Voltar ao Início
              </Button>
            </S.ActionGroup>
          </S.SuccessContainer>
        </S.FormCard>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.FormCard onSubmit={handleSubmit(handlePreSubmit)}>
        <S.HeaderGroup>
          <S.FormTitle>Inscrição para o Concurso</S.FormTitle>
          <S.FormSubtitle>
            Preencha seus dados abaixo para iniciar o processo de inscrição.
          </S.FormSubtitle>
        </S.HeaderGroup>

        {supabaseError && <S.ErrorAlert>{supabaseError}</S.ErrorAlert>}

        <Input
          id="paymentNumber"
          label="Número da Inscrição (Recebido no Pagamento)"
          placeholder="Digite o código ou número do comprovante"
          error={errors.paymentNumber?.message}
          {...register("paymentNumber")}
        />

        <Input
          id="fullName"
          label="Nome Completo"
          placeholder="Digite seu nome completo"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <S.RowGroup>
          <Input
            id="document"
            label="CPF"
            placeholder="000.000.000-00"
            maxLength={14}
            error={errors.document?.message}
            {...register("document", {
              onChange: (e) => {
                e.target.value = cpfMask(e.target.value);
              },
            })}
          />

          <Input
            id="phone"
            label="Telefone Celular"
            placeholder="(35) 99999-9999"
            maxLength={15}
            error={errors.phone?.message}
            {...register("phone", {
              onChange: (e) => {
                e.target.value = phoneMask(e.target.value);
              },
            })}
          />
        </S.RowGroup>

        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="seu.email@exemplo.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <FileInput
          id="documentFile"
          label="Documento (PDF até 5mb)"
          accept=".pdf,.png,.jpg,.jpeg"
          error={errors.documentFile?.message}
          {...register("documentFile")}
        />

        <Checkbox
          id="termsAccepted"
          error={errors.termsAccepted?.message}
          {...register("termsAccepted")}
          label={
            <>
              Li e estou de acordo com o{" "}
              <a
                href="/regulamento.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regulamento Oficial do Concurso
              </a>
              .
            </>
          }
        />

        <Button
          type="submit"
          variant="primary"
          isLoading={isSupabaseLoading}
          disabled={isSupabaseLoading || !!errors.document}
        >
          {errors.document?.type === "is-unique-cpf" ? (
            <>
              <Lock size={18} />
              Inscrição Bloqueada
            </>
          ) : (
            "Enviar"
          )}
        </Button>
      </S.FormCard>

      <Modal
        isOpen={isModalOpen}
        title="Confirmar Dados da Inscrição"
        onClose={handleCloseModal}
        onConfirm={handleConfirmRegistration}
        isLoading={isSupabaseLoading}
      >
        <S.ModalText>
          Olá, <strong>{formDataTmp?.fullName}</strong>!
        </S.ModalText>

        <S.ModalSubText>Confirma o envio dos seus dados?</S.ModalSubText>

        {isSupabaseLoading && (
          <S.LoadingFeedback>
            Processando arquivos e salvando dados...
          </S.LoadingFeedback>
        )}
      </Modal>
    </S.PageContainer>
  );
}
