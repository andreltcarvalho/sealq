import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function InscricaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inscricao"
        title="Inscricao na SEALQ"
        description="Rota preparada para receber o formulario de inscricao em uma proxima etapa."
      />
      <Container className="py-12">
        <Card>
          <h2 className="text-xl font-semibold text-[#16351f]">Formulario ainda nao implementado</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#566247]">
            Esta etapa cria apenas a base visual e a estrutura de rotas. Os campos,
            validacoes e persistencia serao adicionados depois.
          </p>
        </Card>
      </Container>
    </>
  );
}
