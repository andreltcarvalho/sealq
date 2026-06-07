import styled from "styled-components";
import { Container } from "./Container";
import { theme } from "@/styles/theme";

export const HeaderSection = styled.section`
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.surfaceMuted};
`;

export const HeaderContainer = styled(Container)`
  padding-top: ${theme.space[14]};
  padding-bottom: ${theme.space[14]};

  @media (min-width: ${theme.breakpoint.sm}) {
    padding-top: ${theme.space[16]};
    padding-bottom: ${theme.space[16]};
  }
`;

export const Eyebrow = styled.p`
  color: ${theme.colors.accent};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  max-width: 48rem;
  margin-top: ${theme.space[3]};
  color: ${theme.colors.foreground};
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.1;

  @media (min-width: ${theme.breakpoint.sm}) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  max-width: 42rem;
  margin-top: ${theme.space[5]};
  color: ${theme.colors.secondaryText};
  font-size: 1.125rem;
  line-height: 2rem;
`;
