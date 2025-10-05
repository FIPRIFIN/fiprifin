import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/* ============================================================================
   1. Typdefinitionen
   ============================================================================ */

export interface AffiliateLink {
  label: string;
  url: string;
}

export interface PostMeta {
  title: string;
  slug: string;
  excerpt?: string;
  date: string;
  author?: string;
  image?: string;
  category: string;
  affiliate?: AffiliateLink[];
}

export interface Post extends PostMeta {
  html: string;
}

/* ============================================================================
   2. Pfade
   ============================================================================ */

const ROOT = process.cwd();
const INSIGHTS_DIR = path.join(ROOT, "content", "insights");

function catDir(category: string): string {
  return path.join(INSIGHTS_DIR, category);
}

/* ============================================================================
   3. Kategorien laden
   ============================================================================ */

export function getCategories(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];

  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => fs.statSync(path.join(INSIGHTS_DIR, f)).isDirectory());
}

/* ============================================================================
   4. Alle Posts einer Kategorie laden
   ============================================================================ */

export function getPostsByCategory(category: string): PostMeta[] {
  const dir = catDir(category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts: PostMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    const slug = file.replace(/\.md$/, "");

    // ✅ Sichere Typkonvertierung
    const meta: PostMeta = {
      title: String(data.title),
      slug,
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
      date: String(data.date),
      author: data.author ? String(data.author) : undefined,
      image: data.image ? String(data.image) : undefined,
      category,
      affiliate: Array.isArray(data.affiliate)
        ? (data.affiliate as AffiliateLink[])
        : undefined,
    };

    return meta;
  });

  // ✅ Neueste zuerst sortieren
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/* ============================================================================
   5. Einzelnen Post laden
   ============================================================================ */

export async function getPost(category: string, slug: string): Promise<Post> {
  const filepath = path.join(catDir(category), `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlStr = processed.toString();

  const post: Post = {
    title: String(data.title),
    slug,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    date: String(data.date),
    author: data.author ? String(data.author) : undefined,
    image: data.image ? String(data.image) : undefined,
    category,
    affiliate: Array.isArray(data.affiliate)
      ? (data.affiliate as AffiliateLink[])
      : undefined,
    html: htmlStr,
  };

  return post;
}

/* ============================================================================
   6. Für generateStaticParams (Next.js)
   ============================================================================ */

export function getAllParams(): { category: string; slug: string }[] {
  return getCategories().flatMap((category) =>
    getPostsByCategory(category).map((p) => ({
      category,
      slug: p.slug,
    }))
  );
}
