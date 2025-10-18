"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/atoms/typography";
import styles from "./FooterLinks.module.css";

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  /**
   * Array aus Navigationslinks für den Footer
   */
  links: FooterLinkItem[];

  /**
   * Optional zusätzliche Klasse
   */
  className?: string;
}

/**
 * 🧭 FooterLinks – Molekül für strukturierte Footer-Navigation.
 * Nutzt das universelle Link-Atom, um Theme-kompatible Navigation zu erzeugen.
 *
 * 📘 Verwendung:
 * ```tsx
 * <FooterLinks links={[
 *   { label: "Kontakt", href: "/contact" },
 *   { label: "Impressum", href: "/impressum" }
 * ]}/>
 * ```
 */
export default function FooterLinks({ links, className = "" }: FooterLinksProps) {
  const pathname = usePathname();

  return (
    <motion.nav
      className={`${styles.footerLinks} ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
    >
      {links.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            variant={isActive ? "accent" : "muted"}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </motion.nav>
  );
}
