"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AbdusSattarFoundationPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-[#f7f6f2] text-[#1f3a3d]">
      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-b from-[#1f3a3d] via-[#2c4c4c] to-[#1f3a3d] text-white py-28 px-6 sm:px-10 lg:px-20 overflow-hidden">
        {/* Decorative background lights */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-300/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Primary heading */}
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-amber-400">Welcome</span> to the SAN Global Care Foundation
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            {...fadeUp(0.1)}
            className="max-w-3xl mx-auto text-gray-100 text-lg sm:text-xl font-light leading-relaxed mb-10"
          >
            Dedicated to creating lasting change through education, healthcare, and community empowerment — helping every individual realize their potential and live with dignity.
          </motion.p>

          {/* Decorative separator */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex justify-center mb-10"
          >
            <span className="w-24 h-[3px] bg-amber-400 rounded-full"></span>
          </motion.div>

          {/* Extended intro paragraph for warmth */}
          {/* <motion.p
            {...fadeUp(0.3)}
            className="max-w-4xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            SAN Global Care Foundation is a non-profit organization committed to uplifting communities across Bangladesh. 
            We focus on education, health support, social welfare, and skill development to build a future where everyone can thrive. 
            Our vision is guided by humanity, compassion, and a shared belief that together we can build a more hopeful society.
          </motion.p> */}
        </div>

        {/* Gentle top fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white text-center">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold mb-8 text-[#1f3a3d]"
        >
          <span className="text-gray-500">Who</span> we are
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="max-w-4xl mx-auto text-gray-600 leading-relaxed mb-6"
        >
          SAN Global Care Foundation is a non-profit humanitarian organization committed to creating sustainable social change across Bangladesh. Rooted in voluntary service since 2015 and formally registered in 2026, we are the charitable wing of SANGi Group — dedicated to uplifting vulnerable communities through healthcare, education, emergency relief, and livelihood support.

        </motion.p>
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-4xl mx-auto text-gray-600 leading-relaxed"
        >
          We believe lasting progress comes through sustained investment in people, guided by compassion, integrity, and a deep respect for human dignity.
        </motion.p>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#1f3a3d] via-[#2c4c4c] to-[#1f3a3d]">
        <div className="max-w-6xl mx-auto">
         {/* <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white"
          >
            Our <span className="text-amber-400">Mission & Vision</span>
          </motion.h2>*/}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp(0.1)}
              className="bg-white/5 border border-white/10 rounded-xl p-10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become a leading humanitarian organization in Bangladesh — empowering vulnerable communities and driving sustainable positive change through healthcare, education, and social development.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="bg-white/5 border border-white/10 rounded-xl p-10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To serve underprivileged communities through impactful humanitarian initiatives, ethical leadership, and long-term development programs — improving lives, restoring dignity, and building resilient communities for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- IMPACT HIGHLIGHTS ---------- */}
      <section className="bg-white text-white pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "1K+", label: "Students Educated" },
            { value: "500+", label: "Families Supported" },
            { value: "50+", label: "Healthcare Camps" },
            { value: "20+", label: "Scholarships Granted" },
          ].map((item, i) => (
            <motion.div className="bg-gradient-to-b from-[#1f3a3d] via-[#2c4c4c] to-[#1f3a3d] py-10 rounded-lg" key={item.label} {...fadeUp(i * 0.1)}>
              <p className="text-4xl font-bold text-amber-400 mb-2">
                {item.value}
              </p>
              <p className="text-sm tracking-wide text-gray-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- PROGRAMS & INITIATIVES ---------- */}
      <section className="bg-gradient-to-b from-[#1f3a3d] via-[#2c4c4c] to-[#1f3a3d] py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-amber-400"
        >
          Our Core Initiatives
        </motion.h2>
        <p
          {...fadeUp(0.1)}
          className="text-gray-200 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The SAN Global Care Foundation drives real change through targeted initiatives that focus on knowledge, health, and economic growth.  
          Each program is built on the belief that empowerment begins with opportunity.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎓",
              title: "Education",
              desc: "Scholarships, supplies and access to schools for underprivileged children.",
            },
            {
              icon: "🏥",
              title: "Healthcare",
              desc: "Regular medical camps and health awareness drives for rural communities.",
            },
            {
              icon: "🤝",
              title: "Community Relief",
              desc: "Emergency relief and sustainable support programs during crises.",
            },
            {
              icon: "💼",
              title: "Empowerment",
              desc: "Skill training and entrepreneurial support for economic independence.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.1)}
              className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 text-center flex flex-col items-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-[#1f3a3d] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-teal-100/0 via-teal-100/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- STORIES OF CHANGE ---------- */}
      <section className="bg-white py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-[#1f3a3d]"
        >
          <span className="text-gray-500">Stories</span> of Change
        </motion.h2>
        <div className="flex flex-col gap-16">
          {[1, 2].map((n, i) => (
            <motion.div
              key={n}
              {...fadeUp(i * 0.15)}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10`}
            >
              <div className="relative w-full lg:w-1/2 h-[320px] sm:h-[420px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`/images/story${n}.jpg`}
                  alt={`Community Impact ${n}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-3 text-amber-400">
                  Community Impact Story {n}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our programs have helped families access quality education, healthcare, and employment opportunities. 
                  Every story represents hope and our commitment to empowering people to build dignified futures.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CTA / CONCLUSION ---------- */}
      <section className="bg-[#1f3a3d] text-white py-24 text-center px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-bold mb-4 text-teal-300"
        >
          Together, We Can Make a Difference
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Driven by compassion and a shared responsibility towards society, SAN Global Care Foundation works to create lasting impact. 
          Join us in our journey to spread kindness and build a better world for those in need.
        </motion.p>
        <motion.div {...fadeUp(0.2)} className="flex justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
              Volunteer Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-white text-[#1f3a3d] hover:bg-gray-100 font-semibold">
              Donate
            </Button>
          </Link>
        </motion.div>
        <p className="pt-10 text-center italic font-medium max-w-2xl mx-auto">
          “A society grows great when people plant trees under whose shade they may never sit.”
        </p>
      </section>

      {/* ---------- QUOTE STRIP ---------- */}
      
    </main>
  );
}