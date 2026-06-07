import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { theme } from "@/styles/theme";

export const SpeakersGrid = styled(Container)`
  display: grid;
  gap: ${theme.space[5]};
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Initial = styled.div`
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  place-items: center;
  border-radius: ${theme.radius.md};
  background: ${theme.colors.surfaceSoft};
  color: ${theme.colors.primary};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const SpeakerName = styled.h2`
  margin-top: ${theme.space[5]};
  color: ${theme.colors.foreground};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Institution = styled.p`
  margin-top: ${theme.space[2]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
`;

export const Bio = styled.p`
  margin-top: ${theme.space[4]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;
