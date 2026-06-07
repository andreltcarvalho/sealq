import { RegistrationForm } from "@/components/event/RegistrationForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Aside, AsideCopy, AsideNotice, AsideTitle, RegistrationLayout } from "./page.styles";

export default function InscricaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inscrição"
        title="Inscrição na SEALQ"
        description="Preencha seus dados para simular a inscrição na Semana de Entomologia e Acarologia Luiz de Queiroz."
      />
      <RegistrationLayout>
        <RegistrationForm />

        <Aside>
          <AsideTitle>Sobre esta etapa</AsideTitle>
          <AsideCopy>
            Este formulário ainda não grava dados em banco. O botão de inscrição exibe apenas
            uma confirmação fake, como previsto para o MVP inicial.
          </AsideCopy>
          <AsideNotice>
            A integração real com Supabase poderá reaproveitar estes campos quando a persistência
            for adicionada.
          </AsideNotice>
        </Aside>
      </RegistrationLayout>
    </>
  );
}
