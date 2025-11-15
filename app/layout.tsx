import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UAI Sistemas - Soluções Completas em TI",
  description: "Transformamos ideias em soluções digitais inovadoras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
