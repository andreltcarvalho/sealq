import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ContentContainer, Copy, Title } from "./page.styles";

export default function SubmissaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trabalhos"
        title="Submissão de trabalhos"
        description="Rota preparada para receber trabalhos acadêmicos da SEALQ em uma próxima etapa."
      />
      <ContentContainer>
        <Card>
          <Title>Submissão ainda não implementada</Title>
          <Copy>Uploads, validações e armazenamento ficarão fora deste primeiro recorte.</Copy>
        </Card>
      </ContentContainer>
    </>
  );
}
