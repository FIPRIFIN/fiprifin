// app/layout.tsx
import "./../styles/globals.css";
import "../styles/layout.css";
import "../styles/typography.css";
import type { Metadata } from "next";
import Header from "@/components/ui/organisms/Header/Header";
import Footer from "@/components/layout/Footer";

/**
 * 🌐 Globale Portal-ID
 * Wird für Overlays, BurgerMenus, Modals etc. verwendet.
 * Zentral definiert, damit alle Komponenten dasselbe Ziel nutzen.
 */
export const PORTAL_ROOT_ID = "verosoma-portal-root";

export const metadata: Metadata = {
  title: "Verosoma",
  description: "Struktur schafft Freiheit",
  metadataBase: new URL("https://verosoma.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="pageWrapper">
        <Header />

        {/* 🔮 Globales Portal-Root */}
        <div id={PORTAL_ROOT_ID} />

        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
