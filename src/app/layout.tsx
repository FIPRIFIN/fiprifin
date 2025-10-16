import "./../styles/globals.css";
import "../styles/layout.css";
import "../styles/typography.css";
import type { Metadata } from "next";
import Header from "@/components/ui/organisms/Layout/Header/Header";
import Footer from "@/components/ui/organisms/Layout/Footer/Footer";
import { PORTAL_ROOT_ID } from "@/utils/portal";

export const metadata: Metadata = {
  title: "Verosoma",
  description: "Struktur schafft Freiheit",
  metadataBase: new URL("https://verosoma.com"),
  alternates: { canonical: "/" },
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
        <div id={PORTAL_ROOT_ID} /> {/* 🔮 Portal-Root */}
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
