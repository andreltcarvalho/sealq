import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Main = styled.main`
  min-height: calc(100vh - 16rem);
  padding-top: ${theme.space[6]};
  padding-bottom: ${theme.space[6]};

  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: ${theme.space[8]};
    padding-bottom: ${theme.space[8]};
  }
`;
