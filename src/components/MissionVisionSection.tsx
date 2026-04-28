"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-gray-50 text-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Summary */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Our <span className="text-black">Mission</span> &{" "}
            <span className="text-black">Vision</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            At SANGi Group, our mission and vision guide every initiative — enhancing lives, empowering communities and building a sustainable future through innovation, integrity, and excellence. We aim to lead as a responsible, innovative and sustainable business group, creating lasting value for communities, clients and industries worldwide.
          </p>
        </div>

        {/* ---------- Mission ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-stretch overflow-hidden shadow-md mb-4 rounded-t-3xl"
        >
          {/* Mission heading */}
          <div className="w-full lg:w-[30%] flex items-center justify-center bg-black text-white p-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-center">
              Our Mission
            </h3>
          </div>

          {/* Mission points */}
          <div className="flex-1 bg-gray-200 p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Enhance Lives",
                text:
                  "Deliver innovative and reliable solutions that improve the quality of life for our clients, partners, and communities.",
              },
              {
                title: "Diversified Industries",
                text:
                  "Operate responsibly across multiple sectors — automotive, trade, real estate, safety footwear, protein & agro and social development — ensuring sustainable growth and value.",
              },
              {
                title: "Integrity & Excellence",
                text:
                  "Uphold trust through consistent quality, safety and ethical standards, driven by innovation and a commitment to excellence.",
              },
              {
                title: "Community Focus",
                text:
                  "Align business operations with social and environmental responsibility to create positive impact and shared prosperity for communities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-100 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Vision ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-stretch overflow-hidden shadow-md rounded-b-3xl"
        >
          {/* Vision points (dark background) */}
          <div className="flex-1 bg-black text-white p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {[
              {
                title: "Global Leadership",
                text:
                  "Become a Bangladesh-born brand recognized worldwide for ethics, innovation and excellence.",
              },
              {
                title: "Industrial Excellence",
                text:
                  "Set industry benchmarks in quality, creativity and sustainable development across all business sectors.",
              },
              {
                title: "Empowering People",
                text:
                  "Advance education, safety, healthcare and social initiatives to uplift communities and enhance opportunities.",
              },
              {
                title: "Sustainable Future 2030",
                text:
                  "Champion green growth, ethical governance and long-term prosperity for a resilient and sustainable future.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Vision heading (light panel) */}
          <div className="w-full lg:w-[30%] flex items-center justify-center bg-gray-200 text-black order-1 lg:order-2 p-10 border-t border-gray-200 lg:border-t-0">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-center">
              Our Vision
            </h3>
          </div>
        </motion.div>

        {/* ---------- Learn More Button ---------- */}
        <div className="text-center mt-12">
          <Link href="/about/mission-vision">
            <Button
              variant="outline"
              className="px-8 py-3 text-black border-black hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              Learn More About Our Mission & Vision
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}