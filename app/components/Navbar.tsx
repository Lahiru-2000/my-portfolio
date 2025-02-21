"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js navigation
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the mobile menu after navigating
  };
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section or navigate if on another page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      // If section exists on the current page, scroll smoothly
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the page with the section
      router.push(`/#${id}`);
    }

    setIsOpen(false); // Close mobile menu on selection
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all z-50 ${
        scrolling ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto max-xl:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-3xl font-bold text-gray-800 dark:text-white tracking-wider cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Lahiru<span className="text-blue-500">Dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg text-white">
            <NavLinks scrollToSection={scrollToSection} />
          </div>

          {/* Desktop "Hire Me" Button */}
          <div className="hidden md:flex items-center">
            <button
              className="bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              onClick={() => navigateToPage("/hireme")}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-800 transition-all">
          <div className="flex flex-col space-y-4 p-6">
            <NavLinks scrollToSection={scrollToSection} />
            {/* Mobile "Hire Me" Button */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg w-full"
              onClick={() => navigateToPage("/hireme")}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Navigation Links Component with Scrolling Functionality
const NavLinks = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {links.map(({ name, id }) => (
        <button
          key={id}
          className="relative font-medium text-white dark:text-gray-300 transition hover:text-blue-500"
          onClick={() => scrollToSection(id)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default Navbar;
