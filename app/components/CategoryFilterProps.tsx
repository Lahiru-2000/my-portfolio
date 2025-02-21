"use client";
import React, { useState, useEffect } from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories: string[] = [
  "All",
  "Web",
  "Mobile",
  "Desktop Apps"
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="mb-8">
      {/* Desktop View */}
      <div className="hidden sm:flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-[12px] font-semibold  border solid border-[#B1B0B099] border-solid ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600 hover:to-purple-600"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden relative dropdown-container">
        <button
          className="px-4 py-2 rounded-[4px] bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600 hover:to-purple-600 text-gray-300 font-semibold w-full "
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedCategory} ▼
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 rounded-[4px] mt-2 shadow-md z-50">
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full text-left px-4 py-2 font-semibold bg-black ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600 hover:to-purple-600"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;