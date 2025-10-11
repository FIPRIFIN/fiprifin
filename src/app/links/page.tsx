import Link from "next/link";
import { Globe, Brain, Scale, Shield } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import styles from "./links.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verosoma Links – Offizielle Übersicht",
  description:
    "Alle offiziellen Links, Insights und Ressourcen von Verosoma an einem Ort. Logik. Struktur. Freiheit.",
  alternates: {
    canonical: "https://verosoma.com/links",
  },
  openGraph: {
    title: "Verosoma – Offizielle Link-Übersicht",
    description:
      "Zentrale Übersicht zu Insights, Projekten und offiziellen Inhalten von Verosoma.",
    url: "https://verosoma.com/links",
    siteName: "Verosoma",
    locale: "de_DE",
    type: "website",
  },
};
export default function LinksPage() {
  const links = [
    { href: "/", label: "Website", icon: <Globe /> },
    { href: "/insights", label: "Insights", icon: <Brain /> },
    { href: "https://www.instagram.com/verosoma", target: "_blank", rel: "noopener noreferrer", label: "Instagram", icon: <SiInstagram /> },
    { href: "/impressum", label: "Impressum", icon: <Scale /> },
    { href: "/datenschutz", label: "Datenschutz", icon: <Shield /> },
  ];

  return (
    <section className={styles.linksStage} aria-labelledby="verosoma-links-heading">
      <h1 className="visuallyHidden">
        Verosoma Links – Zentrale Übersicht zu Insights, Projekten und offiziellen Inhalten
      </h1>
      <Image
        src="/images/MasterTransCropped.svg"
        alt="Verosoma Logo - Offizielle Markenidentität"
        className={styles.logoImage}
        width={400}
        height={400}
        unoptimized
      />
      <p className={styles.subtitle}>Logik. Struktur. Freiheit.</p>

      <div className={styles.buttonGrid}>
        {links.map(({ href, label, icon }) => (
          <Link key={href} href={href} className={styles.button}>
            <span className={styles.icon}>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
