export default function AffiliateBox({ items }:{ items?: {label:string; url:string}[] }) {
  if (!items || items.length === 0) return null;
  return (
    <aside style={{ border: "1px solid #333", padding: 16, borderRadius: 8, margin: "24px 0" }}>
      <strong>Anzeige / Empfehlungen</strong>
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            <a href={it.url} target="_blank" rel="nofollow sponsored noopener noreferrer">{it.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
