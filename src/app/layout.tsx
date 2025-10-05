import "./../styles/globals.css";
import '../styles/layout.css';
import '../styles/typography.css';
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "FIPRIFIN",
  description: "Finanzen verstehen. Klar. Digital.",
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
