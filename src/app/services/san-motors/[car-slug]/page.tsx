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
  const cars = [
    { slug: "toyota-hiace" },
    { slug: "nissan-navara" },
    { slug: "mitsubishi-canter" },
    { slug: "hino-300-series" },
    { slug: "isuzu-npr" },
    { slug: "toyota-corolla-altis" },
    { slug: "honda-city" },
    { slug: "toyota-noah" },
    { slug: "hyundai-h100" },
    { slug: "mazda-bongo" },
  ];

  return cars.map((car) => ({
    'car-slug': car.slug,
  }));
}

const cars: Car[] = [
  {
    name: "Toyota HiAce",
    slug: "toyota-hiace",
    image: "/car1.png",
    desc: "Reliable commercial van designed for performance and passenger comfort, perfect for business operations.",
    specifications: {
      engine: "2.8L Turbo Diesel",
      power: "177 hp",
      torque: "450 Nm",
      transmission: "6-Speed Manual/Automatic",
      fuelType: "Diesel",
      seating: "Up to 15 passengers",
      dimensions: "5.3m x 1.9m x 2.3m",
      features: ["Air Conditioning", "Power Steering", "ABS Brakes", "Dual Airbags", "USB Charging Ports"],
    },
  },
  {
    name: "Nissan Navara",
    slug: "nissan-navara",
    image: "/car2.png",
    desc: "Durable and powerful pickup truck ideal for logistics, off-road, and industrial use.",
    specifications: {
      engine: "2.3L Turbo Diesel",
      power: "190 hp",
      torque: "450 Nm",
      transmission: "7-Speed Automatic",
      fuelType: "Diesel",
      seating: "5 passengers",
      dimensions: "5.3m x 1.9m x 1.8m",
      features: ["4WD System", "Hill Start Assist", "Tow Bar", "Bluetooth Connectivity", "Cruise Control"],
    },
  },
  {
    name: "Mitsubishi Canter",
    slug: "mitsubishi-canter",
    image: "/car3.png",
    desc: "Medium-duty truck known for strength and fuel efficiency across long hauls.",
    specifications: {
      engine: "3.0L Turbo Diesel",
      power: "150 hp",
      torque: "400 Nm",
      transmission: "5-Speed Manual",
      fuelType: "Diesel",
      seating: "3 passengers",
      dimensions: "6.2m x 2.0m x 2.5m",
      features: ["Heavy Duty Suspension", "Cargo Box", "Backup Camera", "Fuel Efficient Engine", "Maintenance Alerts"],
    },
  },
  {
    name: "Hino 300 Series",
    slug: "hino-300-series",
    image: "/car4.png",
    desc: "Modern delivery vehicle offering reliability and low maintenance costs for commercial ventures.",
    specifications: {
      engine: "4.0L Turbo Diesel",
      power: "175 hp",
      torque: "500 Nm",
      transmission: "6-Speed Manual",
      fuelType: "Diesel",
      seating: "2 passengers",
      dimensions: "7.0m x 2.2m x 2.8m",
      features: ["Large Cargo Space", "Easy Access", "Reliable Engine", "Low Maintenance", "GPS Tracking Ready"],
    },
  },
  {
    name: "Isuzu NPR",
    slug: "isuzu-npr",
    image: "/car5.png",
    desc: "Practical light-duty truck engineered for durability and superior load capacity.",
    specifications: {
      engine: "3.0L Turbo Diesel",
      power: "160 hp",
      torque: "400 Nm",
      transmission: "5-Speed Manual",
      fuelType: "Diesel",
      seating: "3 passengers",
      dimensions: "6.5m x 2.1m x 2.6m",
      features: ["High Payload Capacity", "Durable Chassis", "Easy Maintenance", "Fuel Efficient", "Versatile Use"],
    },
  },
  {
    name: "Toyota Corolla Altis",
    slug: "toyota-corolla-altis",
    image: "/car6.png",
    desc: "Premium sedan combining comfort, efficiency, and proven reliability.",
    specifications: {
      engine: "1.8L Hybrid",
      power: "122 hp",
      torque: "142 Nm",
      transmission: "CVT Automatic",
      fuelType: "Hybrid",
      seating: "5 passengers",
      dimensions: "4.6m x 1.8m x 1.4m",
      features: ["Hybrid Technology", "LED Headlights", "Touchscreen Display", "Apple CarPlay", "Safety Sense"],
    },
  },
  {
    name: "Honda City",
    slug: "honda-city",
    image: "/car7.png",
    desc: "Stylish and efficient sedan preferred for city drives and modern family use.",
    specifications: {
      engine: "1.5L i-VTEC",
      power: "121 hp",
      torque: "145 Nm",
      transmission: "CVT Automatic",
      fuelType: "Petrol",
      seating: "5 passengers",
      dimensions: "4.5m x 1.7m x 1.5m",
      features: ["i-VTEC Engine", "Honda Sensing", "7-inch Display", "Wireless Charging", "Lane Keep Assist"],
    },
  },
  {
    name: "Toyota Noah",
    slug: "toyota-noah",
    image: "/car8.png",
    desc: "Compact MPV offering space, safety, and flexibility for both families and corporate fleets.",
    specifications: {
      engine: "1.8L Hybrid",
      power: "98 hp",
      torque: "142 Nm",
      transmission: "CVT Automatic",
      fuelType: "Hybrid",
      seating: "8 passengers",
      dimensions: "4.7m x 1.7m x 1.8m",
      features: ["Sliding Doors", "Captain Seats", "Hybrid Efficiency", "Toyota Safety Sense", "Spacious Interior"],
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
