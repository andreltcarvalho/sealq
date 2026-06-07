import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const ContentContainer = styled(Container)`
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};
`;

export const Title = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Copy = styled.p`
  max-width: 42rem;
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
