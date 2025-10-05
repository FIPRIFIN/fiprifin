import Link from "next/link";
import { Globe, Brain, Mail, Instagram, Scale, Shield } from "lucide-react";
import styles from "./links.module.css";

export default function LinksPage() {
  const links = [
    { href: "/", label: "Website", icon: <Globe /> },
    { href: "/insights", label: "Insights", icon: <Brain /> },
    { href: "/newsletter", label: "Newsletter", icon: <Mail /> },
    { href: "https://www.instagram.com/fiprifin", label: "Instagram", icon: <Instagram /> },
    { href: "/impressum", label: "Impressum", icon: <Scale /> },
    { href: "/datenschutz", label: "Datenschutz", icon: <Shield /> },
  ];

  return (
    <section className={styles.linksSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>FIRST PRINCIPLE FINANCE</h1>
        <p className={styles.subtitle}>Clarity. Simplicity. Freedom.</p>

        <div className={styles.buttonList}>
          {links.map(({ href, label, icon }) => (
            <Link key={href} href={href} className={styles.button}>
              <span className={styles.icon}>{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
