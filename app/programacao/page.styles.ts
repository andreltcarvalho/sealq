import styled from "styled-components";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { theme } from "@/styles/theme";

export const ScheduleContainer = styled(Container)`
  padding-top: ${theme.space[12]};
  padding-bottom: ${theme.space[12]};
`;

export const ScheduleList = styled.div`
  display: grid;
  gap: ${theme.space[4]};
`;

export const ScheduleCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};

  @media (min-width: ${theme.breakpoint.sm}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Time = styled.div`
  width: 6rem;
  color: ${theme.colors.accent};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Activity = styled.div`
  flex: 1;
`;

export const ActivityTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: 1.125rem;
  font-weight: 600;
`;

export const ActivityType = styled.p`
  margin-top: ${theme.space[1]};
  color: ${theme.colors.secondaryText};
  font-size: 0.875rem;
`;
