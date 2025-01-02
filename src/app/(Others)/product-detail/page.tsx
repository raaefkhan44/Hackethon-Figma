"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";

export default function ProductDetail () {
  const [selectedImage, setSelectedImage] = useState("/sd-main.png");

  return (
    <div className="container mx-auto p-6">
     
      <div className="flex flex-wrap lg:flex-nowrap">
     
        <div className="lg:w-1/3 flex ml-24 gap-4 items-end space-y-4">
          <div className="flex flex-col gap-4 ">
            {["/sd-1.png", "/sd-2.png", "/sd-3.png", "/sd-4.png"].map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`border ${
                  selectedImage === image ? "border-[#FF9F0D]" : "border-gray-300"
                } rounded-lg`}
              >
                <Image src={image} alt="Thumbnail" className="w-24 h-20 rounded-lg" />
              </button>
            ))}
          </div>
          <div className="w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div className="lg:w-2/3 lg:pl-10 mt-6 lg:mt-0">
          <h1 className="text-3xl font-semibold">Yummy Chicken Chup</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquam ligula id velit consectetur condimentum.
          </p>
          <p className="text-2xl text-[#FF9F0D] font-semibold mt-4">$4.00</p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="flex items-center text-yellow-400 space-x-1">
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-gray-600">(32 Reviews)</span>
          </div>

          <div className="mt-6">
            <label htmlFor="quantity" className="block text-gray-600">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              defaultValue="1"
              className="border border-gray-300 px-4 py-2 rounded-lg w-24 mt-2"
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="border-b flex space-x-8">
          <button className="pb-2 text-[#FF9F0D] border-b-2 border-[#FF9F0D]">
            Description
          </button>
          <button className="pb-2 text-gray-600">Reviews (32)</button>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
            nulla ac turpis euismod efficitur.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✔️ Delicious and fresh</li>
            <li>✔️ Healthy and organic</li>
            <li>✔️ High-quality ingredients</li>
          </ul>
        </div>
      </div>

     
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Fresh Salad", price: "$3.50", image: "/shop-3.png" },
            { name: "Cheese Omelette", price: "$4.00", image: "/about-3.png" },
            { name: "Burger", price: "$5.00", image: "/menu-2.png" },
            { name: "Fried Lemon", price: "$2.50", image: "/shop-5.png" },
          ].map((product, index) => (
            <Link href={`/product-detail`} className="relative group" key={index} >
                <div className="border border-gray-200 rounded cursor-pointer overflow-hidden">
                    <div className="relative">
                        <Image
                            src={product.image}
                            alt={product.name}
                            height={267}
                            width={312}
                            className="w-full h-[267px] object-cover"
                        />
                        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                        <p className="text-[#FF9F0D] mt-2">{product.price}</p>
                        
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                                <FaShoppingCart className="text-black " />
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                                <FaHeart className="text-black" />
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                                <FaShareAlt className="text-black" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
{[
    { name: "Fresh Salad", price: "$3.50", image: "/shop-3.png" },
    { name: "Cheese Omelette", price: "$4.00", image: "/about-3.png" },
    { name: "Burger", price: "$5.00", image: "/menu-2.png" },
    { name: "Fried Lemon", price: "$2.50", image: "/shop-5.png" },
  ].map((product, index) => (
    <div
      key={index}
      className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
    >
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-[#FF9F0D] mt-2">{product.price}</p>
    </div>
  ))}