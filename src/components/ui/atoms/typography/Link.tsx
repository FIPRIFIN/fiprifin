import NextLink from "next/link";
import styles from "./Link.module.css";

interface LinkProps {
  /**
   * Ziel-URL
   */
  href: string;

  /**
   * Linktext oder Kind-Element
   */
  children: React.ReactNode;

  /**
   * Visuelle Variante
   */
  variant?: "default" | "accent" | "muted" | "underline";

  /**
   * Verhalten: extern oder intern
   */
  external?: boolean;

  /**
   * Optionale zusätzliche Klasse
   */
  className?: string;
}

/**
 * 🔗 Link – semantischer, SEO-freundlicher Link-Atom.
 * Unterstützt interne & externe Navigation, Mobile-First und Verosoma-CD-Stil.
 *
 * 📘 Verwendung:
 * ```tsx
 * <Link href="/kontakt">Kontakt aufnehmen</Link>
 * <Link href="https://verosoma.de" external variant="accent">Verosoma Website</Link>
 * <Link href="#features" variant="underline">Mehr erfahren</Link>
 * ```
 */
export default function Link({
  href,
  children,
  variant = "default",
  external = false,
  className = "",
}: LinkProps) {
  const combinedClass = [styles.link, styles[variant], className].join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={combinedClass}
        target="_blank"
        rel="noopener noreferrer"
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
