import Link from "next/link";
import CarDetailClient from "./CarDetailClient";

type CarSpecifications = {
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  fuelType: string;
  seating: string;
  dimensions: string;
  features: string[];
};

type Car = {
  name: string;
  slug: string;
  image: string;
  desc: string;
  specifications: CarSpecifications;
};

export function generateStaticParams() {
  return [
    { 'car-slug': "toyota-corolla-cross" },
    { 'car-slug': "honda-insight" },
    { 'car-slug': "toyota-noah-hybrid" },
    { 'car-slug': "toyota-fielder-hybrid" },
    { 'car-slug': "toyota-voxy-x" },
    { 'car-slug': "toyota-axio-non-hybrid" },
    { 'car-slug': "hiace-super-gl" },
    { 'car-slug': "hiace-trh200" },
    { 'car-slug': "hyundai-h100" },
    { 'car-slug': "mazda-bongo" },
  ];
}

const cars: Car[] = [
  {
    name: "Toyota Corolla Cross",
    slug: "toyota-corolla-cross",
    image: "/car1.png",
    desc: "Stylish compact SUV crossover combining hybrid efficiency with modern comfort and Toyota Safety Sense.",
    specifications: {
      engine: "1.8L 2ZR-FXE Hybrid",
      power: "122 hp (combined)",
      torque: "142 Nm",
      transmission: "e-CVT",
      fuelType: "Petrol / Hybrid",
      seating: "5 passengers",
      dimensions: "4.46m x 1.83m x 1.62m",
      features: ["Toyota Safety Sense", "8-inch Infotainment", "Pre-Collision System", "Lane Departure Alert", "Rear Camera"],
    },
  },
  {
    name: "Honda Insight",
    slug: "honda-insight",
    image: "/car2.png",
    desc: "Sleek hybrid sedan delivering outstanding fuel economy and a refined driving experience.",
    specifications: {
      engine: "1.5L DOHC i-VTEC Hybrid",
      power: "107 hp + electric motor",
      torque: "134 Nm",
      transmission: "e-CVT",
      fuelType: "Hybrid",
      seating: "5 passengers",
      dimensions: "4.67m x 1.82m x 1.41m",
      features: ["Honda Sensing Suite", "8-inch Display", "Apple CarPlay", "Lane Keep Assist", "Adaptive Cruise Control"],
    },
  },
  {
    name: "Toyota Noah Hybrid",
    slug: "toyota-noah-hybrid",
    image: "/car3.png",
    desc: "Spacious hybrid minivan with dual sliding doors and excellent fuel efficiency for families.",
    specifications: {
      engine: "1.8L 2ZR-FXE Hybrid",
      power: "98 hp + electric motor",
      torque: "142 Nm",
      transmission: "e-CVT",
      fuelType: "Hybrid",
      seating: "7-8 passengers",
      dimensions: "4.695m x 1.730m x 1.895m",
      features: ["Dual Power Sliding Doors", "Toyota Safety Sense", "10-inch Display", "Captain Seats", "Power Tailgate"],
    },
  },
  {
    name: "Toyota Fielder Hybrid",
    slug: "toyota-fielder-hybrid",
    image: "/car4.png",
    desc: "Practical hybrid station wagon with generous boot space and low running costs for daily commuting.",
    specifications: {
      engine: "1.5L 1NZ-FXE Hybrid",
      power: "74 hp + electric motor",
      torque: "111 Nm",
      transmission: "e-CVT",
      fuelType: "Hybrid",
      seating: "5 passengers",
      dimensions: "4.40m x 1.695m x 1.500m",
      features: ["Hybrid EV Mode", "Spacious Boot Space", "Bluetooth Audio", "Keyless Entry", "Fuel Efficiency"],
    },
  },
  {
    name: "Toyota Voxy X",
    slug: "toyota-voxy-x",
    image: "/car5.png",
    desc: "Premium hybrid MPV with bold styling and advanced safety features for modern families.",
    specifications: {
      engine: "1.8L M20A-FXS Hybrid",
      power: "152 hp (combined)",
      torque: "185 Nm",
      transmission: "e-CVT",
      fuelType: "Hybrid",
      seating: "7 passengers",
      dimensions: "4.695m x 1.730m x 1.895m",
      features: ["Toyota Safety Sense 3.0", "10-inch Display", "Wireless Charging", "Dual Sliding Doors", "Panoramic Roof Option"],
    },
  },
  {
    name: "Toyota Axio Non Hybrid",
    slug: "toyota-axio-non-hybrid",
    image: "/car6.png",
    desc: "Reliable compact sedan with proven VVT-i engine, comfortable interior, and low maintenance costs.",
    specifications: {
      engine: "1.5L 1NZ-FE VVT-i",
      power: "109 hp",
      torque: "141 Nm",
      transmission: "4-Speed Automatic",
      fuelType: "Petrol",
      seating: "5 passengers",
      dimensions: "4.40m x 1.695m x 1.490m",
      features: ["VVT-i Engine", "Air Conditioning", "Power Windows", "ABS Brakes", "CD Audio System"],
    },
  },
  {
    name: "Hiace Super GL",
    slug: "hiace-super-gl",
    image: "/car7.png",
    desc: "Premium commercial van with upgraded interior, alloy wheels, and powerful turbo diesel engine.",
    specifications: {
      engine: "2.8L 1GD-FTV Turbo Diesel",
      power: "177 hp",
      torque: "450 Nm",
      transmission: "6-Speed Automatic",
      fuelType: "Diesel",
      seating: "Up to 10 passengers",
      dimensions: "5.38m x 1.88m x 2.285m",
      features: ["Premium Interior Trim", "Alloy Wheels", "LED Headlights", "Rear Air Conditioning", "Backup Camera"],
    },
  },
  {
    name: "Hiace TRH200",
    slug: "hiace-trh200",
    image: "/car8.png",
    desc: "Workhorse passenger van seating up to 15, built for durability and high-capacity transport.",
    specifications: {
      engine: "2.7L 2TR-FE Petrol",
      power: "160 hp",
      torque: "246 Nm",
      transmission: "5-Speed Manual",
      fuelType: "Petrol",
      seating: "Up to 15 passengers",
      dimensions: "5.38m x 1.88m x 2.10m",
      features: ["High Roof Option", "Air Conditioning", "Power Steering", "Durable Steel Body", "Easy Maintenance"],
    },
  },
  {
    name: "Hyundai H100",
    slug: "hyundai-h100",
    image: "/car9.png",
    desc: "Compact yet capable commercial pickup suited for delivery and transport efficiency.",
    specifications: {
      engine: "2.5L CRDi",
      power: "120 hp",
      torque: "343 Nm",
      transmission: "5-Speed Manual",
      fuelType: "Diesel",
      seating: "3 passengers",
      dimensions: "4.9m x 1.7m x 1.9m",
      features: ["Cargo Bed", "Diesel Engine", "ABS Brakes", "Power Steering", "Bluetooth Audio"],
    },
  },
  {
    name: "Mazda Bongo",
    slug: "mazda-bongo",
    image: "/car10.png",
    desc: "Trusted commercial van ensuring performance, space, and cost-effectiveness for business users.",
    specifications: {
      engine: "2.2L Turbo Diesel",
      power: "110 hp",
      torque: "300 Nm",
      transmission: "5-Speed Manual",
      fuelType: "Diesel",
      seating: "3 passengers + cargo",
      dimensions: "4.9m x 1.7m x 2.0m",
      features: ["Cargo Van", "Rear Doors", "Diesel Efficiency", "Reliable Performance", "Commercial Grade"],
    },
  },
];

export default async function CarDetailPage(props: { params: Promise<{ 'car-slug': string }> }) {
  const resolvedParams = (await props.params) as { 'car-slug': string };
  const car = cars.find((c) => c.slug === resolvedParams['car-slug']);

  if (!car) {
    return (
      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link href="/services/san-motors" className="inline-flex rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
            Back to Vehicles
          </Link>
        </div>
      </main>
    );
  }

  return <CarDetailClient car={car} />;
}
