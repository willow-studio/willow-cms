"use client";

import type { Lang } from "@/interfaces/language";

const languages = [
  {
    lang: "en",
    path: "/en",
    text: "English",
  },
  {
    lang: "zh",
    path: "/zh",
    text: "简体中文",
  },
];

export default function SwitchLang({ lang }: { lang: Lang }) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href);
    url.pathname = url.pathname.replace(lang, e.target.value);
    window.location.href = url.href;
  };
  return (
    <div className="mt-4 md:mt-0 text-gray-500 text-sm cursor-pointer">
      <span role="img" aria-label="language">🌐</span>
      <select onChange={handleChange} defaultValue={lang}>
        {languages.map((e) => (
          <option value={e.lang} key={e.lang}>
            {e.text}
          </option>
        ))}
      </select>
    </div>
  );
}
