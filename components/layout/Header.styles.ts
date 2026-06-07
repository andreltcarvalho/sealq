import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./Container";
import { theme } from "@/styles/theme";

export const HeaderRoot = styled.header`
  position: sticky;
  z-index: 40;
  top: 0;
  border-bottom: 1px solid ${theme.colors.border};
  background: rgb(251 250 245 / 0.92);
  backdrop-filter: blur(8px);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  min-height: 5rem;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space[5]};
`;

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.space[3]};
`;

export const LogoFrame = styled.span`
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  background: ${theme.colors.white};
`;

export const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BrandText = styled.span`
  line-height: 1.25;
`;

export const BrandName = styled.span`
  display: block;
  color: ${theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
`;

export const BrandDescription = styled.span`
  display: none;
  max-width: 13rem;
  color: ${theme.colors.mutedText};
  font-size: 0.75rem;

  @media (min-width: ${theme.breakpoint.sm}) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: none;
  align-items: center;
  gap: ${theme.space[1]};

  @media (min-width: ${theme.breakpoint.md}) {
    display: flex;
  }
`;

export const NavigationLink = styled(Link)`
  border-radius: ${theme.radius.md};
  padding: ${theme.space[2]} ${theme.space[3]};
  color: #43533b;
  font-size: 0.875rem;
  font-weight: 500;
  transition:
    background-color ${theme.transition},
    color ${theme.transition};

  &:hover {
    background: ${theme.colors.surfaceSoft};
    color: ${theme.colors.primary};
  }
`;

export const AdminLink = styled(Link)`
  border: 1px solid ${theme.colors.borderStrong};
  border-radius: ${theme.radius.md};
  padding: ${theme.space[2]} ${theme.space[3]};
  color: ${theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    background-color ${theme.transition},
    border-color ${theme.transition};

  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.surfaceSoft};
  }
`;
