import Link from "next/link";
import styled from "styled-components";
import { Container } from "./Container";
import { theme } from "@/styles/theme";

export const FooterRoot = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};
`;

export const FooterContainer = styled(Container)`
  display: grid;
  gap: ${theme.space[8]};
  padding-top: ${theme.space[10]};
  padding-bottom: ${theme.space[10]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: 1.4fr 1fr 1fr;
  }
`;

export const Brand = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Heading = styled.p`
  color: ${theme.colors.foreground};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Copy = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const IntroCopy = styled(Copy)`
  max-width: 28rem;
`;

export const LinkList = styled.div`
  display: grid;
  gap: ${theme.space[2]};
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
`;

export const FooterLink = styled(Link)`
  transition: color ${theme.transition};

  &:hover {
    color: ${theme.colors.primary};
  }
`;
