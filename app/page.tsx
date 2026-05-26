import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <section className="bg-[#fbfaf5]">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#d86f19]">
              Piracicaba | 2027
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#16351f] sm:text-6xl">
              SEALQ
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-[#294b2f]">
              Semana de Entomologia e Acarologia Luiz de Queiroz
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#566247]">
              Uma experiência digital para reunir programação, palestrantes,
              inscrições e submissões de trabalhos em torno das culturas de
              cana-de-açúcar, citros e milho.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/inscricao">Ver inscrição</ButtonLink>
              <ButtonLink href="/programacao" variant="secondary">
                Conferir programação
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-xl border border-[#d9d4bd] bg-white p-5 shadow-sm">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-center">
              <div className="mx-auto w-full max-w-64 overflow-hidden rounded-lg border border-[#e4dec7] bg-white">
                <Image
                  src="/sealq-logo.jpeg"
                  alt="Logo da IV SEALQ"
                  width={572}
                  height={496}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="rounded-lg bg-[#0b4a24] p-6 text-white">
                <p className="text-sm font-medium text-[#f6c65b]">Informacoes-chave</p>
                <div className="mt-6 grid gap-5">
                  <div>
                    <p className="text-sm text-[#dce8d4]">Tema</p>
                    <p className="mt-1 text-lg font-semibold">Cana-de-açúcar | Citros | Milho</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#dce8d4]">Local</p>
                    <p className="mt-1 text-lg font-semibold">Piracicaba, SP</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#dce8d4]">Evento</p>
                    <p className="mt-1 text-lg font-semibold">
                      Entomologia e Acarologia Luiz de Queiroz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#d9d4bd] bg-[#eef3e6]">
        <Container className="grid gap-5 py-12 md:grid-cols-3">
          {[
            ["Programação", "Agenda organizada por dias, horários e atividades técnicas."],
            ["Palestrantes", "Espaço para convidados, instituições e temas científicos."],
            ["Organização", "Estrutura simples para conduzir o evento com baixa manutenção."],
          ].map(([title, description]) => (
            <Card key={title}>
              <h2 className="text-lg font-semibold text-[#16351f]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#566247]">{description}</p>
            </Card>
          ))}
        </Container>
      </section>
    </>
  );
}
