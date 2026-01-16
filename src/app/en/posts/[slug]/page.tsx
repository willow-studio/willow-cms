import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import PostComponent from "@/app/_components/post-page";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return <PostComponent lang="en" post={post}></PostComponent>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
