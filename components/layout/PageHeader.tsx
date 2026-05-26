import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-[#d9d4bd] bg-[#eef3e6]">
      <Container className="py-14 sm:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-[#d86f19]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#16351f] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#566247]">{description}</p>
      </Container>
    </section>
  );
}
