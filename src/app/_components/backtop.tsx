"use client";

import { useEffect, useState } from "react";

function ScrollToTopWithProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight -
      window.innerHeight;
    const scrollPercent = docHeight > 0
      ? Math.min((scrollTop / docHeight) * 100, 100)
      : 0;

    setScrollProgress(scrollPercent);

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    calculateScrollProgress();

    window.addEventListener("scroll", calculateScrollProgress);
    window.addEventListener("resize", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
      window.removeEventListener("resize", calculateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="回到顶部"
      className={`
        fixed right-6 bottom-6
        md:w-14
        md:h-14
        sm:w-10
        sm:h-10
        flex items-center justify-center
        rounded-full
        bg-linear-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
        text-white
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-in-out
        z-50
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
        cursor-pointer
        transform hover:scale-110 active:scale-95
        group
      `}
    >
      <div className="absolute inset-0 -m-2">
        <svg
          className="md:w-18 md:h-18 sm:w-14 sm:h-14 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (scrollProgress / 100) * 251.2}
            className="text-white opacity-80"
          />
        </svg>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>

      <div className="
        absolute -top-12 right-0
        bg-gray-800 text-white text-xs
        px-3 py-2 rounded-md
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        whitespace-nowrap
        pointer-events-none
        shadow-md
      ">
        回到顶部
        <div className="
          absolute -bottom-1 right-5
          w-2 h-2 bg-gray-800
          transform rotate-45
        ">
        </div>
      </div>
    </button>
  );
}

export default ScrollToTopWithProgress;
