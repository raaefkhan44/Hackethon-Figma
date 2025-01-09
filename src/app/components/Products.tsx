import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";

const Products = () => {
  const products = [
    { name: "Chicken chup", price: 12.0, image: "/shop-3.png" },
    { name: "Sandwiches", price: 25.0, image: "/shop-2.png" },
    { name: "cheese Butter", price: 10.0, image: "/why-3.png" },
    { name: "Pizza", price: 43.0, image: "/shop-4.png" },
    { name: "Drink", price: 23.0, image: "/shop-5.png" },
    { name: "Chicken Chup", price: 17.0, image: "/pizza.png" },
    { name: "Sandwiches", price: 25.0, image: "/shop-1.png" },
    { name: "Cheese Butter", price: 10.0, image: "/shop-7.png" },
    { name: "Pizza", price: 43.0, image: "/shop-6.png" },
    { name: "Drink", price: 23.0, originalPrice: 46.0, image: "/shop-4.png" },
    { name: "Country Burger", price: 45.0, image: "/shop-5.png" },
    { name: "Burger", price: 21.0, originalPrice: 45.0, image: "/burger.png" },
    { name: "Chocolate Muffin", price: 27.0, originalPrice: 45.0, image: "/shop-1.png" },
    { name: "Fresh Lime", price: 28.0, originalPrice: 45.0, image: "/shop-7.png" },
    { name: "Country Burger", price: 45.0, image: "/shop-6.png" },
  ];

  return (
    <div className="p-4 w-[75%] max-lg:w-full">
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.map((product, index) => (
          <Link href={`/product-detail`} className="relative group" key={index}>
            <div className="border border-gray-200 rounded cursor-pointer overflow-hidden">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={267}
                  width={312}
                  className="w-full h-[267px] object-cover"
                />
                {product.originalPrice && (
                  <span className="absolute top-2 right-2 bg-primary_color text-white text-xs px-2 py-1 rounded">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                   <Link href='/Cart' >                 
                                     
                    <FaShoppingCart className="text-black " />
                   
                    </Link>

                  </div>
                  <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                    <FaHeart className="text-black" />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                    <FaShareAlt className="text-black" />
                  </div>
                </div>
              </div>
              
              <div className="mt-2 p-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 text-sm mt-1">
                  <span className="n text-[#FF9F0D] font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xs">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-[#FF9F0D] rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
