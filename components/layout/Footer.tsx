import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#d9d4bd] bg-[#fbfaf5]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-bold text-[#0b4a24]">SEALQ</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#566247]">
            Semana de Entomologia e Acarologia Luiz de Queiroz, com identidade
            visual inspirada nas culturas de cana-de-açúcar, citros e milho.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#16351f]">Navegação</p>
          <div className="mt-3 grid gap-2 text-sm text-[#566247]">
            <Link href="/programacao" className="hover:text-[#0b4a24]">
              Programação
            </Link>
            <Link href="/palestrantes" className="hover:text-[#0b4a24]">
              Palestrantes
            </Link>
            <Link href="/evento" className="hover:text-[#0b4a24]">
              Sobre o evento
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#16351f]">Organização</p>
          <p className="mt-3 text-sm leading-6 text-[#566247]">
            Piracicaba, SP
            <br />
            contato@sealq.edu.br
          </p>
        </div>
      </Container>
    </footer>
  );
}
