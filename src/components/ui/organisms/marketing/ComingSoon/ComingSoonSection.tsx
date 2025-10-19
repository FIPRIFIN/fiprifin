"use client";

import { Button, ButtonWrapper} from "@/components/ui/atoms/buttons";
import BaseSection from "@/components/ui/molecules/layout/BaseSection";
import styles from "./ComingSoonSection.module.css";
import { Text, Headline } from "@/components/ui/atoms/typography";
import { useMediaQuery } from "@/utils/useMediaQuery";
import SvgDynamic from "@/components/ui/atoms/visuals/SvgDynamic";
import ContentSplit from "@/components/ui/molecules/layout/ContentSplit";

interface ComingSoonSectionProps {


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

  const visual = (
      <SvgDynamic src="/images/produktcover/TestProduktFlowsvg.svg" className="svg svg--xl svg--primary svg--rounded" />
  )

  const content = (
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
  )


  return (
    <BaseSection id={id} background="transparent" ariaLabelledby={ariaLabelledby}>
      <ContentSplit visual={visual} content={content} />
    </BaseSection>
  );
}
