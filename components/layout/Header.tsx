import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const navItems = [
  { href: "/evento", label: "Evento" },
  { href: "/programacao", label: "Programação" },
  { href: "/palestrantes", label: "Palestrantes" },
  { href: "/inscricao", label: "Inscrição" },
  { href: "/submissao", label: "Submissão" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9d4bd] bg-[#fbfaf5]/92 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir para o inicio">
          <span className="grid size-12 place-items-center overflow-hidden rounded-md border border-[#d9d4bd] bg-white">
            <Image
              src="/sealq-logo.jpeg"
              alt="Logo SEALQ"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-[#0b4a24]">SEALQ</span>
            <span className="hidden max-w-52 text-xs text-[#5d6148] sm:block">
              Semana de Entomologia e Acarologia Luiz de Queiroz
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#43533b] transition hover:bg-[#e9efe1] hover:text-[#0b4a24]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/admin"
          className="rounded-md border border-[#c9c29e] px-3 py-2 text-sm font-semibold text-[#0b4a24] transition hover:border-[#0b4a24] hover:bg-[#e9efe1]"
        >
          Admin
        </Link>
      </Container>
    </header>
  );
}
