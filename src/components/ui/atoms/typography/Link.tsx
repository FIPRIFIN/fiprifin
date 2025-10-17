import NextLink from "next/link";
import styles from "./Link.module.css";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?:
    | "default"
    | "accent"
    | "muted"
    | "underline"
    | "light-default"
    | "light-accent"
    | "light-muted"
    | "light-underline";
  external?: boolean;
  className?: string;

  /**
   * Wenn true → Icon-Link (zentriert, größerer Click-Bereich)
   */
  icon?: boolean;
}

/**
 * 🔗 Link – universeller semantischer Link-Atom
 * Unterstützt Text- & Icon-Links, interne + externe Ziele,
 * Theme-aware Farbsteuerung und Accessibility.
 *
 * 📘 Verwendung:
 * ```tsx
 * <Link href="/kontakt">Kontakt</Link>
 * <Link href="https://verosoma.de" external variant="accent">Website</Link>
 * <Link href="https://instagram.com" external icon><FaInstagram /></Link>
 * ```
 */
export default function Link({
  href,
  children,
  variant = "default",
  external = false,
  className = "",
  icon = false,
}: LinkProps) {
  const combinedClass = [
    styles.link,
    styles[variant],
    icon ? styles.icon : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={combinedClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icon ? "Social link" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={combinedClass}>
      {children}
    </NextLink>
  );
}
