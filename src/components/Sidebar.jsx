import React, { useState } from "react"; // added useState
import {
  FaHome,
  FaClipboardList,
  FaCalendar,
  FaCog,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // mobile toggle state

  const topNav = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaClipboardList />, path: "/page1" },
    { icon: <FaCalendar />, path: "/page2" },
  ];

  const middleNav = [
    { icon: <FaBell />, path: "/notifications", hasDot: true },
    { icon: <FaCog />, path: "/settings" },
  ];

  const bottomNav = [{ icon: <FaSignOutAlt />, path: "/login" }];

  const isActive = (path) => location.pathname === path;

  const renderIcon = (item, i) => (
    <Link
      key={i}
      to={item.path}
      className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-[#ecdcbf] dark:bg-gray-800 transition-all duration-300"
    >
      <div
        className={`flip-icon ${
          isActive(item.path) ? "text-[#a31d1d]" : "text-gray-800 dark:text-white"
        }`}
      >
        {item.icon}
      </div>
      {item.hasDot && (
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
      )}
    </Link>
  );

  return (
    <>
      {/* Inline custom CSS for flip animation */}
      <style>{`
        .flip-icon {
          transition: transform 0.5s ease;
        }
        .group:hover .flip-icon {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Burger Menu (mobile only) */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-black dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen w-20 bg-[#f5f3ef] dark:bg-gray-900 flex flex-col items-center py-6 justify-between
          ${isOpen ? "block" : "hidden"} md:flex`}
      >
        <div className="space-y-4">{topNav.map(renderIcon)}</div>
        <div className="space-y-4">{middleNav.map(renderIcon)}</div>
        <div className="space-y-4">{bottomNav.map(renderIcon)}</div>
      </div>
    </>
  );
};

export default Sidebar;
