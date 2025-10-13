"use client";

import React from "react";
import BaseHeader from "@/components/layout/BaseHeader";
import Logo from "@/components/ui/atoms/brand/Logo";
import LinkWrapper from "@/components/ui/molecules/layout/LinkWrapper";
import Link from "@/components/ui/atoms/typography/Link";
import BurgerMenu from "@/components/ui/molecules/navigation/BurgerMenu";
import styles from "./Header.module.css";

/**
 * 🧠 Header (Organism) – globaler Navigationsbereich
 * -------------------------------------------------
 * Minimalistisch, fix dark, Apple-inspirierter Aufbau.
 * Kombiniert Logo, Navigation (LinkWrapper) und BurgerMenu (mobile-first).
 *
 * 📘 Verwendung:
 * ```tsx
 * <Header />
 * ```
 */
export default function Header() {
  return (
    <BaseHeader>
      <div className={styles.left}>
        <Logo href="/" />
      </div>

      {/* === Desktop Navigation === */}
      <div className={styles.navDesktop}>
        <LinkWrapper direction="horizontal" align="right" gap="space-2">
          <Link href="/about">Über uns</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Kontakt</Link>
        </LinkWrapper>
      </div>

      {/* === Mobile Navigation === */}
      <div className={styles.navMobile}>
        <BurgerMenu>
          <LinkWrapper direction="vertical" align="center" gap="space-3">
            <Link href="/about">Über uns</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Kontakt</Link>
          </LinkWrapper>
        </BurgerMenu>
      </div>
    </BaseHeader>
  );
}
