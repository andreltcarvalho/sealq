"use client";

import { ThemeProvider } from "styled-components";
import { concursoTheme } from "@/styles/concurso-theme";

export function ConcursoThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={concursoTheme}>{children}</ThemeProvider>;
}

