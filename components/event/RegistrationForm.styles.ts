import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

const controlStyles = css`
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid ${theme.colors.borderStrong};
  border-radius: ${theme.radius.md};
  background: ${theme.colors.white};
  padding: 0.625rem ${theme.space[3]};
  color: ${theme.colors.foreground};
  outline: none;
  transition:
    border-color ${theme.transition},
    box-shadow ${theme.transition};

  &::placeholder {
    color: #8a8b73;
  }

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgb(246 198 91 / 0.35);
  }
`;

const actionButtonStyles = css`
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: ${theme.radius.md};
  background: ${theme.colors.primary};
  padding: 0 ${theme.space[5]};
  color: ${theme.colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color ${theme.transition};

  &:hover {
    background: ${theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: ${theme.space[6]};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surface};
  padding: ${theme.space[6]};
  box-shadow: ${theme.shadow.sm};
`;

export const FormTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const FormIntro = styled.p`
  margin-top: ${theme.space[2]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const FieldsGrid = styled.div`
  display: grid;
  gap: ${theme.space[5]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  gap: ${theme.space[2]};
`;

export const FieldLabel = styled.label`
  color: ${theme.colors.foreground};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const RequiredMark = styled.span`
  color: ${theme.colors.accent};
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const Select = styled.select`
  ${controlStyles}
`;

export const Textarea = styled.textarea`
  ${controlStyles}
  resize: vertical;
`;

export const ConfirmationLabel = styled.label`
  display: flex;
  gap: ${theme.space[3]};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  background: rgb(255 255 255 / 0.6);
  padding: ${theme.space[4]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  margin-top: ${theme.space[1]};
  accent-color: ${theme.colors.primary};
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  border-top: 1px solid ${theme.colors.border};
  padding-top: ${theme.space[6]};

  @media (min-width: ${theme.breakpoint.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RequiredCopy = styled.p`
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
`;

export const SubmitButton = styled.button`
  ${actionButtonStyles}
  box-shadow: ${theme.shadow.sm};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  z-index: 50;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgb(22 53 31 / 0.55);
  padding: ${theme.space[8]} ${theme.space[5]};
  backdrop-filter: blur(4px);
`;

export const Dialog = styled.div`
  width: 100%;
  max-width: 28rem;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surface};
  padding: ${theme.space[6]};
  box-shadow: ${theme.shadow.xl};
`;

export const SuccessIcon = styled.div`
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border-radius: ${theme.radius.md};
  background: ${theme.colors.surfaceSoft};
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;

export const DialogTitle = styled.h2`
  margin-top: ${theme.space[5]};
  color: ${theme.colors.foreground};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DialogCopy = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const CloseButton = styled.button`
  ${actionButtonStyles}
  width: 100%;
  margin-top: ${theme.space[6]};
`;
