import Link from "next/link";
import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const AdminContainer = styled(Container)`
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};
`;

export const StatsGrid = styled.div`
  display: grid;
  gap: ${theme.space[5]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StatLabel = styled.p`
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
`;

export const StatValue = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.primary};
  font-size: 2.25rem;
  font-weight: 600;
`;

export const AdminLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  margin-top: ${theme.space[8]};

  @media (min-width: ${theme.breakpoint.sm}) {
    flex-direction: row;
  }
`;

export const AdminLink = styled(Link)`
  border: 1px solid ${theme.colors.borderStrong};
  border-radius: ${theme.radius.md};
  background: ${theme.colors.surface};
  padding: ${theme.space[3]} ${theme.space[4]};
  color: ${theme.colors.foreground};
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    background-color ${theme.transition},
    border-color ${theme.transition};

  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.surfaceMuted};
  }
`;
