import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://seguridad-salud-mcm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maria Clara Maya Morales | Seguridad y Salud en el Trabajo · Sector Agropecuario",
    template: "%s | Seguridad & Salud SST",
  },
  description:
    "Profesional en Administración en Seguridad y Salud en el Trabajo. Especialista en el sector agropecuario y pecuario. Implementación de SG-SST, Resolución 0312, ISO 45001. Entreríos, Antioquia.",
  keywords: [
    "Seguridad y Salud en el Trabajo", "SG-SST", "Resolución 0312",
    "SST agropecuario", "ISO 45001", "riesgos laborales",
    "Entreríos Antioquia", "Maria Clara Maya Morales", "FURAT", "GTC 45",
  ],
  authors: [{ name: "Maria Clara Maya Morales" }],
  creator: "Maria Clara Maya Morales",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    title: "Maria Clara Maya Morales | Seguridad y Salud en el Trabajo",
    description:
      "Sembrando cultura de prevención, cosechando productividad y bienestar. Especialista SST en el sector agropecuario y pecuario.",
    siteName: "Seguridad & Salud en el Trabajo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Clara Maya Morales | Seguridad y Salud en el Trabajo",
    description:
      "Especialista SST en el sector agropecuario. Implementación de SG-SST y cumplimiento de la Resolución 0312.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4DD9C0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
