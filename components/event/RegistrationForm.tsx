"use client";

import type { FormEvent, ReactNode } from "react";
import { useId, useState } from "react";
import {
  Checkbox,
  CloseButton,
  ConfirmationLabel,
  Dialog,
  DialogCopy,
  DialogOverlay,
  DialogTitle,
  FieldGroup,
  FieldLabel,
  FieldsGrid,
  Form,
  FormActions,
  FormIntro,
  FormTitle,
  Input,
  RequiredCopy,
  RequiredMark,
  Select,
  SubmitButton,
  SuccessIcon,
  Textarea,
} from "./RegistrationForm.styles";

const categories = [
  { value: "student", label: "Estudante" },
  { value: "professor", label: "Professor(a)" },
  { value: "researcher", label: "Pesquisador(a)" },
  { value: "professional", label: "Profissional" },
  { value: "other", label: "Outro" },
];

export function RegistrationForm() {
  const formId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);

    window.setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 650);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <FormTitle>Dados do participante</FormTitle>
          <FormIntro>Preencha as informações abaixo para simular sua inscrição na SEALQ.</FormIntro>
        </div>

        <FieldsGrid>
          <Field label="Nome completo" htmlFor={`${formId}-full-name`} required>
            <Input
              id={`${formId}-full-name`}
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Ex.: Ana Carolina Silva"
            />
          </Field>

          <Field label="E-mail" htmlFor={`${formId}-email`} required>
            <Input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@email.com"
            />
          </Field>

          <Field label="Telefone" htmlFor={`${formId}-phone`}>
            <Input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(19) 99999-9999"
            />
          </Field>

          <Field label="Instituição" htmlFor={`${formId}-institution`}>
            <Input
              id={`${formId}-institution`}
              name="institution"
              type="text"
              autoComplete="organization"
              placeholder="Ex.: ESALQ/USP"
            />
          </Field>

          <Field label="Categoria" htmlFor={`${formId}-category`} required>
            <Select id={`${formId}-category`} name="category" required defaultValue="">
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Select>
          </Field>
        </FieldsGrid>

        <Field label="Necessidade especial ou observação" htmlFor={`${formId}-notes`}>
          <Textarea
            id={`${formId}-notes`}
            name="notes"
            rows={4}
            placeholder="Informe algo importante para a organização, se necessário."
          />
        </Field>

        <ConfirmationLabel>
          <Checkbox type="checkbox" required />
          <span>
            Confirmo que as informações preenchidas estão corretas e entendo que esta inscrição é
            uma simulação do MVP.
          </span>
        </ConfirmationLabel>

        <FormActions>
          <RequiredCopy>Campos marcados com * são obrigatórios.</RequiredCopy>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Inscrever-se"}
          </SubmitButton>
        </FormActions>
      </Form>

      {showSuccess ? (
        <DialogOverlay role="dialog" aria-modal="true" aria-labelledby={`${formId}-success-title`}>
          <Dialog>
            <SuccessIcon>✓</SuccessIcon>
            <DialogTitle id={`${formId}-success-title`}>Inscrição realizada com sucesso</DialogTitle>
            <DialogCopy>
              Sua inscrição foi registrada nesta simulação. Você receberá um e-mail com mais
              informações sobre a SEALQ.
            </DialogCopy>
            <CloseButton type="button" onClick={() => setShowSuccess(false)}>
              Entendi
            </CloseButton>
          </Dialog>
        </DialogOverlay>
      ) : null}
    </>
  );
}

type FieldProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  required?: boolean;
};

function Field({ children, htmlFor, label, required = false }: FieldProps) {
  return (
    <FieldGroup>
      <FieldLabel htmlFor={htmlFor}>
        {label}
        {required ? <RequiredMark> *</RequiredMark> : null}
      </FieldLabel>
      {children}
    </FieldGroup>
  );
}
