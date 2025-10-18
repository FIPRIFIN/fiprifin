"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/molecules/layout/Container";
import BaseFooter from "@/components/ui/molecules/layout/BaseFooter";
import FooterLinks from "@/components/ui/molecules/navigation/FooterLinks";
import SocialLinks from "@/components/ui/molecules/socials/SocialLinks";
import Divider from "@/components/ui/atoms/visuals/Divider";
import ThemeSwitch from "@/utils/ThemeSwitch";
import CopyrightNotice from "@/components/ui/atoms/meta/CopyrightNotice";

import styles from "./Footer.module.css";


export default function Footer() {

  const links = [
    { label: "Kontakt", href: "/contact" },
    { label: "DNA", href: "/dna" },
    { label: "Insights", href: "/insights" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.26, 1, 0.36, 1] }}
    >
        <BaseFooter>
          <FooterLinks links={links} />
          <SocialLinks socials={["instagram", "linkedin", "github", "x"]} size={22} />
          <ThemeSwitch />
          <Divider variant="subtle" width="100%" />
          <CopyrightNotice brand="Verosoma" />
        </BaseFooter>
    </motion.footer>
  );
}
