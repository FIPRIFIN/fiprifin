"use client";

import React from "react";
import BaseHeader from "@/components/layout/BaseHeader";
import Logo from "@/components/ui/atoms/brand/Logo";
import LinkWrapper from "@/components/ui/molecules/layout/LinkWrapper";
import LinkHeader from "@/components/ui/atoms/typography/LinkHeader";
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
          <LinkHeader href="/about">Über uns</LinkHeader>
          <LinkHeader href="/shop">Shop</LinkHeader>
          <LinkHeader href="/contact">Kontakt</LinkHeader>
        </LinkWrapper>
      </div>

      {/* === Mobile Navigation === */}
      <div className={styles.navMobile}>
        <BurgerMenu>
          <LinkWrapper direction="vertical" align="center" gap="space-3">
            <LinkHeader href="/about">Über uns</LinkHeader>
            <LinkHeader href="/shop">Shop</LinkHeader>
            <LinkHeader href="/contact">Kontakt</LinkHeader>
          </LinkWrapper>
        </BurgerMenu>
      </div>
    </BaseHeader>
  );
}
