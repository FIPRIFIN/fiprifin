"use client";

import * as React from "react";
import BaseSection from "@/components/layout/BaseSection";
import Headline from "@/components/ui/atoms/typography/Headline";
import Text from "@/components/ui/atoms/typography/Text";
import ArticleContainer from "@/components/ui/molecules/ArticleContainer";
import styles from "./TextSection.module.css";

interface TextSectionProps {
  /**
   * Überschrift der Section (optional)
   */
  title?: string;

  /**
   * Einleitung oder Beschreibung (optional)
   */
  description?: string;

  /**
   * Inhalt der Section – meist <ArticleContainer> oder eigener Content
   */
  children?: React.ReactNode;

  /**
   * ID für Anker oder aria-labelledby
   */
  id?: string;
}

/**
 * 🧱 TextSection – Standard-Section für redaktionelle Inhalte
 * Ideal für Impressum, Datenschutz, Über-Uns, AGB usw.
 * Kombiniert BaseSection, Headline, Text und ArticleContainer.
 */
export default function TextSection({
  title,
  description,
  children,
  id,
}: TextSectionProps) {
  return (
    <BaseSection id={id} background="transparent" ariaLabelledby={id}>
      <div className={`${styles.textSection}`}>
        {title && (
          <Headline
            level="h2"
            variant="default"
            align="center"
          >
            {title}
          </Headline>
        )}

        {description && (
          <Text
            variant="default"
            align="center"
          >
            {description}
          </Text>
        )}

        <ArticleContainer>{children}</ArticleContainer>
      </div>
    </BaseSection>
  );
}
