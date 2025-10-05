import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  title: string;
  slug: string;
  excerpt?: string;
  date: string;        // ISO
  author?: string;
  image?: string;
  tags?: string[];
  category: string;
  affiliate?: { label: string; url: string }[];
};

export type Post = PostMeta & { html: string };

const ROOT = process.cwd();
const INSIGHTS_DIR = path.join(ROOT, "content", "insights");

function catDir(category: string) {
  return path.join(INSIGHTS_DIR, category);
}

export function getCategories(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => fs.statSync(path.join(INSIGHTS_DIR, f)).isDirectory());
}

export function getPostsByCategory(category: string): PostMeta[] {
  const dir = catDir(category);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, "");
    return { ...(data as any), slug, category } as PostMeta;
  });
  // Neueste zuerst
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(category: string, slug: string): Promise<Post> {
  const filepath = path.join(catDir(category), `${slug}.md`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlStr = processed.toString();

  return {
    ...(data as any),
    slug,
    category,
    html: htmlStr,
  } as Post;
}

export function getAllParams() {
  // Für generateStaticParams (alle [category]/[slug])
  return getCategories().flatMap((category) =>
    getPostsByCategory(category).map((p) => ({ category, slug: p.slug }))
  );
}
