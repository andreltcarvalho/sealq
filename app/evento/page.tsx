import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { CardCopy, CardsGrid, CardTitle } from "./page.styles";

export default function EventoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Semana de Entomologia e Acarologia Luiz de Queiroz"
        description="Página reservada para apresentar objetivo, público-alvo, organização, local e datas importantes da SEALQ."
      />
      <CardsGrid>
        {[
          ["Objetivo", "Reunir estudantes, pesquisadores e profissionais em torno de temas aplicados à entomologia e acarologia agrícola."],
          ["Público-alvo", "Estudantes, professores, pesquisadores, profissionais e interessados nas culturas de cana-de-açúcar, citros e milho."],
          ["Organização", "Estrutura inicial para divulgar a semana acadêmica, sua programação e seus próximos fluxos de participação."],
        ].map(([title, description]) => (
          <Card key={title}>
            <CardTitle>{title}</CardTitle>
            <CardCopy>{description}</CardCopy>
          </Card>
        ))}
      </CardsGrid>
    </>
  );
}
