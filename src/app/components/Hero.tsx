import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
export default function HeroSection() {
  return (
    <div> 
    <section className="bg-cover bg-center  bg-multiple text-white">
      <Header />
      <div className="container mx-auto mt-14 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16 py-10 lg:py-20">
     
        <div className="hidden lg:flex items-start mt-6 lg:mt-0">
          <Image 
          src="/social.png"
          alt="Social Bar" 
          layout="responsive" 
          width={20} 
          height={9} 
        />
  
        </div>

        
        <div className="flex-1 text-center ml-14 lg:text-left">
          <p className="text-yellow-500 font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
            <i>It&#39;s Quick & Amusing!</i>
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
            <span className="text-yellow-500">The</span> Art of Speed <br />
            Food Quality
          </h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <button className="bg-yellow-500 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-yellow-600 transition">
            See Menu
          </button>
        </div>

     
        <div className="flex-1 mt-10 lg:mt-0 flex justify-center items-center">
         
            <Image 
          src="/Image.png"
          alt="Delicious Food" 
          layout="responsive" 
          width={16} 
          height={9} 
        />
        </div>
      </div>
    </section>


{/* //  pg 2 strt */}

<div className=" h-[950px] mx-auto flex justify-center bg-black items-center">
  <div className="flex w-11/12">
    
  <div className="flex-1 text-center ml-14 lg:text-left">
          <p className="text-yellow-500 font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
            <i>About Us </i>
          </p>
          <h1 className="text-[48px] md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
            <span className="text-yellow-500">We</span> Create the best
          food product

          </h1>
          <p className="text-gray-400 text-[16px] text-sm md:text-base lg:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>  
           {/* List Items */}
        <ul className="space-y-4 mb-6">
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </li>
        </ul>

        {/* Read More Button */}
        <Link
          href="/about"
          className="inline-block bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-black transition duration-300"
        >
          Read more
        </Link>
      </div>

      <div 
      className="lg:w-1/2 grid grid-cols-2 gap-4">
       
        <div className="col-span-2">
          <Image
            src='/about-3.png'
            alt="Delicious Food 1"
            width={600}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
        {/* Bottom Two Images */}
        <Image
          src='/about-2.png'
          alt="Delicious Food 2"
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
        <Image
          src='/about-1.png'
          alt="Delicious Food 3"
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
  </div>
</div>
</div>
</div>
  );
}
