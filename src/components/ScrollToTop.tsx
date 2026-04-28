"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        rounded-full
        bg-[#1f3a3d]
        text-white
        p-3
        shadow-lg
        hover:bg-[#274f52]
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-[#1f3a3d]
      "
    >
      <ChevronUp size={20} />
    </button>
  );
}