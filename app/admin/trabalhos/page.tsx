import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { EmptyStateContainer, EmptyStateCopy } from "../empty-state.styles";

export default function AdminTrabalhosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Trabalhos submetidos"
        description="Tabela administrativa será adicionada quando o fluxo de submissão existir."
      />
      <EmptyStateContainer>
        <Card>
          <EmptyStateCopy>Nenhum dado de submissão foi implementado neste recorte.</EmptyStateCopy>
        </Card>
      </EmptyStateContainer>
    </>
  );
}
