"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/atoms/typography";
import styles from "./SocialLinks.module.css";
import type { ReactElement } from "react";

type SocialType = "instagram" | "linkedin" | "github" | "x";

interface SocialLinksProps {
  /**
   * Liste der Social-Networks, die angezeigt werden sollen.
   * Beispiel: ["instagram", "linkedin", "github"]
   */
  socials?: SocialType[];

  /**
   * Optional benutzerdefinierte Größe der Icons (Standard: 20)
   */
  size?: number;

  /**
   * Optionale Layout-Variante (horizontal, vertical, minimal)
   */
  layout?: "horizontal" | "vertical" | "minimal";

  /**
   * Optional zusätzliche CSS-Klassen
   */
  className?: string;
}

/**
 * 🤝 SocialLinks – Molekül für zentrale Social-Media-Verlinkungen.
 * Nutzt das Link-Atom für Theme-Awareness & Accessibility.
 *
 * 📘 Verwendung:
 * ```tsx
 * <SocialLinks socials={["instagram", "linkedin"]} />
 * <SocialLinks socials={["github", "x"]} layout="horizontal" size={24} />
 * ```
 */
export default function SocialLinks({
  socials = ["instagram", "linkedin"],
  size = 20,
  layout = "horizontal",
  className = "",
}: SocialLinksProps) {
const icons: Record<SocialType, ReactElement> = {
    instagram: <FaInstagram size={size} />,
    linkedin: <FaLinkedin size={size} />,
    github: <FaGithub size={size} />,
    x: <FaXTwitter size={size} />,
  };

  const urls: Record<SocialType, string> = {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    x: "https://x.com",
  };

  return (
    <motion.div
      className={`${styles.wrapper} ${styles[layout]} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {socials.map((network) => (
        <Link
          key={network}
          href={urls[network]}
          external
          icon
          variant="accent"
          className={styles.iconLink}
        >
          {icons[network]}
        </Link>
      ))}
    </motion.div>
  );
}
