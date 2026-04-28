import PosterCarousel from "@/components/PosterCarousel";
import ServiceSection from "@/components/ServiceSection";
import QualityTrustSection from "@/components/QualityTrustSection";
import MessageFromCeo from "@/components/MessageFromCeo";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  // const services = [
  //   { name: "SAN Motor's Limited", slug: "san-motors", image: "/images/san-motors.jpg" },
  //   { name: "SANGi Trade International", slug: "sangi-trade", image: "/images/sangi-trade.jpg" },
  //   { name: "SANGi Properties & Development", slug: "sangi-properties", image: "/images/sangi-properties.jpg" },
  //   { name: "San Safety Footwear Industries", slug: "san-safety-footwear", image: "/images/safety-footwear.jpg" },
  //   { name: "Central Shariah Board", slug: "central-shariah-board", image: "/images/shariah-board.jpg" },
  //   { name: "Abdus Sattar Foundation", slug: "abdus-sattar-foundation", image: "/images/abdus-sattar.jpg" },
  // ];

  // const posters = [
  //   {
  //     image: "/banner 1.webp",
  //     caption: (
  //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
  //         Welcome to Sangi Group of Industries
  //       </h1>
  //     ),
  //   },
  //   {
  //     image: "/banner 2.webp",
  //     caption: (
  //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
  //         Building Trust Across Sectors
  //       </h1>
  //     ),
  //   },
  //   {
  //     image: "/banner 3.jpg",
  //     caption: (
  //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
  //         Innovation • Dedication • Growth
  //       </h1>
  //     ),
  //   },
  // ];

  const posters = [
    {
      image: "/banner 1.webp",
      caption: (
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Engineering Tomorrow&apos;s Mobility
          </h2>
          <p className="text-lg text-gray-100 max-w-lg font-medium">
            Crafting innovative vehicles and sustainable solutions
            that drive progress responsibly.
          </p>
        </div>
      ),
    },
    {
      image: "/banner 2.webp",
      caption: (
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Trust That Connects Markets
          </h2>
          <p className="text-lg text-gray-100 max-w-md font-medium">
            From trade to real estate, building global relationships
            grounded in integrity and excellence.
          </p>
        </div>
      ),
    },
    {
      image: "/banner 3.jpg",
      caption: (
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Empowering Purpose Through Progress
          </h2>
          <p className="text-lg text-gray-100 max-w-md font-medium">
            Balancing industry success with social responsibility —
            creating a legacy of care and innovation.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main>
      {/* <div className="bg-red-400 text-white p-4">TOP TEST BOX</div> */}
      <PosterCarousel posters={posters} />
      <QualityTrustSection />
      <ServiceSection />
      <MessageFromCeo />
      <MissionVisionSection />
      <WhyChooseUs />
      {/* <div className="bg-green-400 text-white p-4">BOTTOM TEST BOX</div> */}
    </main>
  );
}