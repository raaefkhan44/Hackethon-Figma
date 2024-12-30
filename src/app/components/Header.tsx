"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <br />
    <header className="bg-transparent  text-white">
        <div className="flex justify-center mx-auto ">
        <h1 className="text-2xl font-bold text-[#FF9F0D]"> 
          Food<span className="text-white">luck</span>
        </h1></div>
        
      <div className="container mx-auto flex items-center  justify-around px-4 py-4">
        <nav className="hidden md:flex space-x-7 text-sm">
          <Link href="/" className="hover:text-[#FF9F0D]"> Home</Link>
          <Link href="/menu" className="hover:text-[#FF9F0D]">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-[#FF9F0D]">
            Blog
          </Link>
          <Link href="/pages" className="hover:text-[#FF9F0D]">
            Pages
          </Link>
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
          <Link href="/shop" className="hover:text-[#FF9F0D]">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-[#FF9F0D]">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-[#FF9F0D] text-white rounded-full px-4 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FiSearch className="absolute right-3 top-2 text-[#FF9F0D] cursor-pointer" />
          </div>
          <FiShoppingCart className="text-xl hover:text-[#FF9F0D] cursor-pointer" />
        </div>

        <button
          className="md:hidden text-[#FF9F0D] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white">
          <Link href="/" className="block px-4 py-2 hover:bg-[#FF9F0D]">
            Home
          </Link>
          <Link href="/menu" className="block px-4 py-2 hover:bg-[#FF9F0D]">
            Menu
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-[#FF9F0D]">
            Blog
          </Link>
          <div className="relative">
            <button className="w-full text-left px-4 py-2 hover:bg-[#FF9F0D]">
              About Us
            </button>
            <div className="pl-4">
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-[#FF9F0D]"
              >
                Services
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-[#FF9F0D]"
              >
                Signup
              </Link>
            </div>
          </div>
          <Link href="/shop" className="block px-4 py-2 hover:bg-[#FF9F0D]">
            Shop
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-[#FF9F0D]">
            Contact
          </Link>
        </nav>
      )}
    </header>
    </div>
  );
}
