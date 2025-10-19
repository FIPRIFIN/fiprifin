"use client";

import * as React from "react";
import styles from "./SvgDynamic.module.css";

/* ============================================================
   🧩 VEROSOMA SVG DYNAMIC – CORE ATOM
   ------------------------------------------------------------
   Lädt ein SVG aus /public und bettet es inline ein.
   Keine Loader, 100 % Turbopack-kompatibel.
   Farbe und Größe werden über globale Tokens (svg.css)
   oder Utility-Klassen gesteuert.
   ============================================================ */

/**
 * 🎛️ Props für SvgDynamic
 *
 * @property {string} src
 *  Pfad zur SVG-Datei in `/public`.
 *  Beispiel: `/icons/logo.svg`
 *
 * @property {string} [className]
 *  Zusätzliche Klassen.
 *  Wird an den Wrapper-<span> angehängt.
 *
 * @property {string | number} [width]
 *  Optional: überschreibt die Standardgröße des SVGs.
 *  Nützlich, wenn du keine Utility-Klasse verwenden willst.
 *  Beispiel: `width="120px"` oder `width={48}`
 *
 * @property {string | number} [height]
 *  Optional: individuelle Höhe.
 *  Standardmäßig = width (quadratisch).
 *
 * @property {boolean} [lazy]
 *  Wenn `true`, wird das SVG erst geladen,
 *  sobald es im Viewport sichtbar ist (Performance-Optimierung).
 *
 * @property {string} [title]
 *  Optionaler Titel für Accessibility (z. B. Screenreader-Name).
 *
 * @property {React.CSSProperties} [style]
 *  Inline-Styles, falls du Tokenwerte direkt injizieren willst.
 *
 * 📘 Beispiel:
 * ```tsx
 * <SvgDynamic
 *   src="/icons/LogoV.svg"
 *   className="svg svg--lg svg--primary"
 *   title="Verosoma Logo"
 * />
 * ```
 */
interface SvgDynamicProps {
  src: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  lazy?: boolean;
  title?: string;
  style?: React.CSSProperties;
}

export default function SvgDynamic({
  src,
  className = "",
  width,
  height,
  lazy = false,
  title,
  style,
}: SvgDynamicProps) {
  const [svg, setSvg] = React.useState<string | null>(null);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  /* ------------------------------------------------------------
     🔄 Lazy-Loading: SVG erst laden, wenn sichtbar (optional)
     ------------------------------------------------------------ */
  React.useEffect(() => {
    if (!lazy) {
      fetchSvg();
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchSvg();
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, lazy]);

  const fetchSvg = () => {
    fetch(src)
      .then((r) => r.text())
      .then((data) => setSvg(data))
      .catch((e) => console.error("SVG konnte nicht geladen werden:", e));
  };

  if (!svg) return <span ref={ref} className={[styles.svg, className].join(" ")} />;

  /* ------------------------------------------------------------
     🖼️ Render: Inline-SVG im Wrapper-<span>
     ------------------------------------------------------------ */
  return (
    <span
      ref={ref}
      className={[styles.svg, className].filter(Boolean).join(" ")}
      style={{
        width: width
          ? typeof width === "number"
            ? `${width}px`
            : width
          : undefined,
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : width
          ? typeof width === "number"
            ? `${width}px`
            : width
          : undefined,
        ...style,
      }}
      aria-label={title}
      role={title ? "img" : undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
