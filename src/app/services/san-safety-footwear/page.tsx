"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function SanSafetyFootwearPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-[#1f1f1f] text-gray-100">
      {/* ---------- Hero ---------- */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden bg-gradient-to-r from-black to-gray-800">
        <Image
          src="/footwear.jpeg"
          alt="San Safety Footwear"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-black sm:font-bold md:font-bold text-yellow-400 mb-3 uppercase tracking-wide"
          >
            San Safety Footwear Industries
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="max-w-2xl text-gray-200 text-base sm:text-lg mb-6"
          >
            Excellence in Every Step — Crafting durable, comfortable, and reliable footwear for industries that never stop.
          </motion.p>
          <motion.div {...fadeUp(0.3)}>
            <Link href="/contact">
              <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div {...fadeUp()} className="flex-1">
            <Image
              src="/boot-factory.png"
              alt="Factory"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex-1 text-gray-300">
            <h2 className="text-3xl font-bold text-yellow-200 mb-4">
              A <span className="text-yellow-400">Name of Trust</span> in Footwear Manufacturing
            </h2>
            <p className="mb-4 leading-relaxed">
              San Safety Footwear Industries stands as a distinguished player in the footwear sector, offering comprehensive
              solutions for importers, manufacturers, and suppliers. We prioritize safety and comfort in every design,
              providing workwear that embodies durability and performance.
            </p>
            <p className="leading-relaxed mb-4">
              Our commitment to quality is reflected in our two flagship brands — <strong>De Force</strong> and <strong>SANEX</strong>.
              Each pair is meticulously crafted to the highest standards, delivering protection and style to professionals across industries.
            </p>
            <p className="leading-relaxed">
              Whether you&apos;re an importer offering premium footwear, a manufacturer seeking finest materials, or a supplier focused on
              safety and comfort — San Safety Footwear Industries is your trusted partner in quality, innovation, and reliability.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center mt-10">
              {[
                { value: "25+", label: "Years" },
                { value: "10", label: "Factories" },
                { value: "35+", label: "Countries" },
              ].map((item) => (
                <motion.div key={item.label} {...fadeUp(0.2)}>
                  <p className="text-3xl font-bold text-yellow-400">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Product Range ---------- */}
      <section className="relative bg-amber-50 py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900"
          >
            Our <span className="text-gray-500">Product Range</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-16"
          >
            From industrial sites to corporate workshops, our range of safety footwear delivers durability and comfort in every pair. 
            Each design undergoes strict testing and is engineered for long-term performance and safety.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { img: "/boot1.png", name: "De Force Safety Boot A1", desc: "Heavy-duty steel-toe boot for industrial use — durable traction and complete ankle support." },
              { img: "/boot2.png", name: "SANEX Protect Pro S1", desc: "Lightweight composite-toe shoe designed for comfort and flexibility in dynamic workspaces." },
              { img: "/boot3.png", name: "De Force Trek Shield", desc: "Premium leather boots with anti-slip outsole ensuring safety in tough terrains and construction sites." },
              { img: "/boot4.png", name: "SANEX Ultra Lite", desc: "Slip-resistant and breathable shoe for long working hours — ideal for logistics and warehousing." },
              { img: "/boot5.png", name: "De Force Grip Max", desc: "High-grip rubber sole and reinforced toe cap offering maximum stability and impact resistance." },
              { img: "/boot6.png", name: "SANEX Classic Elite", desc: "Comfort-driven formal safety shoe combining style, strength, and innovation for corporate safety." },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...fadeUp(i * 0.1)}
                className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden w-full h-[340px]">
                  <Image
                    src={`${item.img}`}
                    alt={item.name}
                    fill
                    className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Product Info */}
                <div className="relative p-6 text-left">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Animated bottom border glow */}
                {/* <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div> */}
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="text-center mt-16 border-t border-gray-800 pt-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-800 italic">
              “Every pair represents our promise of safety and quality — where protection meets performance and comfort.”
            </p>
          </motion.div>
        </div>

        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" /> */}
      </section>

      {/* ---------- Standards & Certifications ---------- */}
      <section className="relative bg-gray-900 text-gray-100 py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* ---------- Header ---------- */}
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-200 mb-4">
              Certified for <span className="text-yellow-400">Global Standards</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every pair of footwear we produce undergoes stringent quality assessments to meet the highest global benchmarks.
              Our certifications prove our commitment to safety, durability, and engineering excellence.
            </p>
          </motion.div>

          {/* ---------- Layout: Sidebar + Grid ---------- */}
          <div className="grid lg:grid-cols-[1.5fr_2.5fr] gap-10 max-w-6xl mx-auto">
            {/* Sidebar */}
            <motion.div
              {...fadeUp(0.1)}
              className="bg-gray-800 rounded-2xl p-10 shadow-md flex flex-col justify-center border-l-4 border-yellow-400"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Global Certification Overview
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                At San Safety Footwear Industries, our certifications represent the assurance we deliver to every client.
                Each standard reinforces our dedication to producing superior safety footwear that complies with global industry regulations.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                <li>
                  <span className="text-yellow-400 font-medium">ISO</span> — quality
                  and process management.
                </li>
                <li>
                  <span className="text-yellow-400 font-medium">CE</span> — European
                  conformity and product safety.
                </li>
                <li>
                  <span className="text-yellow-400 font-medium">ASTM</span> — testing
                  and material certification.
                </li>
                <li>
                  <span className="text-yellow-400 font-medium">EN &amp; PPE</span> —
                  worker protection standards.
                </li>
                <li>
                  <span className="text-yellow-400 font-medium">BIS</span> — Indian
                  quality compliance.
                </li>
              </ul>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center content-center"
            >
              {["ISO", "CE", "ASTM", "EN", "PPE", "BIS"].map((cert, i) => (
                <motion.div
                  key={cert}
                  {...fadeUp(i * 0.1)}
                  className="group flex flex-col items-center justify-center"
                >
                  <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gray-800 border-2 border-gray-700 shadow-md hover:border-yellow-400 hover:shadow-yellow-400/20 transition-all duration-500">
                    <span className="text-3xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition">
                      {cert}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ---------- Footer tagline ---------- */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 border-t border-gray-700 pt-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-sm text-gray-400 italic">
              “Our certifications are more than honors — they&apos;re our promise of trust, safety, and consistency in every pair we produce.”
            </p>
          </motion.div>
        </div>

        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </section>

      {/* ---------- Research & Innovation ---------- */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden text-gray-900">
        <Image
          src="/research-innovation-bg.jpeg"
          alt="San Safety Footwear"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Heading */}
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-950"
          >
            Research &amp; <span className="text-gray-800">Development</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-50 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            At San Safety Footwear Industries, progress means commitment to innovation and precision. Our R&D team continuously refines materials, design techniques, and production processes to ensure every pair delivers safety, durability, and comfort.
          </motion.p>

          {/* R&D Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-left">
            {[
              {
                title: "Material Testing & Durability",
                desc: "Every component—from sole to lace—is tested for heat, flexibility, and impact to ensure lasting performance.",
                icon: "/testing.png",
              },
              {
                title: "Design & Engineering",
                desc: "Footwear crafted with scientific precision for optimum fit, ergonomics, and efficiency in modern work environments.",
                icon: "/engineering.png",
              },
              {
                title: "Comfort & Performance Labs",
                desc: "Advanced movement analysis and pressure testing that guarantee comfort while preserving safety standards.",
                icon: "/lab.png",
              },
              {
                title: "Innovation Partnerships",
                desc: "Working with global experts and suppliers to engineer next-generation technologies in protective footwear.",
                icon: "/innovation.png",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover accent border effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-amber-400/40 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer tagline */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 border-t border-gray-500 pt-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-50 italic leading-relaxed">
              “Driven by research, refined by engineering precision — our innovation ensures safety and comfort for workers worldwide.”
            </p>
          </motion.div>
        </div>

        {/* Background accent */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-transparent to-gray-50 pointer-events-none" /> */}
      </section>

      {/* ---------- Industries Served ---------- */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold mb-6"
          >
            Industries <span className="text-yellow-400">We Serve</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Our footwear supports the backbone of modern industry — providing professionals with reliable protection and superior comfort in every line of work.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Construction",
                desc: "Heavy-duty boots built to endure on-site stress and provide dependable traction.",
                icon: "/icons/construction-site.svg",
              },
              {
                name: "Energy & Power",
                desc: "Anti-static footwear ensuring electrical safety in high-risk environments.",
                icon: "/icons/energy.svg",
              },
              {
                name: "Marine & Offshore",
                desc: "Slip-resistant designs ideal for wet environments and offshore conditions.",
                icon: "/icons/marine.svg",
              },
              {
                name: "Defense",
                desc: "Resilient and tactical footwear engineered for field conditions and long missions.",
                icon: "/icons/defense.svg",
              },
              {
                name: "Manufacturing",
                desc: "Industrial-grade shoes offering stability and endurance for factory workers.",
                icon: "/icons/manufacturing.svg",
              },
              {
                name: "Transport & Logistics",
                desc: "Lightweight footwear providing mobility and comfort for long operational hours.",
                icon: "/icons/transport.svg",
              },
              {
                name: "Mining",
                desc: "Steel-toe boots crafted for abrasion resistance and protection in hazardous sites.",
                icon: "/icons/mining.svg",
              },
              {
                name: "Oil & Gas",
                desc: "Heat-resistant and anti-slip footwear built for extreme industrial conditions.",
                icon: "/icons/oil-gas.svg",
              },
            ].map((sector, i) => (
              <motion.div
                key={sector.name}
                {...fadeUp(i * 0.05)}
                className="group relative bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="relative w-14 h-14 mb-5">
                  <Image
                    src={sector.icon}
                    alt={sector.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-lg text-yellow-400 mb-2">
                  {sector.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {sector.desc}
                </p>

                {/* Hover glow */}
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" /> */}
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 border-t border-gray-700 pt-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-400 italic">
              “Our footwear moves industries — protecting and empowering those who build, power, and shape the modern world.”
            </p>
          </motion.div>
        </div>

        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
      </section>

      {/* ---------- Conclusion Section (Revised CTA) ---------- */}
      <section className="relative bg-white text-gray-900 py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Section Heading */}
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Empowering Industries <span className="text-yellow-500">One Step at a Time</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="max-w-3xl mx-auto mb-16 leading-relaxed text-gray-600"
          >
            San Safety Footwear Industries delivers reliability you can stand on —
            engineering footwear that meets global standards while ensuring comfort, durability, and confidence in every step. 
            Our continuous commitment to excellence drives the footwear industry forward.
          </motion.p>

          {/* Grid of Cards with Dark Theme */}
          <motion.div
            {...fadeUp(0.2)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left"
          >
            {[
              {
                title: "Global Distribution",
                text: "Exporting premium footwear to industries across Asia, Europe, and the Middle East, ensuring timely and reliable delivery.",
              },
              {
                title: "Quality Engineering",
                text: "Integrating modern machinery with meticulous quality control to deliver long-lasting and high-performance footwear.",
              },
              {
                title: "Brand Legacy",
                text: "De Force and SANEX — our trusted brands symbolize durability, protection, and comfort for professionals worldwide.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.1)}
                className="group relative bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 border border-gray-800 rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.text}
                  </p>
                </div>
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300/0 via-amber-400/10 to-amber-300/0 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none" /> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Divider + Tagline */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-20 border-t border-gray-600 pt-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-sm italic text-gray-500">
              “At San Safety Footwear Industries, we engineer safety you can trust — blending design, performance, and comfort for every industry.”
            </p>
          </motion.div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-transparent to-white pointer-events-none" />
      </section>
    </main>
  );
}
