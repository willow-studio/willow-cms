import { type Author } from "./author";
import { type Lang } from "./language";

export type Post = {
  tags?: string[];
  template?: string;
  language: Lang;
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author?: Author;
  excerpt?: string;
  ogImage?: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
