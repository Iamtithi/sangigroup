"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SangiPropertiesPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-[#f5f5f2] text-gray-900">
      {/* ---------- Split Hero ---------- */}
      <section className="flex flex-col-reverse lg:flex-row h-[500px]">
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-10 lg:px-20 bg-emerald-900 text-white text-center lg:text-left">
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            SANGi Properties & Development
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-gray-200 mb-6 max-w-xl">
            Designing tomorrow&apos;s sustainable spaces for communities that thrive.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link href="/contact">
              <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/properties-and-development.jpg"
            alt="Properties Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="text-center py-20 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-900"
        >
          Building Harmony Between Nature and Structure
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          SANGi Properties integrates design innovation with sustainability,
          redefining urban and residential living through architectural
          excellence.
        </motion.p>
      </section>

      {/* ---------- Featured Projects Grid ---------- */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-green-950/60 via-emerald-700 to-emerald-900">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-800"
        >
          Featured <span className="text-gray-800/70">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { src: "/apartment-1.jpg", title: "Greenview Residency" },
            { src: "/apartment-2.jpg", title: "CityLight Apartments" },
            { src: "/apartment-3.jpg", title: "Oasis Villas" },
            { src: "/apartment-4.jpg", title: "Urban Vista Complex" },
            { src: "/apartment-5.png", title: "Sunrise Condos" },
            { src: "/apartment-6.jpg", title: "Heritage Towers" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.1)}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white opacity-0 hover:opacity-100 transition-opacity">
                <span className="font-bold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Expertise Timeline ---------- */}
      {/* ---------- Expertise Section (Refined for Property & Development) ---------- */}
      <section className="bg-emerald-50 py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold text-center mb-6 text-emerald-900"
          >
            Our <span className="text-emerald-900/70">Expertise</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-600 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
          >
            With a deep understanding of the real estate landscape and the needs of communities, SANGi Properties & Development delivers future-ready projects built on quality, trust, and precision.  
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Architectural Design",
                desc: "Designing modern, functional, and aesthetic spaces that inspire confidence and comfort.",
                icon: "/architecture.png",
              },
              {
                title: "Project Development",
                desc: "Overseeing planning, execution, and completion of commercial and residential projects.",
                icon: "/construction.png",
              },
              {
                title: "Investment Opportunities",
                desc: "Creating value-driven real estate ventures for investors looking for long-term returns.",
                icon: "/investment.png",
              },
              {
                title: "Property Management",
                desc: "Managing facilities and assets to ensure sustainable operation and growth of our developments.",
                icon: "/property.png",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.15)}
                className="group bg-white border border-emerald-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="relative w-14 h-14 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Business Excellence Section (Replaces Sustainability) ---------- */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-950 to-[#012f23] text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold mb-6"
          >
            Business Excellence in Every Project
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            At SANGi Properties & Development, we combine practical design,
            professional execution, and sound business strategy to achieve sustained growth.
            Our goal is to deliver properties that create value for clients and stand as symbols of progress.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Residential Developments",
                text: "Designing and building premium apartments and housing complexes that enhance urban living.",
              },
              {
                title: "Commercial Projects",
                text: "Developing business towers, industrial sites, and offices built on strategic locations with high value potential.",
              },
              {
                title: "Land Development",
                text: "Transforming land into profitable assets through planning, infrastructure design, and zoning compliance.",
              },
              {
                title: "Strategic Partnerships",
                text: "Collaborating with investors, builders, and governments to accelerate property growth and innovation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                className="bg-emerald-800/80 border border-emerald-600/50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:bg-emerald-800 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-amber-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 text-sm text-gray-400 italic border-t border-emerald-800 pt-8 max-w-4xl mx-auto"
          >
            “We don&apos;t just construct buildings — we create investment opportunities,
           real estate value, and lasting legacies for our partners.”
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </section>

      {/* ---------- Conclusion Section (Revised CTA) ---------- */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24 text-center px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-900"
        >
          Building Foundations for Success
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Backed by years of expertise and a commitment to excellence, SANGi Properties & Development delivers projects that define trust and value in Bangladesh&apos;s growing real estate market.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left"
        >
          {[
            {
              title: "Client Relationships",
              text: "Building enduring partnerships with buyers, investors, and stakeholders through integrity and service.",
            },
            {
              title: "Market Growth",
              text: "Developing projects that contribute to the urban infrastructure and economic progress of Bangladesh.",
            },
            {
              title: "Future Readiness",
              text: "Adapting to market trends and technology to stay ahead in real estate development and investment.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i * 0.1)}
              className="bg-white border border-emerald-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-emerald-800 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 border-t border-gray-400 pt-8 max-w-4xl mx-auto"
        >
          <p className="text-sm text-gray-600 italic">
            “Together, we shape Bangladesh&apos;s urban horizon — uniting vision, purpose, and progress through development.”
          </p>
        </motion.div>
      </section>
    </main>
  );
}