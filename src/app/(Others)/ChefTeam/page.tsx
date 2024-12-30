import MainBreadcum from "../../components/MainBreadCrum";
import Image from "next/image";

// Define type for chef data
interface Chef {
  name: string;
  role: string;
  image: string;
}

const chefs: Chef[] = [
  { name: "Tahmina Rumi", role: "Chef", image: "/cf1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/cf2.png" },
  { name: "M.Mohammad", role: "Chef", image: "/cf3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/cf4.png" },
  { name: "Biten Devgon", role: "Chef", image: "/cf5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/cf6.png" },
  { name: "Motin Molladsf", role: "Chef", image: "/cf7.png" },
  { name: "William Rumi", role: "Chef", image: "/cf8.png" },
  { name: "Kets william roy", role: "Chef", image: "/cf9.png" },
  { name: "Mahmud kholil", role: "Chef", image: "/cf10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/cf11.png" },
  { name: "Monalisa holly", role: "Chef", image: "/cf12.png" },
];

const ChefTeam = () => {
  return (
    <>
      <MainBreadcum name="Our Chef" pageName="Our Chef" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="py-12">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {chefs.map((chef, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden text-center w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-[20px] font-bold text-[#232323]">
                      {chef.name}
                    </h3>
                    <p className="text-[#333333] text-[18px]">{chef.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChefTeam;
