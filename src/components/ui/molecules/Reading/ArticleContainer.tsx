import * as React from "react";
import styles from "./ArticleContainer.module.css";

interface ArticleContainerProps {
  /**
   * Optional: Überschrift für SEO oder interne Strukturierung
   */
  id?: string;

  /**
   * Inhalt (z. B. Text, Headline, InlineLinks, Listen etc.)
   */
  children: React.ReactNode;

  /**
   * Optional: Breite der Fläche – "sm", "md", "lg"
   * Default: "md" (ideal für Fließtext)
   */
  width?: "sm" | "md" | "lg";

  /**
   * Optional: Hell- oder Dunkelmodus-Stil (für Sonderseiten)
   */
  tone?: "light" | "dark";
}

/**
 * 📄 ArticleContainer – lesefreundliche Content-Fläche
 * Für lange Texte wie Blogposts, Datenschutz oder About-Seiten.
 * Nutzt helles, kontrastarmes Design für maximale Lesbarkeit.
 *
 * 📘 Beispiel:
 * ```tsx
 * <ArticleContainer>
 *   <Headline level="h1">Impressum</Headline>
 *   <Text>Hier steht der rechtliche Hinweis ...</Text>
 * </ArticleContainer>
 * ```
 */
export default function ArticleContainer({
  id,
  children,
  width = "md",
  tone = "light",
}: ArticleContainerProps) {
  return (
    <article id={id} className={[styles.article, styles[width], styles[tone]].join(" ")}>
      {children}
    </article>
  );
}
