import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import DefaultPost from "@/app/_components/template/default/default-post";
import PlainPost from "@/app/_components/template/plain/plain-post";
import type { Lang } from "@/interfaces/language";
import type { Post } from "@/interfaces/post";

type PostComponentProps = {
  lang: Lang;
  post?: Post;
};

export default async function PostComponent(
  { post, lang }: PostComponentProps,
) {
  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  if (post.template === "plain") {
    return <PlainPost lang={lang} post={post} content={content} />;
  }

  return <DefaultPost lang={lang} post={post} content={content} />;
}
