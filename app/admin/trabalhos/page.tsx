import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminTrabalhosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Trabalhos submetidos"
        description="Tabela administrativa sera adicionada quando o fluxo de submissao existir."
      />
      <Container className="py-12">
        <Card>
          <p className="text-sm leading-6 text-[#566247]">
            Nenhum dado de submissao foi implementado neste recorte.
          </p>
        </Card>
      </Container>
    </>
  );
}
