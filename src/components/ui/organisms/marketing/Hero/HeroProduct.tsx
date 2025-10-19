"use client";

import Counter from "@/components/ui/atoms/visuals/Counter";
import { Button, ButtonWrapper } from "@/components/ui/atoms/buttons";
import BaseSection from "@/components/ui/molecules/layout/BaseSection";
import styles from "./HeroProduct.module.css";
import { Text } from "@/components/ui/atoms/typography";
import { useMediaQuery } from "@/utils/useMediaQuery";
import SvgDynamic from "@/components/ui/atoms/visuals/SvgDynamic";
import ContentSplit from "@/components/ui/molecules/layout/ContentSplit";

/**
 * ============================================================
 * 🦸 HeroProduct – Hauptprodukt-Section
 * ------------------------------------------------------------
 * Mobile-first, semantisch sauber und CD-konform.
 * Nutzt BaseSection (Container), ContentSplit (Layout),
 * MediaWrapper (Visual) und SvgDynamic (Atom).
 * ============================================================
 */
interface HeroProductProps {
  description: string;
  counterTarget?: number;
  counterLabel?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  id?: string;
  ariaLabelledby?: string;
}

export default function HeroProduct({
  description,
  counterTarget,
  counterLabel = "+ aktive Planner",
  ctaPrimary,
  ctaSecondary,
  id,
  ariaLabelledby,
}: HeroProductProps) {
  // === Responsive Verhalten ===
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");

  const buttonSize = isDesktop ? "md" : isTablet ? "md" : "sm";
  const align = isDesktop ? "left" : "center";

  // === Inhalt definieren ===
  const visual = (
      <SvgDynamic src="/images/produktcover/TestProduktBalancesvg.svg" className="svg svg--xl svg--primary svg--rounded" />
  );

  const content = (
    <div className={styles.content}>
      {counterTarget && (
        <Counter target={counterTarget} duration={3} label={counterLabel} />
      )}

      <Text>{description}</Text>

      <ButtonWrapper spacing="md" align={align} className={styles.ctaWrapper}>
        <Button
          href={ctaPrimary.href}
          variant="primary"
          className={styles.primaryCTA}
          size={buttonSize}
        >
          {ctaPrimary.label}
        </Button>

        {ctaSecondary && (
          <Button
            href={ctaSecondary.href}
            variant="ghost"
            className={styles.secondaryCTA}
            size={buttonSize}
          >
            {ctaSecondary.label}
          </Button>
        )}
      </ButtonWrapper>
    </div>
  );

  // === Layout + BaseSection ===
  return (
    <BaseSection
      id={id}
      background="transparent"
      ariaLabelledby={ariaLabelledby}
    >
      <ContentSplit visual={visual} content={content} />
    </BaseSection>
  );
}
