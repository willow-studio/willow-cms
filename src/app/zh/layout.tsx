import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Inter } from "next/font/google";
import HtmlHead from "@/app/_components/html-head";
import ScrollToTopWithProgress from "@/app/_components/backtop";
import type { Metadata } from "next";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: CMS_NAME,
  description: `一个AI优先的团队，致力于将抽象概念转化为可测试、可交付的产品`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HtmlHead />
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <ScrollToTopWithProgress />
      </body>
    </html>
  );
}
