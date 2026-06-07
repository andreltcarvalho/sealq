import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 ${theme.space[5]};

  @media (min-width: ${theme.breakpoint.sm}) {
    padding-right: ${theme.space[6]};
    padding-left: ${theme.space[6]};
  }

  @media (min-width: ${theme.breakpoint.lg}) {
    padding-right: ${theme.space[8]};
    padding-left: ${theme.space[8]};
  }
`;
