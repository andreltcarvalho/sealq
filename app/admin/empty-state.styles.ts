import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const EmptyStateContainer = styled(Container)`
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};
`;

export const EmptyStateCopy = styled.p`
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
