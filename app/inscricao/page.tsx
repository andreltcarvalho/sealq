import { RegistrationForm } from "@/components/event/RegistrationForm";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";

export default function InscricaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inscrição"
        title="Inscrição na SEALQ"
        description="Preencha seus dados para simular a inscrição na Semana de Entomologia e Acarologia Luiz de Queiroz."
      />
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_0.42fr] lg:items-start">
        <RegistrationForm />

        <aside className="rounded-lg border border-[#d9d4bd] bg-[#eef3e6] p-6">
          <h2 className="text-lg font-semibold text-[#16351f]">Sobre esta etapa</h2>
          <p className="mt-3 text-sm leading-6 text-[#566247]">
            Este formulário ainda não grava dados em banco. O botão de inscrição
            exibe apenas uma confirmação fake, como previsto para o MVP inicial.
          </p>
          <div className="mt-6 rounded-md bg-[#0b4a24] p-4 text-sm leading-6 text-white">
            A integração real com Supabase poderá reaproveitar estes campos quando a
            persistência for adicionada.
          </div>
        </aside>
      </Container>
    </>
  );
}
