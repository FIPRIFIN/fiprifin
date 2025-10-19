"use client";
import BaseFooter from "@/components/ui/molecules/layout/BaseFooter";
import FooterLinks from "@/components/ui/molecules/navigation/FooterLinks";
import SocialLinks from "@/components/ui/molecules/socials/SocialLinks";
import Divider from "@/components/ui/atoms/visuals/Divider";
import ThemeSwitch from "@/utils/ThemeSwitch";
import CopyrightNotice from "@/components/ui/atoms/meta/CopyrightNotice";
import styles from "./Footer.module.css";
import MotionWrapper from "@/components/ui/molecules/visuals/MotionWrapper";


export default function Footer() {

  const links = [
    { label: "Kontakt", href: "/contact" },
    { label: "DNA", href: "/dna" },
    { label: "Insights", href: "/insights" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
      <MotionWrapper 
        className={styles.footer} 
        variant="fadeIn" 
        delay={0.1} 
        duration={0.8}
      >
        <BaseFooter>
          <FooterLinks links={links} />
          <SocialLinks socials={["instagram", "linkedin", "github", "x"]} size={22} />
          <ThemeSwitch />
          <Divider variant="subtle" width="100%" />
          <CopyrightNotice brand="Verosoma" />
        </BaseFooter>
      </MotionWrapper>

  );
}
