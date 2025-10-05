"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import styles from "./Header.module.css";

const NAV = [
  { label: "Startseite", href: "/" },
  { label: "DNA", href: "/dna" },
  { label: "Insights", href: "/insights" },
  { label: "Kontakt", href: "/contact" },
  { label: "Links", href: "/links" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Logo-Wordmark führt zur Startseite */}
          <Link href="/" aria-label="Zur Startseite" className={styles.logo}>
            <span className={styles.accent}>FI</span>RST<br />
            <span className={styles.accent}>PRI</span>NCIPLE<br />
            <span className={styles.accent}>FIN</span>ANCE
          </Link>

          {/* Navigation */}
          <nav
            className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
            aria-label="Hauptnavigation"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)} // Menü schließt beim Klick
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Burger-Button */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
