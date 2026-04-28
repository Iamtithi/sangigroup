"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

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

interface CarDetailClientProps {
  car: Car;
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-6">
        <Link href="/services/san-motors#stock">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Vehicles
          </Button>
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp()} className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image src={car.image} alt={car.name} fill className="object-cover object-center" priority />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{car.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{car.desc}</p>
            </div>

            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">Inquire Now</Button>
              </Link>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Detailed specifications and features of the {car.name}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp(0.1)} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Engine & Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Engine</span>
                  <span className="text-gray-900">{car.specifications.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Power</span>
                  <span className="text-gray-900">{car.specifications.power}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Torque</span>
                  <span className="text-gray-900">{car.specifications.torque}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Transmission</span>
                  <span className="text-gray-900">{car.specifications.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Fuel Type</span>
                  <span className="text-gray-900">{car.specifications.fuelType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Seating Capacity</span>
                  <span className="text-gray-900">{car.specifications.seating}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">Dimensions (L x W x H)</span>
                  <span className="text-gray-900">{car.specifications.dimensions}</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-3">
                {car.specifications.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose This Vehicle?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This vehicle combines reliability, performance, and efficiency to meet the demands
                  of modern transportation needs. Backed by SAN Motor&apos;s quality assurance and after-sales
                  service, you can drive with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 text-white py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeUp()} className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about pricing, availability, and customization options for the {car.name}.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link href="/contact">
              <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold px-8 py-3">Contact Us Today</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
