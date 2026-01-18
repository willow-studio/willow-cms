import type { Lang } from "@/interfaces/language";
import SwitchLang from "./switch-lang";

type Props = {
  lang: Lang;
};

const footerLinks = {
  product: [
    { name: "功能", href: "#" },
    { name: "价格", href: "#" },
    { name: "API", href: "#" },
    { name: "文档", href: "#" },
  ],
  company: [
    { name: "关于我们", href: "#" },
    { name: "博客", href: "#" },
    { name: "招聘", href: "#" },
    { name: "联系我们", href: "#" },
  ],
  legal: [
    { name: "隐私政策", href: "#" },
    { name: "服务条款", href: "#" },
    { name: "使用条款", href: "#" },
    { name: "Cookie政策", href: "#" },
  ],
};

const socialLinks = [
  { name: "Email", icon: "📮", href: "mailto:studio@willow.wang" },
];

export default function Footer({ lang }: Props) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/shared/logo/800x450-round.png"
                width={200}
                alt="logo"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Life was a willow and it bent right to your wind
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">产品</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">公司</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">订阅新闻</h3>
            <p className="text-gray-400 mb-4 text-sm">
              获取最新产品更新和行业资讯
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="请输入邮箱"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Logo. 保留所有权利.
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <SwitchLang lang={lang} />
        </div>
      </div>
    </footer>
  );
}
