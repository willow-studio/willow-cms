import fs from "fs";
import matter from "gray-matter";
import { OUTSIDE_POSTS_TAG } from "./constants";
import { join } from "path";
import type { Post } from "@/interfaces/post";
import type { Lang } from "@/interfaces/language";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostsByLang(lang: Lang) {
  return fs.readdirSync(join(postsDirectory, lang));
}

export function getPostDirents() {
  return fs.readdirSync(postsDirectory, { withFileTypes: true }).map((e) => {
    if (e.isFile()) {
      return e;
    }
    return e.isDirectory()
      ? fs.readdirSync(join(postsDirectory, e.name), { withFileTypes: true })
      : [];
  }).flat();
}

export function getPostByDirent(dirent: fs.Dirent<string>) {
  const realSlug = dirent.name.replace(/\.md$/, "");
  const fullPath = join(dirent.parentPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getPostByLangAndSlug(lang: Lang, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, lang, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

function descPost(
  post1: Post,
  post2: Post,
) {
  return post1.date > post2.date ? -1 : 1;
}

function filterOutsidePost(post: Post) {
  if (!post?.tags) return true;
  return !post.tags.includes(OUTSIDE_POSTS_TAG);
}

export function getAllPosts(lang?: Lang): Post[] {
  if (lang) {
    const slugs = getPostsByLang(lang);
    const posts = slugs
      .map((slug) => getPostByLangAndSlug(lang, slug)).filter(filterOutsidePost)
      .toSorted(descPost);
    return posts;
  }
  const posts = getPostDirents()
    .map((dirent) => getPostByDirent(dirent))
    .toSorted(descPost);
  return posts;
}
