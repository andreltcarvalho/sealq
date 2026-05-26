import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminInscritosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Inscritos"
        description="Tabela administrativa será adicionada quando o fluxo de inscrição existir."
      />
      <Container className="py-12">
        <Card>
          <p className="text-sm leading-6 text-[#566247]">
            Nenhum dado de inscrição foi implementado neste recorte.
          </p>
        </Card>
      </Container>
    </>
  );
}
