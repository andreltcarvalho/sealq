import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function EventoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Semana de Entomologia e Acarologia Luiz de Queiroz"
        description="Pagina reservada para apresentar objetivo, publico-alvo, organizacao, local e datas importantes da SEALQ."
      />
      <Container className="grid gap-5 py-12 md:grid-cols-3">
        {[
          ["Objetivo", "Reunir estudantes, pesquisadores e profissionais em torno de temas aplicados a entomologia e acarologia agricola."],
          ["Publico-alvo", "Estudantes, professores, pesquisadores, profissionais e interessados nas culturas de cana-de-acucar, citros e milho."],
          ["Organizacao", "Estrutura inicial para divulgar a semana academica, sua programacao e seus proximos fluxos de participacao."],
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
