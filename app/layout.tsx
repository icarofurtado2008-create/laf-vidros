import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Archivo({ subsets: ["latin"], variable: "--f-sans", display: "swap", axes: ["wdth"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "LAF Vidros — Vidro que transforma espaço",
  description:
    "Box, janelas, vitrines, espelhos e manutenção em vidro temperado. Instalação e manutenção especializada para ambientes residenciais e comerciais.",
  icons: { icon: "/img/logo.png" },
};
export const viewport: Viewport = { themeColor: "#0b0c0e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
