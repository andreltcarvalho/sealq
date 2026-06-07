import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledCard = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surface};
  padding: ${theme.space[6]};
  box-shadow: ${theme.shadow.sm};
`;
