import "./../styles/globals.css";
import '../styles/layout.css';
import '../styles/typography.css';
import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Verosoma",
  description: "Struktur schafft Freiheit",
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
          <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
