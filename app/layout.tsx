import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";

import { Footer } from "@/components/modules/footer";
import { WebsiteJsonLd } from "@/components/modules/json-ld";
import { Navbar } from "@/components/modules/navbar";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

/* ─── Polices optimisées via next/font (auto-hébergées) ─── */
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ─── Métadonnées globales (SEO + OpenGraph + Twitter) ─── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Parentalité bienveillante`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "parentalité bienveillante",
    "éducation positive",
    "parentalité consciente",
    "famille",
    "enfants",
    "conseils parents",
    "bien-être familial",
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Parentalité bienveillante`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Parentalité bienveillante`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${quicksand.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream font-body text-text antialiased">
        {/* Données structurées JSON-LD globales */}
        <WebsiteJsonLd />

        {/* Barre de navigation sticky */}
        <Navbar />

        {/* Contenu principal — sémantique <main> */}
        <main id="contenu-principal">{children}</main>

        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  );
}
