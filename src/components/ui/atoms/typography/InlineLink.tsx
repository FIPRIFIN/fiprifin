import NextLink from "next/link";
import styles from "./InlineLink.module.css";

interface InlineLinkProps {
  /**
   * Ziel-URL
   */
  href: string;

  /**
   * Verlinkter Text oder Inline-Element
   */
  children: React.ReactNode;

  /**
   * Verhalten: externer Link öffnet neuen Tab
   */
  external?: boolean;

  /**
   * Visuelle Variante
   */
  variant?: "default" | "accent" | "muted";

  /**
   * Optionale Klasse
   */
  className?: string;
}

/**
 * 🧩 InlineLink – Stilistisch integrierter Link für Fließtext.
 * Wird z. B. in Text-Komponenten, Datenschutz- oder Blogseiten verwendet.
 *
 * 📘 Beispiel:
 * ```tsx
 * <Text>
 *   Erfahre mehr über unsere <InlineLink href="/datenschutz">Datenschutzrichtlinien</InlineLink>.
 * </Text>
 * ```
 */
export default function InlineLink({
  href,
  children,
  external = false,
  variant = "accent",
  className = "",
}: InlineLinkProps) {
  const combinedClass = [styles.inlineLink, styles[variant], className].join(" ");

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
