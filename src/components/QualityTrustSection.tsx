"use client";
import Image from "next/image";

export default function QualityTrustSection() {
  const circles = [
    {
      name: "Quality",
      image: "/quality-icon.png",
    },
    {
      name: "Shariah Certified",
      image: "/start-crescent-icon.png",
    },
    {
      name: "Award Winning",
      image: "/award-icon.png",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Focusing on <span className="text-gray-500">quality,</span> we maintain customer trust
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          We deliver reliable products and services across automobile, real estate, agro supply and industrial solutions, guided by strict quality standards at every stage. From sourcing and inspection to delivery and after-sales support, we ensure consistency, durability and value. Our commitment to transparency and responsible business practices gives customers confidence in every decision they make.<br/><br/>By understanding real market needs, we provide solutions that are practical, sustainable and dependable. This dedication to excellence has earned us long-term trust from clients and partners across diverse industries.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {circles.map((item) => (
            <div
              key={item.name}
              className="group relative w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52
                         flex flex-col items-center justify-center
                         rounded-full bg-gray-100 hover:bg-white
                         transition-all duration-300 shadow-sm hover:shadow-xl
                         border border-gray-200 hover:border-transparent
                         cursor-pointer"
            >
              <div className="w-14 h-14 relative mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-700 group-hover:text-blue-700">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}