import type { Metadata } from "next";

/* ===========================
   🔍 SEO METADATA
=========================== */
export const metadata: Metadata = {
  title: "Verosoma Budget – Das digitale Haushaltsbuch für Familien",
  description:
    "Verosoma Budget ist das digitale Haushaltsbuch und Finanzplaner-Tool für moderne Familien. Struktur, Übersicht und Kontrolle für dein Geldmanagement.",
  alternates: {
    canonical: "https://verosoma.com",
  },
  openGraph: {
    title: "Verosoma Budget – Das digitale Haushaltsbuch für Familien",
    description:
      "Behalte die Kontrolle über dein Geld mit Verosoma Budget – dem digitalen Haushaltsbuch für Familien. Struktur schafft Freiheit.",
    url: "https://verosoma.com",
    siteName: "Verosoma",
    locale: "de_DE",
    type: "website",
    /* 
      TODO 🖼️: OG-Image hinzufügen, sobald verfügbar.
      Beispiel:
      images: [
        {
          url: "https://verosoma.com/images/og/VerosomaBudgetOG.jpg",
          width: 1200,
          height: 630,
          alt: "Verosoma Budget – digitales Haushaltsbuch für Familien",
        },
      ],
    */
  },
  twitter: {
    card: "summary_large_image",
    title: "Verosoma Budget – Das digitale Haushaltsbuch für Familien",
    description:
      "Struktur schafft Freiheit. Verosoma Budget bringt Ordnung in deine Finanzen – klar, digital und familienfreundlich.",
    /* 
      TODO 🖼️: Twitter-Image hinzufügen (gleiches Bild wie OG möglich)
      Beispiel:
      images: ["https://verosoma.com/images/og/VerosomaBudgetOG.jpg"],
    */
  },
};
