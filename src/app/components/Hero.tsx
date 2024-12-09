import Header from "./Header";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-cover bg-center bg-multiple text-white">
      <Header />
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16 py-10 lg:py-20">
     
        <div className="hidden lg:flex items-start mt-6 lg:mt-0">
          <Image
            src="/social.png"
            alt="Social Bar"
            className="w-[25px] h-[250px] md:h-[400px] lg:h-[592px]"
          />
        </div>

        
        <div className="flex-1 text-center lg:text-left">
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
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
