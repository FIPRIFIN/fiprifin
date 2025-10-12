"use client";

import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { Button, ButtonWrapper} from "@/components/ui/atoms/buttons";
import BaseSection from "@/components/layout/BaseSection";
import styles from "./HeroProduct.module.css";
import { Text } from "@/components/ui/atoms/typography";

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

          <ButtonWrapper>
            <Button href={ctaPrimary.href} variant="primary">
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="ghost">
                {ctaSecondary.label}
              </Button>
            )}
          </ButtonWrapper>
        </div>
      </div>
    </BaseSection>
  );
}
