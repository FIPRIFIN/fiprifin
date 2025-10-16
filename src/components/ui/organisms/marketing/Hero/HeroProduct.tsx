"use client";

import Image from "next/image";
import Counter from "@/components/ui/atoms/visuals/Counter";
import { Button, ButtonWrapper} from "@/components/ui/atoms/buttons";
import BaseSection from "@/components/ui/molecules/layout/BaseSection";
import styles from "./HeroProduct.module.css";
import { Text } from "@/components/ui/atoms/typography";
import { useMediaQuery } from "@/utils/useMediaQuery";

interface HeroProductProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  counterTarget?: number;
  counterLabel?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  id?: string;
  ariaLabelledby?: string;
}

/**
 * 🦸 HeroProduct – Hauptprodukt-Section
 * Nutzt BaseSection für Layout + Blur + Animation.
 * Mobile-first, semantisch sauber, CD-konform.
 */
export default function HeroProduct({
  imageSrc,
  imageAlt,
  description,
  counterTarget,
  counterLabel = "+ aktive Planner",
  ctaPrimary,
  ctaSecondary,
  id,
  ariaLabelledby,
}: HeroProductProps) {

  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");

  const buttonSize = isDesktop ? "md" : isTablet ? "md" : "sm";
  const align = isDesktop ? "left" : isTablet ? "center" : "center";

  return (
    <BaseSection id={id} background="transparent" ariaLabelledby={ariaLabelledby}>
      <div className={styles.wrapper}>
        {/* === Visual / Produktbild === */}
        <div className={styles.coverVisual}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={styles.coverImage}
            width={560}
            height={560}
            priority
            unoptimized
          />
        </div>

        {/* === Text & CTA === */}
        <div className={styles.content}>
          {counterTarget && (
            <Counter target={counterTarget} duration={3} label={counterLabel} />
          )}

          <Text>{description}</Text>

          <ButtonWrapper spacing="md" align={align} className={styles.ctaWrapper}>
            <Button href={ctaPrimary.href} variant="primary" className={styles.primaryCTA} size={buttonSize}>
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="ghost" className={styles.secondaryCTA} size={buttonSize}>
                {ctaSecondary.label}
              </Button>
            )}
          </ButtonWrapper>
        </div>
      </div>
    </BaseSection>
  );
}
