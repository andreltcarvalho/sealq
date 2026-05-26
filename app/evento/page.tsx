import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function EventoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Semana de Entomologia e Acarologia Luiz de Queiroz"
        description="Página reservada para apresentar objetivo, público-alvo, organização, local e datas importantes da SEALQ."
      />
      <Container className="grid gap-5 py-12 md:grid-cols-3">
        {[
          ["Objetivo", "Reunir estudantes, pesquisadores e profissionais em torno de temas aplicados à entomologia e acarologia agrícola."],
          ["Público-alvo", "Estudantes, professores, pesquisadores, profissionais e interessados nas culturas de cana-de-açúcar, citros e milho."],
          ["Organização", "Estrutura inicial para divulgar a semana acadêmica, sua programação e seus próximos fluxos de participação."],
        ].map(([title, description]) => (
          <Card key={title}>
            <h2 className="text-lg font-semibold text-[#16351f]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#566247]">{description}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}
