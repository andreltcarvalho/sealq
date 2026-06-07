import {
  Brand,
  Copy,
  FooterContainer,
  FooterLink,
  FooterRoot,
  Heading,
  IntroCopy,
  LinkList,
} from "./Footer.styles";

export function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>
        <div>
          <Brand>SEALQ</Brand>
          <IntroCopy>
            Semana de Entomologia e Acarologia Luiz de Queiroz, com identidade
            visual inspirada nas culturas de cana-de-açúcar, citros e milho.
          </IntroCopy>
        </div>

        <div>
          <Heading>Navegação</Heading>
          <LinkList>
            <FooterLink href="/programacao">Programação</FooterLink>
            <FooterLink href="/palestrantes">Palestrantes</FooterLink>
            <FooterLink href="/evento">Sobre o evento</FooterLink>
          </LinkList>
        </div>

        <div>
          <Heading>Organização</Heading>
          <Copy>
            Piracicaba, SP
            <br />
            contato@sealq.edu.br
          </Copy>
        </div>
      </FooterContainer>
    </FooterRoot>
  );
}
