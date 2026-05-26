import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-[#0b4a24] text-white shadow-sm hover:bg-[#063719]"
      : "border border-[#c9c29e] bg-[#fbfaf5] text-[#16351f] hover:border-[#0b4a24] hover:bg-[#eef3e6]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
