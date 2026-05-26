import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

const speakers = ["Dra. Ana Ribeiro", "Prof. Marcos Lima", "Dra. Helena Costa"];

export default function PalestrantesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Convidados"
        title="Palestrantes"
        description="Base visual para listar convidados, instituicoes, mini bios e temas ligados a entomologia, acarologia e agricultura."
      />
      <Container className="grid gap-5 py-12 md:grid-cols-3">
        {speakers.map((speaker) => (
          <Card key={speaker}>
            <div className="grid size-14 place-items-center rounded-md bg-[#e9efe1] text-lg font-semibold text-[#0b4a24]">
              {speaker.slice(0, 1)}
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#16351f]">{speaker}</h2>
            <p className="mt-2 text-sm text-[#566247]">Instituicao academica</p>
            <p className="mt-4 text-sm leading-6 text-[#566247]">
              Mini bio e tema da palestra entram aqui quando a programacao estiver definida.
            </p>
          </Card>
        ))}
      </Container>
    </>
  );
}
