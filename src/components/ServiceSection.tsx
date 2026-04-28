"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    title: "SAN Motor's Limited",
    description:
      "Specializes in the import and supply of high-quality vehicles, delivering reliable performance, safety and value. We focus on trusted sourcing, careful inspection and dependable after-sales support to ensure long-term customer satisfaction and sustainable mobility solutions.",
    link: "/services/san-motors",
  },
  {
    title: "SANGi Trade International",
    description:
      "Connects global markets through import & export services and delivers reliable agent banking solutions as an authorized outlet of Islami Bank Bangladesh PLC.",
    link: "/services/sangi-trade",
  },
  {
    title: "SANGi Properties & Development",
    description:
      "Engaged in land purchase and sale, flat sales and trusted real estate services, delivering transparent transactions and long-term value for clients.",
    link: "/services/sangi-properties",
  },
  {
    title: "San Safety Footwear Industries",
    description:
      "Engaged in the manufacturing of safety footwear, delivering strength, comfort and protection to meet demanding industrial environments.",
    link: "/services/san-safety-footwear",
  },
  {
    title: "Central Shariah Board of Sangi Group",
    description:
      "Oversees and ensures that all business activities across every sector of the Group strictly comply with Islamic Shariah principles. The Board provides guidance, supervision and review to maintain ethical conduct, transparency and Shariah-compliant operations in all corporate practices. It also ensures that all financial transactions, contracts and banking activities are conducted in full accordance with Islamic Shariah rules and guidelines.",
    link: "/services/central-shariah-board",
  },
  {
    title: " SAN Global Care Foundation",
    description:
      "A charitable organization committed to improving the lives of underprivileged communities worldwide. Through initiatives in education, healthcare and social welfare, the Foundation works to create lasting positive impact, empower individuals and foster sustainable development.",
    link: "/services/abdus-sattar-foundation",
  },
];

const itemDelay = 0.15;
const itemDuration = 0.6;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-gray-200/70 text-gray-900 py-16 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Our <span className="text-gray-500">Services</span>
        </h2>

        <div
          className="
            mt-14
            grid
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-[5px]
            rounded-2xl overflow-hidden
            bg-gray-100
          "
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: itemDuration,
                delay: i * itemDelay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-white p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8">
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="text-blue-700 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-200"
                  >
                    See More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
