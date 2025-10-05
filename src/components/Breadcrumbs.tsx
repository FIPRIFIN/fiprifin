"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Beispiel: /insights/JungeFamilien/haushaltsplaner → ["insights", "JungeFamilien", "haushaltsplaner"]
  const parts = pathname.split("/").filter(Boolean);

  // Hilfsfunktion zur Anzeige
  const formatName = (part: string) => {
    return part
      .replace(/([a-z])([A-Z])/g, "$1 $2") // z. B. JungeFamilien → Junge Familien
      .replace(/-/g, " ") // falls du mal Slugs mit Bindestrich hast
      .replace(/\b\w/g, (l) => l.toUpperCase()); // erste Buchstaben groß
  };

  let href = "";
  const crumbs = parts.map((part, index) => {
    href += `/${part}`;
    const isLast = index === parts.length - 1;

    return isLast ? (
      <span key={part} style={{ opacity: 0.7 }}>{formatName(part)}</span>
    ) : (
      <span key={part}>
        <Link href={href}>{formatName(part)}</Link> ›{" "}
      </span>
    );
  });

  return (
    <nav style={{ marginBottom: "1.5rem", fontSize: "0.9rem" }}>
      <Link href="/">Home</Link> › {crumbs}
    </nav>
  );
}
