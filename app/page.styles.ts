import Image from "next/image";
import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const HeroSection = styled.section`
  background: ${theme.colors.surface};
`;

export const HeroContainer = styled(Container)`
  display: grid;
  gap: ${theme.space[10]};
  padding-top: ${theme.space[14]};
  padding-bottom: ${theme.space[14]};

  @media (min-width: ${theme.breakpoint.sm}) {
    padding-top: ${theme.space[16]};
    padding-bottom: ${theme.space[16]};
  }

  @media (min-width: ${theme.breakpoint.lg}) {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
  }
`;

export const Eyebrow = styled.p`
  color: ${theme.colors.accent};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  max-width: 56rem;
  margin-top: ${theme.space[4]};
  color: ${theme.colors.foreground};
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;

  @media (min-width: ${theme.breakpoint.sm}) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  max-width: 48rem;
  margin-top: ${theme.space[4]};
  color: ${theme.colors.primaryText};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const HeroCopy = styled.p`
  max-width: 42rem;
  margin-top: ${theme.space[6]};
  color: ${theme.colors.secondaryText};
  font-size: 1.125rem;
  line-height: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  margin-top: ${theme.space[8]};

  @media (min-width: ${theme.breakpoint.sm}) {
    flex-direction: row;
  }
`;

export const EventPanel = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.xl};
  background: ${theme.colors.white};
  padding: ${theme.space[5]};
  box-shadow: ${theme.shadow.sm};
`;

export const EventPanelGrid = styled.div`
  display: grid;
  gap: ${theme.space[5]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: 0.9fr 1fr;
    align-items: center;
  }
`;

export const LogoFrame = styled.div`
  width: 100%;
  max-width: 16rem;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid ${theme.colors.borderSoft};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.white};
`;

export const Logo = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`;

export const KeyInfo = styled.div`
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.primary};
  padding: ${theme.space[6]};
  color: ${theme.colors.white};
`;

export const KeyInfoLabel = styled.p`
  color: ${theme.colors.accentYellow};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const KeyInfoList = styled.div`
  display: grid;
  gap: ${theme.space[5]};
  margin-top: ${theme.space[6]};
`;

export const KeyInfoName = styled.p`
  color: #dce8d4;
  font-size: 0.875rem;
`;

export const KeyInfoValue = styled.p`
  margin-top: ${theme.space[1]};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const HighlightsSection = styled.section`
  border-top: 1px solid ${theme.colors.border};
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.surfaceMuted};
`;

export const HighlightsGrid = styled(Container)`
  display: grid;
  gap: ${theme.space[5]};
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const HighlightTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const HighlightCopy = styled.p`
  margin-top: ${theme.space[3]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
