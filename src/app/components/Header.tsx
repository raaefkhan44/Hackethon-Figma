"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-yellow-500">
          Food<span className="text-white">luck</span>
        </h1>

        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="hover:text-yellow-500"> Home</Link>
           
          
          <Link href="/menu" className="hover:text-yellow-500">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
          <Link href="/pages" className="hover:text-yellow-500">
            Pages
          </Link>
          <div className="relative group">
            <button className="hover:text-yellow-500 flex items-center">
              About <span className="ml-1">&#x25BC;</span>
            </button>
            <div className="absolute left-0 hidden mt-2 w-32 bg-black rounded-md shadow-md group-hover:block">
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
              >
                Services
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
              >
                Signup
              </Link>
            </div>
          </div>
          <Link href="/shop" className="hover:text-yellow-500">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
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
          <Link href="/" className="block px-4 py-2 hover:bg-yellow-500">
            Home
          </Link>
          <Link href="/menu" className="block px-4 py-2 hover:bg-yellow-500">
            Menu
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-yellow-500">
            Blog
          </Link>
          <div className="relative">
            <button className="w-full text-left px-4 py-2 hover:bg-yellow-500">
              About Us
            </button>
            <div className="pl-4">
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-yellow-500"
              >
                Services
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-yellow-500"
              >
                Signup
              </Link>
            </div>
          </div>
          <Link href="/shop" className="block px-4 py-2 hover:bg-yellow-500">
            Shop
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-yellow-500">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
