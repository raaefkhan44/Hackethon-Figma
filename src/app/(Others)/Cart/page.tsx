"use client"
import MainBreadcum from "@/app/components/MainBreadCrum";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";

// Define the type for a cart item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const CartPage = () => {
  // Add types to the state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Burger",
      price: 15.99,
      quantity: 1,
      image: "/recent-p.png",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 10.99,
      quantity: 1,
      image: "/shop-5.png",
    },
    {
      id: 3,
      name: "Pizza",
      price: 25.98,
      quantity: 1,
      image: "/pizza.png",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 8.99,
      quantity: 1,
      image: "/bf3.png",
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 12.49,
      quantity: 1,
      image: "/shop-2.png",
    },
  ]);

  // Add types to function parameters
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
    <MainBreadcum name='Shopping Cart' pageName=' Shopping Cart' />
    <div className="container mx-auto py-10">
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 flex items-center space-x-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-3">${item.price.toFixed(2)}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 border border-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border border-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coupon Code */}
        <div className="p-6 border border-gray-200 rounded">
          <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter your code"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Apply
          </button>
        </div>

        {/* Total Bill */}
        <div className="p-6 border border-gray-200 rounded">
          <h3 className="text-lg font-semibold mb-4">Total Bill</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>${(parseFloat(calculateTotal()) + 5).toFixed(2)}</span>
            </div>
          </div>
          <Link href='/Checkout'>
          <button className="bg-orange-500 text-white w-full py-3 rounded mt-4 hover:bg-orange-600">
            Proceed to Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
