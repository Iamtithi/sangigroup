"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-white text-gray-900">
      {/* ---------- INTRO ---------- */}
      <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-20 text-center">
        <motion.h1
          {...fadeUp()}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          About <span className="text-gray-500">SAN Group</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          SAN Group of Industries, established in 2012, is a diversified business group in Bangladesh operating across automotive, international trade, real estate, safety footwear, protein & agro products and social development initiatives. Committed to sustainable growth, ethical practices and innovation, we deliver high quality products and services from durable safety footwear to reliable agro supplies while creating lasting value for clients, communities and industries nationwide.
        </motion.p>
      </section>

      {/* ---------- OUR JOURNEY ---------- */}
      <section className="py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold mb-8"
          >
            Our Journey & Purpose
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6"
          >
            <span className="font-bold">SAN Group of Industries</span> was established in 2012 with a clear vision: to build diversified businesses that are resilient, transparent and focused on creating long-term value. Since then, the Group has expanded across multiple sectors including automotive, international trade, real estate, safety footwear, protein & agro products and social development while maintaining consistent governance, ethical practices and a shared operational philosophy.
          </motion.p>

          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            Each business unit operates independently, yet adheres to unified standards of quality, accountability and Shariah compliant oversight where applicable. This structure enables us to meet industry specific challenges effectively while staying true to our core principles of integrity, innovation and sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* ---------- HOW WE OPERATE ---------- */}
      <section className="bg-gray-100 py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold text-center mb-14"
        >
          How We Operate
        </motion.h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Structured Governance",
              text: "Clear operational frameworks guide decision-making across all business units.",
            },
            {
              title: "Ethical Oversight",
              text: "Financial and strategic matters are reviewed under Shariah and ethical guidance.",
            },
            {
              title: "Sector-Focused Execution",
              text: "Each division follows industry-specific expertise and compliance standards.",
            },
            {
              title: "Long-Term Vision",
              text: "Growth strategies are designed for stability, not short-term gains.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.1)}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- BUSINESS DIVISIONS ---------- */}
      <section className="py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold text-center mb-14"
        >
          Our Business Divisions
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "SAN Motor's Limited",
              href: "/services/san-motors",
            },
            {
              name: "SANGi Trade International",
              href: "/services/sangi-trade",
            },
            {
              name: "SANGi Properties & Development",
              href: "/services/sangi-properties",
            },
            {
              name: "San Safety Footwear Industries",
              href: "/services/san-safety-footwear",
            },
            {
              name: "Central Shariah Board",
              href: "/services/central-shariah-board",
            },
            {
              name: "Abdus Sattar Foundation",
              href: "/services/abdus-sattar-foundation",
            },
          ].map((division, i) => (
            <motion.div
              key={division.name}
              {...fadeUp(i * 0.1)}
              className="group"
            >
              <Link
                href={division.href}
                className="block bg-gray-50 border border-gray-200 rounded-lg p-6 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
              >
                {division.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- COMMITMENT ---------- */}
      <section className="bg-[#0b1220] text-white py-24 px-6 sm:px-10 lg:px-20 text-center">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold mb-6"
        >
          Our Commitment
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          SANGi Group remains committed to operating with integrity, discipline,
          and accountability. By aligning ethical governance with practical
          execution, we aim to build enterprises that contribute positively to
          industry development, economic progress, and community well-being.
        </motion.p>
      </section>
    </main>
  );
}