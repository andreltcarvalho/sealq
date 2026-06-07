import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import {
  AdminContainer,
  AdminLink,
  AdminLinks,
  StatLabel,
  StatsGrid,
  StatValue,
} from "./page.styles";

const stats = [
  ["Inscritos", "0"],
  ["Trabalhos", "0"],
  ["Pendentes", "0"],
];

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Painel administrativo inicial"
        description="Área demonstrativa da SEALQ sem autenticação, backend ou dados reais neste momento."
      />
      <AdminContainer>
        <StatsGrid>
          {stats.map(([label, value]) => (
            <Card key={label}>
              <StatLabel>{label}</StatLabel>
              <StatValue>{value}</StatValue>
            </Card>
          ))}
        </StatsGrid>
        <AdminLinks>
          <AdminLink href="/admin/inscritos">Ver inscritos</AdminLink>
          <AdminLink href="/admin/trabalhos">Ver trabalhos</AdminLink>
        </AdminLinks>
      </AdminContainer>
    </>
  );
}
