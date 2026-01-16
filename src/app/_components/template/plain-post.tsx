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
    <main>
      <Container>
        <header className="mt-20 mb-20 text-6xl text-center">
          <h1>{post.title}</h1>
        </header>
        <article className="mb-32">
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
