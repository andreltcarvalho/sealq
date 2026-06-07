import { Description, Eyebrow, HeaderContainer, HeaderSection, Title } from "./PageHeader.styles";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <HeaderSection>
      <HeaderContainer>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </HeaderContainer>
    </HeaderSection>
  );
}
