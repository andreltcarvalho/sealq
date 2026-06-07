import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const CardsGrid = styled(Container)`
  display: grid;
  gap: ${theme.space[5]};
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CardTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CardCopy = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
