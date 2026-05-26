import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

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
        description="Area demonstrativa da SEALQ sem autenticacao, backend ou dados reais neste momento."
      />
      <Container className="py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map(([label, value]) => (
            <Card key={label}>
              <p className="text-sm text-[#566247]">{label}</p>
              <p className="mt-3 text-4xl font-semibold text-[#0b4a24]">{value}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md border border-[#c9c29e] bg-[#fbfaf5] px-4 py-3 text-sm font-semibold text-[#16351f] hover:border-[#0b4a24] hover:bg-[#eef3e6]"
            href="/admin/inscritos"
          >
            Ver inscritos
          </Link>
          <Link
            className="rounded-md border border-[#c9c29e] bg-[#fbfaf5] px-4 py-3 text-sm font-semibold text-[#16351f] hover:border-[#0b4a24] hover:bg-[#eef3e6]"
            href="/admin/trabalhos"
          >
            Ver trabalhos
          </Link>
        </div>
      </Container>
    </>
  );
}
