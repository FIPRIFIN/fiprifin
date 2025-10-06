"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
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

const TAP_PULSE_DURATION = 250;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // === Scroll Progress Bar ===
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 18,
    restDelta: 0.001,
  });

  // === Navigation click handler ===
  const handleNavClick = (href: string) => {
    setTimeout(() => {
      setMenuOpen(false);
      router.push(href);
    }, TAP_PULSE_DURATION);
  };

  // === Close menu when clicking outside ===
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const navEl = navRef.current;
      const burgerEl = document.querySelector(`.${styles.burger}`);
      if (
        navEl?.contains(e.target as Node) ||
        burgerEl?.contains(e.target as Node)
      )
        return;
      setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [menuOpen]);

  // === Scroll blur intensity ===
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.26, 1, 0.36, 1] }}
      >
        <Container>
          <div className={styles.inner}>
            {/* === Logo === */}
            <button
              className={styles.logo}
              onClick={() => handleNavClick("/")}
              aria-label="Zur Startseite"
            >
              <span className={styles.accent}>FI</span>RST<br />
              <span className={styles.accent}>PRI</span>NCIPLE<br />
              <span className={styles.accent}>FIN</span>ANCE
            </button>

            {/* === Burger Button === */}
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </Container>

        {/* === Scroll Progress Bar === */}
        <motion.div
          className={styles.scrollProgress}
          style={{ scaleX }}
          initial={{ scaleX: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </motion.header>

      {/* === Navigation via Portal === */}
      {mounted &&
        createPortal(
          <nav
            ref={navRef}
            className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
            aria-label="Hauptnavigation"
          >
            {/* === X zum Schließen (fix) === */}
            <button
              className={styles.closeButton}
              onClick={() => setMenuOpen(false)}
              aria-label="Menü schließen"
            >
              <FiX size={26} />
            </button>

            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>,
          document.body
        )}
    </>
  );
}
