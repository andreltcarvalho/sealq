import {
  AdminLink,
  BrandDescription,
  BrandLink,
  BrandName,
  BrandText,
  HeaderContainer,
  HeaderRoot,
  LogoFrame,
  LogoImage,
  Navigation,
  NavigationLink,
} from "./Header.styles";

const navItems = [
  { href: "/evento", label: "Evento" },
  { href: "/programacao", label: "Programação" },
  { href: "/palestrantes", label: "Palestrantes" },
  { href: "/inscricao", label: "Inscrição" },
  { href: "/submissao", label: "Submissão" },
  { href: "/concurso/inscricao", label: "Concurso" },
];

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <BrandLink href="/" aria-label="Ir para o início">
          <LogoFrame>
            <LogoImage src="/sealq-logo.jpeg" alt="Logo SEALQ" width={48} height={48} priority />
          </LogoFrame>
          <BrandText>
            <BrandName>SEALQ</BrandName>
            <BrandDescription>
              Semana de Entomologia e Acarologia Luiz de Queiroz
            </BrandDescription>
          </BrandText>
        </BrandLink>

        <Navigation aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavigationLink key={item.href} href={item.href}>
              {item.label}
            </NavigationLink>
          ))}
        </Navigation>

        <AdminLink href="/concurso/login">Admin</AdminLink>
      </HeaderContainer>
    </HeaderRoot>
  );
}
