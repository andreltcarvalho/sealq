import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-[#d9d4bd] bg-[#fbfaf5] p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
