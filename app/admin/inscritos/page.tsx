import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { EmptyStateContainer, EmptyStateCopy } from "../empty-state.styles";

export default function AdminInscritosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Inscritos"
        description="Tabela administrativa será adicionada quando o fluxo de inscrição existir."
      />
      <EmptyStateContainer>
        <Card>
          <EmptyStateCopy>Nenhum dado de inscrição foi implementado neste recorte.</EmptyStateCopy>
        </Card>
      </EmptyStateContainer>
    </>
  );
}
