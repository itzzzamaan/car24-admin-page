import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col gap-4 px-4 py-4 bg-transparent md:flex-row md:justify-between md:items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl">
          Good morning!
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 md:justify-end md:w-auto w-full">
        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full px-1 py-1">
          <button
            onClick={() => setDarkMode(false)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              !darkMode ? "bg-gray-200 dark:bg-white" : ""
            }`}
          >
            <FaMoon className="text-gray-700 dark:text-gray-100" />
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              darkMode ? "bg-gray-200 dark:bg-white" : ""
            }`}
          >
            <FaSun className="text-yellow-400" />
          </button>
        </div>

        <button className="bg-black hidden md:flex text-white px-4 py-2 rounded-full hover:bg-gray-800 transition whitespace-nowrap">
          + Add task
        </button>

        <div className="relative w-auto">
          <input
            type="text"
            placeholder="Search..."
            className={`transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 pl-10 ${
              searchOpen ? "w-40 opacity-100" : "w-0 opacity-0"
            } bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none`}
          />
          <FaSearch
            onClick={() => setSearchOpen(!searchOpen)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 cursor-pointer"
          />
        </div>

        <FaUserCircle className="text-3xl text-gray-700 dark:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
