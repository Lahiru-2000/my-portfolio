"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all z-50  ${scrolling ? "bg-white/80 dark:bg-gray-900/80  backdrop-blur-lg shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto max-xl:px-6">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800 dark:text-white tracking-wider">
            <Link href="/">
              Lahiru<span className="text-blue-500">Dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg  text-white">
            <NavLinks pathname={pathname} />
          </div>

          {/* Desktop "Hire Me" Button */}
          <div className="hidden md:flex items-center">
            <Link href="/hireme">
              <button className="bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg">
                Hire Me
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Mobile Menu Toggle Button */}
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
            <NavLinks pathname={pathname} onClick={() => setIsOpen(false)} />
            {/* Mobile "Hire Me" Button */}
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg w-full">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Navigation Links Component with Active Link Highlight
const NavLinks = ({ pathname, onClick }: { pathname: string; onClick?: () => void }) => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <>
      {links.map((item) => {
        const linkPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        const isActive = pathname === linkPath;
        return (
          <Link
            key={item}
            href={linkPath}
            className={`relative font-medium transition ${isActive ? "text-blue-500" : "text-white dark:text-gray-300 hover:text-blue-500"}`}
            onClick={onClick}
          >
            {item}
            {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full" />}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
