"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import HeroProduct from "@/components/Sections/Hero/HeroProduct";
import HiddenHeadline from "@/components/ui/atoms/typography/HiddenHeadline";
import ComingSoonSection from "@/components/Sections/ComingSoon/ComingSoonSection";
import styles from "./Home.module.css";

export default function Home() {
  const pathname = usePathname();

  // 🩵 Safari/iPad Layout Bugfix (forced repaint bei Route-Wechsel)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  }, [pathname]);

  return (
    <main className={styles.main}>
      <Container>
          <div className={styles.heroContent}>
            <HiddenHeadline
              text="Verosoma Budget – Das digitale Haushaltsbuch und Finanzplaner für Familien"
              id="verosoma-budget-heading"
            />
            <HeroProduct
              imageSrc="/images/produktcover/TestProduktBalancesvg.svg"
              imageAlt="Produktcover von Verosoma Budget – digitales Haushaltsbuch Tool für Familien"
              description="Struktur schafft Freiheit. Dein klarer Start in die Finanzordnung – Schritt für Schritt. Das digitale Haushaltsbuch für junge Familien und moderne Haushalte – gestaltet für Übersicht, Kontrolle und Ruhe."
              counterTarget={1284}
              ctaPrimary={{ label: "Jetzt kaufen", href: "/shop/verosoma-budget" }}
              ctaSecondary={{ label: "Verstehen", href: "/verosoma-budget" }}
            />
          </div>
          <HiddenHeadline
            as="h2"
            text="Verosoma Flow – Coming Soon"
            id="verosoma-flow-heading"
          />
          <ComingSoonSection
            imageSrc="/images/produktcover/TestProduktFlowsvg.svg"
            imageAlt="Produktcover von Verosoma Flow – digitales Finanzcoaching Tool (Coming Soon)"
            title="Verosoma Flow – Coming Soon"
            description={
              <>
                Nach dem Erfolg von <strong>Verosoma Budget</strong> folgt das
                nächste Kapitel: <br />
                <em>Flow</em> – dein smarter Begleiter für finanzielle Klarheit,
                Gelassenheit und gesunde Routinen im Umgang mit Geld. Bald
                verfügbar.
              </>
            }
            cta={{ label: "Frühzugang sichern", href: "/newsletter" }}
          />
      </Container>
    </main>
  );
}
