import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Bio, Initial, Institution, SpeakerName, SpeakersGrid } from "./page.styles";

const speakers = ["Dra. Ana Ribeiro", "Prof. Marcos Lima", "Dra. Helena Costa"];

export default function PalestrantesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Convidados"
        title="Palestrantes"
        description="Base visual para listar convidados, instituições, mini bios e temas ligados à entomologia, acarologia e agricultura."
      />
      <SpeakersGrid>
        {speakers.map((speaker) => (
          <Card key={speaker}>
            <Initial>{speaker.slice(0, 1)}</Initial>
            <SpeakerName>{speaker}</SpeakerName>
            <Institution>Instituição acadêmica</Institution>
            <Bio>Mini bio e tema da palestra entram aqui quando a programação estiver definida.</Bio>
          </Card>
        ))}
      </SpeakersGrid>
    </>
  );
}
