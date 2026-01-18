import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Footer from "@/app/_components/footer";
import type { Lang } from "@/interfaces/language";
import type { Post } from "@/interfaces/post";

interface Props {
  post: Post;
  lang: Lang;
  content: string;
}

export default function DefaultPost({ lang, post, content }: Props) {
  return (
    <>
      <main>
        <Alert preview={post.preview} />
        <Container>
          <Header />
          <article className="mb-32">
            <PostHeader
              lang={lang}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
        </Container>
      </main>
      <Footer lang={lang} />
    </>
  );
}
