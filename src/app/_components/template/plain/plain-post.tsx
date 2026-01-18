import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import type { Lang } from "@/interfaces/language";
import type { Post } from "@/interfaces/post";

interface Props {
  post: Post;
  lang: Lang;
  content: string;
}

export default function PlainPost({ post, content }: Props) {
  return (
    <main className="min-h-screen pt-15 bg-gray-200  dark:bg-gray-600 flex flex-col">
      <header className="w-full h-15 px-4 flex items-center gap-4 dark:text-white bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-10 overflow-hidden">
        <div className="flex items-center gap-2">
          <img
            src="/assets/shared/logo/without-text-339x339-transparent.png"
            alt="logo"
            width={54}
          />
          <h1 className="text-2xl">Willow Studio</h1>
        </div>
      </header>

      <Container className="max-w-3xl box-border dark:text-neutral-200 bg-white dark:bg-gray-900 p-4 mx-auto md:my-10">
        <div className="mt-10 mb-10 transition-all duration-300 md:sticky top-3 z-11">
          <h3 className="text-3xl text-center">{post.title}</h3>
        </div>
        <div style={{ width: "100%", height: 1, background: "#d6d6d6" }}>
        </div>
        <article>
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
