"use client";

import Image from "next/image";
import { Button, ButtonWrapper} from "@/components/ui/atoms/buttons";
import BaseSection from "@/components/layout/BaseSection";
import styles from "./ComingSoonSection.module.css";
import { Text, Headline } from "@/components/ui/atoms/typography";
import { useMediaQuery } from "@/app/utils/useMediaQuery";

interface ComingSoonSectionProps {
  /**
   * Bildquelle (Produktcover o.Ä.)
   */
  imageSrc: string;

  /**
   * Alt-Text für Barrierefreiheit & SEO
   */
  imageAlt: string;

  /**
   * Überschrift für das Produkt
   */
  title: string;

  /**
   * Beschreibungstext für die Section
   */
  description: React.ReactNode;

  /**
   * CTA-Button (Label + Link)
   */
  cta: { label: string; href: string };

  /**
   * Optional: ID + ARIA Label Reference
   */
  id?: string;
  ariaLabelledby?: string;
}

/**
 * 🚀 ComingSoonSection – universeller Teaser für kommende Produkte.
 * Mobile-first, SEO-ready, nutzt BaseSection für Layout, Blur & Animation.
 */
export default function ComingSoonSection({
  imageSrc,
  imageAlt,
  title,
  description,
  cta,
  id,
  ariaLabelledby,
}: ComingSoonSectionProps) 
{
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");

  const buttonSize = isDesktop ? "md" : isTablet ? "md" : "sm";
  const alignButton = isDesktop ? "left" : isTablet ? "center" : "center";


  return (
    <BaseSection id={id} background="transparent" ariaLabelledby={ariaLabelledby}>
      <div className={styles.wrapper}>
        {/* === Produktbild === */}
        <div className={styles.visual}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            width={460}
            height={460}
            unoptimized
          />
        </div>

        {/* === Inhalt === */}
        <div className={styles.content}>
          <Headline level="h2" variant="gradient" align="left" size="md">
            {title}
          </Headline>
          <Text>
            {description}
          </Text>
          <ButtonWrapper align={alignButton}>
            <Button href={cta.href} variant="primary" size={buttonSize}>
              {cta.label}
            </Button>
          </ButtonWrapper>
        </div>
      </div>
    </BaseSection>
  );
}
