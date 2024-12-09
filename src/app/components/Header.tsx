"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-yellow-500">
          Food<span className="text-white">luck</span>
        </h1>

        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>
          <a href="/menu" className="hover:text-yellow-500">
            Menu
          </a>
          <a href="/blog" className="hover:text-yellow-500">
            Blog
          </a>
          <a href="/pages" className="hover:text-yellow-500">
            Pages
          </a>
          <div className="relative group">
            <button className="hover:text-yellow-500 flex items-center">
              About <span className="ml-1">&#x25BC;</span>
            </button>
            <div className="absolute left-0 hidden mt-2 w-32 bg-black rounded-md shadow-md group-hover:block">
              <a
                href="/services"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
              >
                Services
              </a>
              <a
                href="/signup"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
              >
                Signup
              </a>
            </div>
          </div>
          <a href="/shop" className="hover:text-yellow-500">
            Shop
          </a>
          <a href="/contact" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-yellow-500 text-white rounded-full px-4 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FiSearch className="absolute right-3 top-2 text-yellow-500 cursor-pointer" />
          </div>
          <FiShoppingCart className="text-xl hover:text-yellow-500 cursor-pointer" />
        </div>

        <button
          className="md:hidden text-yellow-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white">
          <a href="/" className="block px-4 py-2 hover:bg-yellow-500">
            Home
          </a>
          <a href="/menu" className="block px-4 py-2 hover:bg-yellow-500">
            Menu
          </a>
          <a href="/blog" className="block px-4 py-2 hover:bg-yellow-500">
            Blog
          </a>
          <div className="relative">
            <button className="w-full text-left px-4 py-2 hover:bg-yellow-500">
              About Us
            </button>
            <div className="pl-4">
              <a
                href="/services"
                className="block px-4 py-2 hover:bg-yellow-500"
              >
                Services
              </a>
              <a
                href="/signup"
                className="block px-4 py-2 hover:bg-yellow-500"
              >
                Signup
              </a>
            </div>
          </div>
          <a href="/shop" className="block px-4 py-2 hover:bg-yellow-500">
            Shop
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-yellow-500">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
