import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function SubmissaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trabalhos"
        title="Submissao de trabalhos"
        description="Rota preparada para receber trabalhos academicos da SEALQ em uma proxima etapa."
      />
      <Container className="py-12">
        <Card>
          <h2 className="text-xl font-semibold text-[#16351f]">Submissao ainda nao implementada</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#566247]">
            Uploads, validacoes e armazenamento ficarao fora deste primeiro recorte.
          </p>
        </Card>
      </Container>
    </>
  );
}
