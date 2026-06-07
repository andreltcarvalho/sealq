import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import {
  Actions,
  EventPanel,
  EventPanelGrid,
  Eyebrow,
  HeroContainer,
  HeroCopy,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HighlightCopy,
  HighlightsGrid,
  HighlightsSection,
  HighlightTitle,
  KeyInfo,
  KeyInfoLabel,
  KeyInfoList,
  KeyInfoName,
  KeyInfoValue,
  Logo,
  LogoFrame,
} from "./page.styles";

export default function Home() {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <div>
            <Eyebrow>Piracicaba | 2027</Eyebrow>
            <HeroTitle>SEALQ</HeroTitle>
            <HeroSubtitle>Semana de Entomologia e Acarologia Luiz de Queiroz</HeroSubtitle>
            <HeroCopy>
              Uma experiência digital para reunir programação, palestrantes, inscrições e
              submissões de trabalhos em torno das culturas de cana-de-açúcar, citros e milho.
            </HeroCopy>
            <Actions>
              <ButtonLink href="/inscricao">Ver inscrição</ButtonLink>
              <ButtonLink href="/programacao" variant="secondary">
                Conferir programação
              </ButtonLink>
            </Actions>
          </div>

          <EventPanel>
            <EventPanelGrid>
              <LogoFrame>
                <Logo
                  src="/sealq-logo.jpeg"
                  alt="Logo da IV SEALQ"
                  width={572}
                  height={496}
                  priority
                />
              </LogoFrame>
              <KeyInfo>
                <KeyInfoLabel>Informações-chave</KeyInfoLabel>
                <KeyInfoList>
                  <div>
                    <KeyInfoName>Tema</KeyInfoName>
                    <KeyInfoValue>Cana-de-açúcar | Citros | Milho</KeyInfoValue>
                  </div>
                  <div>
                    <KeyInfoName>Local</KeyInfoName>
                    <KeyInfoValue>Piracicaba, SP</KeyInfoValue>
                  </div>
                  <div>
                    <KeyInfoName>Evento</KeyInfoName>
                    <KeyInfoValue>Entomologia e Acarologia Luiz de Queiroz</KeyInfoValue>
                  </div>
                </KeyInfoList>
              </KeyInfo>
            </EventPanelGrid>
          </EventPanel>
        </HeroContainer>
      </HeroSection>

      <HighlightsSection>
        <HighlightsGrid>
          {[
            ["Programação", "Agenda organizada por dias, horários e atividades técnicas."],
            ["Palestrantes", "Espaço para convidados, instituições e temas científicos."],
            ["Organização", "Estrutura simples para conduzir o evento com baixa manutenção."],
          ].map(([title, description]) => (
            <Card key={title}>
              <HighlightTitle>{title}</HighlightTitle>
              <HighlightCopy>{description}</HighlightCopy>
            </Card>
          ))}
        </HighlightsGrid>
      </HighlightsSection>
    </>
  );
}
