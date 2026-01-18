import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import HtmlHead from "@/app/_components/html-head";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: CMS_NAME,
  description:
    `一个AI优先的团队，致力于将抽象概念转化为可测试、可交付的产品 | An AI-first team that dedicated to transforms abstract ideas into testable and shippable products.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout() {
  return (
    <html
      lang=""
      className="h-full bg-linear-to-br from-gray-50 to-gray-100"
    >
      <HtmlHead />
      <body className="h-full flex flex-col items-center justify-center gap-12 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20">
          </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20">
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20">
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-12 max-w-4xl">
          <div className="flex flex-col items-center gap-8">
            <img
              src="/assets/shared/logo/without-text-339x339-transparent.png"
              alt="willow studio logo"
              className="w-50 object-cover"
            />

            <h1 className="text-4xl">Willow Studio</h1>
            <h1 className="text-3xl text-emerald-600">蔚柳工作室</h1>

            <div className="text-center">
              <p className="text-gray-600 text-lg">
                请选择您的语言 / Please select your language
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="/zh"
              className="group relative px-10 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-64"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-2xl">🇨🇳</span>
                <span className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                  简体中文
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  >
                  </path>
                </svg>
              </div>
            </a>

            <div className="text-gray-400 text-sm font-medium">或 / OR</div>

            <a
              href="/en"
              className="group relative px-10 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-64"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                  English
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  >
                  </path>
                </svg>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Willow Studio. 保留所有权利 / All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  );
}
