import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledButtonLink = styled(Link)`
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.md};
  padding: 0 ${theme.space[5]};
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    background-color ${theme.transition},
    border-color ${theme.transition},
    color ${theme.transition};

  &[data-variant="primary"] {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.sm};
  }

  &[data-variant="primary"]:hover {
    background: ${theme.colors.primaryDark};
  }

  &[data-variant="secondary"] {
    border: 1px solid ${theme.colors.borderStrong};
    background: ${theme.colors.surface};
    color: ${theme.colors.foreground};
  }

  &[data-variant="secondary"]:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.surfaceMuted};
  }
`;
