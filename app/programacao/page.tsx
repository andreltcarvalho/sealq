import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

const schedule = [
  { time: "09:00", title: "Credenciamento", type: "Recepcao" },
  { time: "10:00", title: "Abertura oficial", type: "Cerimonia" },
  { time: "14:00", title: "Mesa tematica sobre sistemas agricolas", type: "Debate" },
];

export default function ProgramacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Programacao inicial"
        description="Estrutura base para exibir atividades da SEALQ por horario, tipo, sala e responsaveis."
      />
      <Container className="py-12">
        <div className="grid gap-4">
          {schedule.map((item) => (
            <Card
              key={`${item.time}-${item.title}`}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="w-24 text-sm font-semibold text-[#d86f19]">{item.time}</div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#16351f]">{item.title}</h2>
                <p className="mt-1 text-sm text-[#566247]">{item.type}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
