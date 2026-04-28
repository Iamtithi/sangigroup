"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function SangiTradePage() {
  // Shared framer motion animation pattern
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-white text-gray-900">
      {/* ---------- Hero Banner ---------- */}
      <section className="relative h-[420px] sm:h-[520px] lg:h-[640px] overflow-hidden">
        <Image
          src="/trade-poster.jpg"
          alt="SANGi Trade International"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3"
          >
            SANGi Trade International
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="max-w-2xl text-gray-200 text-base sm:text-lg mb-6"
          >
            Bridging markets across continents with integrity, innovation, and
            reliability.
          </motion.p>
          <motion.div {...fadeUp(0.3)}>
            <Link href="/contact">
              <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
                Become a Partner
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Company Overview (reverse layout vs SAN Motors) ---------- */}
      <section className="max-w-7xl mx-auto py-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <motion.div {...fadeUp(0.1)} className="flex-1 text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
              <span className="text-gray-500">Global Trade</span> Local Expertise
            </h2>
            <p className="leading-relaxed mb-4">
              SANGi Trade International is the global wing of the SANGi Group,
              connecting Bangladesh with international markets through ethical,
              transparent, and high-efficiency trade operations.
            </p>
            <p className="leading-relaxed mb-4">
              With decades of cumulative experience, we specialize in export,
              procurement, and logistics — ensuring reliability across every
              transaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From agricultural products to industrial goods, our mission is to
              represent Bangladesh&apos;s capacity for integrity and innovation on a
              global stage.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeUp()} className="flex-1 relative w-full h-[350px] sm:h-[450px]">
            <Image
              src="/global-trade.png"
              alt="Global Logistics"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------- Global Reach Network ---------- */}
      <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Our <span className="text-gray-500">Global Presence</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-600 max-w-2xl mx-auto mt-3">
            Partnering globally for sustainable, transparent supply chain networks
            across regions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
          {[
            { name: "Asia Pacific", desc: "Regional hubs in Bangladesh, Malaysia, and Singapore.", image: "/asia-pacific.png", color: "text-blue-700" },
            { name: "Middle East", desc: "Active trade operation in UAE and Saudi Arabia.", image: "/middle-east.png", color: "text-yellow-600" },
            { name: "Europe", desc: "Distribution networks across Germany, UK, and the Netherlands.", image: "/europe.png", color: "text-purple-600" },
            { name: "Africa", desc: "Emerging partnerships in Kenya and Nigeria.", image: "/africa.png", color: "text-green-700" },
          ].map((region, i) => (
            <motion.div
              key={region.name}
              {...fadeUp(i * 0.15)}
              className="bg-white relative overflow-hidden rounded-xl shadow-sm hover:shadow-md hover:scale-102  text-left border border-gray-200 hover:border-blue-600 transition-all duration-300"
            >
              <div className="relative overflow-hidden mx-auto w-full h-[400px]">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-500 delay-150 
                      group-hover:scale-110"
                />
                <div className="inset-0 bg-black/10 w-full h-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/10 backdrop-blur-sm p-5 shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
                <h3 className={`text-lg font-semibold ${region.color} mb-2`}>
                  {region.name}
                </h3>
                <p className={`text-gray-700 font-medium text-sm`}>{region.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Services & Capabilities ---------- */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-semibold text-gray-900">
            What <span className="text-gray-500">We Do</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-600 mt-3 max-w-2xl mx-auto mb-10">
            Comprehensive trading and logistics solutions for evolving global demands.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              image: "/procurement.png",
              title: "Procurement",
              desc: "Sourcing quality goods from reliable suppliers, ensuring compliance & transparency.",
            },
            {
              image: "/logistics.png",
              title: "Logistics",
              desc: "Streamlining sea, air, and land freight operations for optimum delivery times.",
            },
            {
              image: "/export-import.png",
              title: "Export & Import",
              desc: "Facilitating fair trade bridging regional producers with world markets.",
            },
            {
              image: "/marketing-intelligence.png",
              title: "Market Intelligence",
              desc: "Analyzing trends and providing data-driven guidance to business partners.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.1)}
              className="bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950 relative overflow-hidden rounded-xl shadow hover:shadow-lg border border-gray-200 hover:border-blue-600 transition"
            >
              <div className="relative overflow-hidden mx-auto w-full h-[220px]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-contain transform transition-transform duration-500 delay-150"
                />
                {/* <div className="inset-0 w-full h-full"></div> */}
              </div>
              <div className="px-6 pb-6 ">
                <h3 className="font-semibold text-lg mb-2 text-amber-500 text-center">{c.title}</h3>
                <p className="text-gray-50 text-center text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Ethics & Sustainability ---------- */}
      <section className="relative bg-gradient-to-b from-[#0b1220] via-[#0c182e] to-[#0b1220] text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold mb-6 text-white"
          >
            Building Trust Through <span className="text-gray-50/50">Ethics</span> &{" "}
            <span className="text-gray-50/50">Sustainability</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            At SANGi Trade International, our foundation is built on integrity and
            accountability. From sourcing to delivery, we follow transparent processes
            that ensure compliance with worldwide trade regulations and environmental
            sustainability. Each decision we make reflects our responsibility to our
            partners, communities, and the planet.  
          </motion.p>

          {/* Expanded 2-column content structure */}
          <div className="grid lg:grid-cols-2 gap-10 text-left max-w-7xl mx-auto">
            {/* Left column: Impact description */}
            <motion.div
              {...fadeUp()}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-inner backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-amber-200 mb-3">
                Our Commitment to Integrity
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                We conduct business under the highest ethical standards to build
                enduring trust. Every transaction is validated by due diligence,
                anti-corruption policies, and transparent documentation. Our priority
                is to uphold fairness and authenticity across borders.
              </p>

              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✔</span>
                    <span>Global Trading Compliance & Verification Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✔</span>
                    <span>Ethical Sourcing Policy and Vendor Audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✔</span>
                    <span>Transparent Pricing and Fair Contract Practices</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right column: Sustainability initiatives */}
            <motion.div
              {...fadeUp(0.1)}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-inner backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-amber-200 mb-3">
                Sustainability at Every Step
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Our operations are carefully aligned with global green logistics
                standards and sustainable procurement. Through partnerships and
                digital optimization, we minimize environmental impact and ensure
                responsible trade that helps preserve future resources.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Eco Logistics",
                    desc: "Route optimization and fuel-efficient shipping strategies to reduce emissions.",
                  },
                  {
                    title: "Green Initiatives",
                    desc: "Paperless documentation and smart energy adoption in our global offices.",
                  },
                  {
                    title: "Community Partnerships",
                    desc: "Supporting grass-roots development and local employment through fair trade.",
                  },
                  {
                    title: "Continuous Compliance",
                    desc: "Routine audits to ensure environmental and legal adherence throughout processes.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/60 border border-gray-700 rounded-lg p-5 hover:bg-gray-700/60 transition-colors duration-300"
                  >
                    <h4 className="text-amber-400 font-semibold text-base mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline section */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 border-t border-gray-800 pt-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-400 italic">
              “We believe ethical growth and sustainable trade strengthen not only our
              organization, but the global communities we touch.”
            </p>
          </motion.div>
        </div>

        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#0c1528]/70 to-transparent pointer-events-none"></div>
      </section>

      {/* ---------- CTA (Conclusion Section) ---------- */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 text-center px-6 sm:px-10 lg:px-20">
      <motion.h2
        {...fadeUp()}
        className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900"
      >
        Connecting <span className="text-gray-500">Markets</span> with{" "}
        <span className="text-gray-500">Integrity</span>
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        For decades, SANGi Trade International has built bridges between Bangladesh
        and the world through honest commerce and strategic partnerships.
        Our dedication to transparency and mutual growth continues to strengthen global trade networks.
      </motion.p>

      {/* ✅ Fixed grid layout */}
      <motion.div
        {...fadeUp(0.2)}
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          max-w-6xl 
          mx-auto 
          text-gray-700
        "
      >
        {[
          {
            title: "Our Vision",
            text: "To be a trusted Bangladeshi enterprise building long-term connections with global markets through integrity and excellence.",
          },
          {
            title: "Our Approach",
            text: "We simplify international trade while ensuring fairness, compliance, and value for all partners involved in the supply chain.",
          },
          {
            title: "Our Promise",
            text: "Ethical business practices and total commitment to quality — delivering with reliability and consistency every time.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="
              bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950 
              border border-blue-100 
              rounded-2xl 
              shadow-sm 
              hover:shadow-md 
              transition-all 
              duration-300 
              flex 
              flex-col 
              justify-between 
              p-8
              text-left
            "
          >
            <div>
              <h3 className="font-semibold text-lg text-amber-400 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-50 text-center">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.3)}
        className="mt-14 border-t border-gray-300 pt-8"
      >
        <p className="text-sm text-gray-600 italic max-w-2xl mx-auto">
          “SANGi Trade International continues its journey by strengthening trust,
          expanding partnerships, and fostering a better future for global commerce.”
        </p>
      </motion.div>
    </section>
    </main>
  );
}