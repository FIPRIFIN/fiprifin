import NextLink from "next/link";
import styles from "./LinkHeader.module.css";

interface LinkHeaderProps {
  /** Ziel-URL */
  href: string;

  /** Text oder Kind */
  children: React.ReactNode;

  /** Verhalten: extern oder intern */
  external?: boolean;

  /** Optionale zusätzliche Klasse */
  className?: string;
}

/**
 * 🔗 LinkHeader – Header-spezifischer Link-Atom
 * ---------------------------------------------
 * Nutzt ausschließlich `--header-fg` für Farbe & Interaktion.
 * Ideal für Navigationselemente im Header (Dark Blur Style).
 *
 * 📘 Beispiel:
 * ```tsx
 * <LinkHeader href="/shop">Shop</LinkHeader>
 * ```
 */
export default function LinkHeader({
  href,
  children,
  external = false,
  className = "",
}: LinkHeaderProps) {
  const combinedClass = [styles.linkHeader, className].join(" ");

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
