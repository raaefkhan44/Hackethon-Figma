"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <br />
      <header className="bg-transparent text-white">
        {/* Logo Section */}
        <div className="flex justify-center mx-auto">
          <Link href="/">
          <h1 className="text-2xl font-bold text-[#FF9F0D]">
            Food<span className="text-white">luck</span>
          </h1>
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7 text-sm">
            <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
            <Link href="/Menu" className="hover:text-[#FF9F0D]">Menu</Link>
            <Link href="/blog" className="hover:text-[#FF9F0D]">Blog</Link>
            <Link href="/pages" className="hover:text-[#FF9F0D]">Pages</Link>
            <div className="relative group">
              <button className="hover:text-[#FF9F0D] flex items-center">
                About <span className="ml-1">&#x25BC;</span>
              </button>
              <div className="absolute left-0 hidden mt-2 w-32 bg-black rounded-md shadow-md group-hover:block">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-[#FF9F0D] hover:text-black"
                >
                  Services
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 hover:bg-[#FF9F0D] hover:text-black"
                >
                  Signup
                </Link>
              </div>
            </div>
            <Link href="/Shop" className="hover:text-[#FF9F0D]">Shop</Link>
            <Link href="/contact" className="hover:text-[#FF9F0D]">Contact</Link>
          </nav>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center mr-3 space-x-4">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border border-[#FF9F0D] text-white rounded-full px-4 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <FiSearch className="absolute right-3 top-2 text-[#FF9F0D] cursor-pointer" />
            </div>
            <FiShoppingCart className="text-xl hover:text-[#FF9F0D] cursor-pointer" />
             {/* User Icon */}
          <Link href='/SignUp'>
          <button className="text-white-500 text-xl hover:text-[#FF9F0D]">
            <FaUserAlt size={20} />
          </button>
          </Link>
          
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FF9F0D] ml-80 -mt-16"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
            <Link href="/" className="block hover:text-[#FF9F0D]">Home</Link>
            <Link href="/Menu" className="block hover:text-[#FF9F0D]">Menu</Link>
            <Link href="/blog" className="block hover:text-[#FF9F0D]">Blog</Link>
            <Link href="/pages" className="block hover:text-[#FF9F0D]">Pages</Link>
            <Link href="/Shop" className="block hover:text-[#FF9F0D]">Shop</Link>
            <Link href="/contact" className="block hover:text-[#FF9F0D]">Contact</Link>

            {/* Mobile Search Bar */}
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-[#FF9F0D] z-10" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-[#FF9F0D]"
              />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-around mt-4 space-x-4">
              <Link href="/Cart">
                <button className="text-white">
                  <FaShoppingCart size={20} />
                </button>
              </Link>
              <Link href="/SignUp">
                <button className="text-white">
                  <FaUserAlt size={20} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
