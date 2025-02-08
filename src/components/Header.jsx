import React, { useState } from "react";
import { X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import BreadCrumbImage from "../assets/breadcrumb.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blogs" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      <header className="container mx-auto mt-4 px-2">
        <div className="flex items-center justify-between bg-[#1B152B] py-3 px-5 rounded-[47px]">
          <a href="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="logo" className="w-10 h-10" />
            <span className="text-white lg:text-xl text-lg font-bold ml-2">
              FutureSphere
            </span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-base ml-4 transition duration-300 ease-in-out ${
                        isActive
                          ? "text-[#7F56D9]"
                          : "text-white hover:text-[#7F56D9]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button className="hidden md:block text-white bg-[#7f56d9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base ml-2 cursor-pointer">
            Contact Us
          </button>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <img src={BreadCrumbImage} alt="" />
          </button>
        </div>

        {/* Mobile Off-canvas Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#1B152B] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <a href="/" className="flex items-center">
              <img src="/assets/logo.svg" alt="logo" className="w-10 h-10" />
              <span className="text-white lg:text-xl text-lg font-bold ml-2">
                FutureSphere
              </span>
            </a>
            <button className="text-white" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>

          <nav className="mt-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-gray-700">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block text-base px-4 py-3 transition duration-300 ease-in-out ${
                        isActive
                          ? "text-[#7F56D9]"
                          : "text-white hover:text-[#7F56D9]"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 mt-4">
            <button className="w-full text-white bg-[#7F56D9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;