"use client";

import type { FormEvent, ReactNode } from "react";
import { useId, useState } from "react";

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
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-lg border border-[#d9d4bd] bg-[#fbfaf5] p-6 shadow-sm"
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16351f]">
            Dados do participante
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#566247]">
            Preencha as informações abaixo para simular sua inscrição na SEALQ.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nome completo" htmlFor={`${formId}-full-name`} required>
            <input
              id={`${formId}-full-name`}
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Ex.: Ana Carolina Silva"
              className="field-control"
            />
          </Field>

          <Field label="E-mail" htmlFor={`${formId}-email`} required>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@email.com"
              className="field-control"
            />
          </Field>

          <Field label="Telefone" htmlFor={`${formId}-phone`}>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(19) 99999-9999"
              className="field-control"
            />
          </Field>

          <Field label="Instituição" htmlFor={`${formId}-institution`}>
            <input
              id={`${formId}-institution`}
              name="institution"
              type="text"
              autoComplete="organization"
              placeholder="Ex.: ESALQ/USP"
              className="field-control"
            />
          </Field>

          <Field label="Categoria" htmlFor={`${formId}-category`} required>
            <select
              id={`${formId}-category`}
              name="category"
              required
              defaultValue=""
              className="field-control"
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Necessidade especial ou observação" htmlFor={`${formId}-notes`}>
          <textarea
            id={`${formId}-notes`}
            name="notes"
            rows={4}
            placeholder="Informe algo importante para a organização, se necessário."
            className="field-control resize-y"
          />
        </Field>

        <label className="flex gap-3 rounded-md border border-[#d9d4bd] bg-white/60 p-4 text-sm leading-6 text-[#566247]">
          <input
            type="checkbox"
            required
            className="mt-1 size-4 rounded border-[#c9c29e] text-[#0b4a24] focus:ring-[#f6c65b]"
          />
          <span>
            Confirmo que as informações preenchidas estão corretas e entendo que esta
            inscrição é uma simulação do MVP.
          </span>
        </label>

        <div className="flex flex-col gap-3 border-t border-[#d9d4bd] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#566247]">Campos marcados com * são obrigatórios.</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0b4a24] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#063719] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d86f19] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Enviando..." : "Inscrever-se"}
          </button>
        </div>
      </form>

      {showSuccess ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${formId}-success-title`}
          className="fixed inset-0 z-50 grid place-items-center bg-[#16351f]/55 px-5 py-8 backdrop-blur-sm"
        >
          <div className="w-full max-w-md rounded-lg border border-[#d9d4bd] bg-[#fbfaf5] p-6 shadow-xl">
            <div className="grid size-12 place-items-center rounded-md bg-[#e9efe1] text-2xl text-[#0b4a24]">
              ✓
            </div>
            <h2
              id={`${formId}-success-title`}
              className="mt-5 text-2xl font-semibold text-[#16351f]"
            >
              Inscrição realizada com sucesso
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#566247]">
              Sua inscrição foi registrada nesta simulação. Você receberá um e-mail
              com mais informações sobre a SEALQ.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#0b4a24] px-5 text-sm font-semibold text-white transition hover:bg-[#063719] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d86f19]"
            >
              Entendi
            </button>
          </div>
        </div>
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
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-[#16351f]">
        {label}
        {required ? <span className="text-[#d86f19]"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
