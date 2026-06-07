import type { ReactNode } from "react";
import { StyledButtonLink } from "./ButtonLink.styles";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <StyledButtonLink href={href} data-variant={variant}>
      {children}
    </StyledButtonLink>
  );
}
