/**
 * Baut JSON-LD-Daten für Breadcrumbs.
 * @param baseUrl z. B. "https://fiprifin.de"
 * @param parts Array der Pfadsegmente in Reihenfolge, z. B. ["insights", "JungeFamilien", "haushaltsplaner"]
 */
export function buildBreadcrumbJsonLd(baseUrl: string, parts: string[]) {
  const itemListElement = parts.map((part, index) => {
    const name = part
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const url = `${baseUrl}/${parts.slice(0, index + 1).join("/")}`;

    return {
      "@type": "ListItem",
      position: index + 1,
      name,
      item: url,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
