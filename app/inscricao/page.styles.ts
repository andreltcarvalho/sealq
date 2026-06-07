import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const RegistrationLayout = styled(Container)`
  display: grid;
  gap: ${theme.space[8]};
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};

  @media (min-width: ${theme.breakpoint.lg}) {
    grid-template-columns: 1fr 0.42fr;
    align-items: start;
  }
`;

export const Aside = styled.aside`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surfaceMuted};
  padding: ${theme.space[6]};
`;

export const AsideTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const AsideCopy = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const AsideNotice = styled.div`
  margin-top: ${theme.space[6]};
  border-radius: ${theme.radius.md};
  background: ${theme.colors.primary};
  padding: ${theme.space[4]};
  color: ${theme.colors.white};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
