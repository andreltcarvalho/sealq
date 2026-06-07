import { PageHeader } from "@/components/layout/PageHeader";
import {
  Activity,
  ActivityTitle,
  ActivityType,
  ScheduleCard,
  ScheduleContainer,
  ScheduleList,
  Time,
} from "./page.styles";

const schedule = [
  { time: "09:00", title: "Credenciamento", type: "Recepção" },
  { time: "10:00", title: "Abertura oficial", type: "Cerimônia" },
  { time: "14:00", title: "Mesa temática sobre sistemas agrícolas", type: "Debate" },
];

export default function ProgramacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Programação inicial"
        description="Estrutura base para exibir atividades da SEALQ por horário, tipo, sala e responsáveis."
      />
      <ScheduleContainer>
        <ScheduleList>
          {schedule.map((item) => (
            <ScheduleCard key={`${item.time}-${item.title}`}>
              <Time>{item.time}</Time>
              <Activity>
                <ActivityTitle>{item.title}</ActivityTitle>
                <ActivityType>{item.type}</ActivityType>
              </Activity>
            </ScheduleCard>
          ))}
        </ScheduleList>
      </ScheduleContainer>
    </>
  );
}
