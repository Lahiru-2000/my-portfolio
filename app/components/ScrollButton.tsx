"use client"; // <-- Add this at the top

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 bg-[#191919] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
    isVisible ? "opacity-50 hover:opacity-100" : "opacity-0"
  }`}
>
  <ArrowUp size={24} className="text-orange-600"/>
</button>

  );
};

export default ScrollToTop;