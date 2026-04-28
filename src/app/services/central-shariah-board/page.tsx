"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CentralShariahBoardPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <main className="bg-[#f8f7f3] text-[#06213d]">
      {/* ---------- Hero ---------- */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/shariah-banner.jpg"
          alt="Central Shariah Board"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4af37] mb-4"
          >
            Central Shariah Board of SANGi Group
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="max-w-2xl text-gray-200 text-base sm:text-lg mb-6 leading-relaxed"
          >
            Guiding SANGi Group towards ethical prosperity through Shariah-compliant business practices and financial integrity.
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

      {/* ---------- Mission Quote ---------- */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-20 text-center">
        <motion.blockquote
          {...fadeUp()}
          className="border-l-4 border-[#d4af37] pl-6 italic text-xl max-w-4xl mx-auto text-[#06213d]/90"
        >
          “Financial success has no value if it is achieved without ethics and accountability. True growth is blessed when it follows Shariah principles.”
        </motion.blockquote>
      </section>

      {/* ---------- Governance Pillars ---------- */}
      <section className="bg-[#f8f7f3] py-24 px-6 sm:px-10 lg:px-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            <span className="text-gray-500">Principles</span> of Shariah Governance
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The Central Shariah Board acts as the moral compass of SANGi Group, ensuring that our growth remains rooted in Islamic ethics and transparency. 
            Every partnership, investment, and transaction is carefully evaluated to sustain a balance between business prosperity and spiritual responsibility.
          </motion.p>

          {/* <motion.p
            {...fadeUp(0.2)}
            className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Guided by faith, the Board provides continuous advice on financial planning and corporate decision-making. 
            These governance principles make our operations not only lawful but ethical and impactful for our stakeholders.
          </motion.p> */}

          {/* Governance Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              {
                icon: "📜",
                title: "Shariah Advisory & Approval",
                desc: "All business ventures are reviewed under the supervision of our Shariah Scholars before execution.",
              },
              {
                icon: "💼",
                title: "Ethical Financial Review",
                desc: "Regular inspections of financial transactions guarantee that every activity remains Halal and transparent.",
              },
              {
                icon: "📖",
                title: "Islamic Business Guidelines",
                desc: "We operate under clear policies derived from Shariah law to promote fairness and responsibility in commerce.",
              },
              {
                icon: "⚖️",
                title: "Accountability & Transparency",
                desc: "Our decisions and reports are shared openly — reflecting our commitment to honesty and trust in all matters.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.15)}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center text-center relative"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-[#06213d] mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Decorative Hover Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Closing tagline */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-16 border-t border-gray-200 pt-8 max-w-3xl mx-auto"
          >
            <p className="text-sm italic text-gray-600 leading-relaxed">
              “Our governance is our faith in action — ensuring every decision we take is ethically sound and spiritually rewarding.”
            </p>
          </motion.div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-transparent to-[#f8f7f3] pointer-events-none" />
      </section>

      {/* ---------- Consultations & Leadership ---------- */}
      <section className="bg-slate-900 text-white py-24 px-6 sm:px-10 lg:px-20 text-center">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-bold mb-6 text-amber-400"
        >
          Shariah Advisory & Consultation
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Every major decision within the SANGi Group — financial, operational, and strategic — is reviewed in consultation with the Central Shariah Board. We seek guidance and approval before undertaking any initiative, ensuring that our journey is rooted in responsibility and faith.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {["member1", "member2", "member3", "member4"].map((m, i) => (
            <motion.div
              key={m}
              {...fadeUp(i * 0.1)}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={`/images/${m}.jpg`}
                  alt={m}
                  fill
                  className="rounded-full object-cover border border-amber-50 hover:border-2 hover:border-amber-400"
                />
              </div>
              <p className="font-semibold text-lg text-amber-400">
                Scholar Name
              </p>
              <p className="text-gray-200 text-sm">Senior Adviser, CSB</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Publications Section ---------- */}
      <section className="bg-white py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#06213d]"
        >
          Policy Guidelines & Annual Reports
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Our Shariah Board regularly publishes guidelines and reports highlighting approved business activities, compliance findings, and ethical recommendations for our financial structures.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Shariah Financial Guidelines 2023",
            "SANGi Annual Compliance Report",
            "Ethical Investment Framework",
          ].map((item, i) => (
            <motion.div
              key={item}
              {...fadeUp(i * 0.1)}
              className="bg-[#f8f7f3] border-l-4 border-[#d4af37] p-6 rounded-r-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#06213d]">
                {item}
              </h3>
              <p className="text-sm text-gray-600">
                Official publications guided and approved by the Central Shariah Board to align our business practices with Islamic values.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Transparency Section ---------- */}
      <section className="relative bg-[#06213d] text-white py-28 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Section Title */}
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#d4af37]"
          >
            Transparency &amp; Compliance in Action
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Every financial decision and transaction within SANGi Group is reviewed and approved by our Central Shariah Board. Through continuous oversight and evaluation, we ensure that our growth remains aligned with ethical and Shariah-compliant principles.
          </motion.p>

          {/* 3 Columns of Highlights */}
          <motion.div
            {...fadeUp(0.2)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left mt-10 max-w-6xl mx-auto"
          >
            {[
              {
                icon: "/approval.png",
                title: "Decision Oversight",
                desc: "Each investment, contract, and financial process passes through Shariah evaluation and approval before implementation.",
              },
              {
                icon: "/audit.png",
                title: "Periodic Audits",
                desc: "Regular review sessions with our Shariah Scholars ensure that the Group operates transparently and lawfully in every domain.",
              },
              {
                icon: "/ethics-gold.png",
                title: "Faith-Based Governance",
                desc: "Our ethics framework is rooted in Islamic values, ensuring our business and financial activities carry the approval of faith and integrity.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(i * 0.1)}
                className="group relative grid place-items-center bg-[#0b1e37] border border-[#1f3b59] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-5">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain group-hover:scale-110 group-hover:opacity-100 transition-transform duration-500"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="font-semibold text-lg text-[#d4af37] mb-2 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover Glow */}
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none" /> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Motto / Tagline */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-20 border-t border-gray-700 pt-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-400 italic leading-relaxed">
              “Transparency and faith-based compliance are the foundation of SANGi Group&apos;s success — guided by our Shariah Board to build growth with integrity.”
            </p>
          </motion.div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041326] via-transparent to-transparent pointer-events-none" />
      </section>

      {/* ---------- CTA Section (Conclusion) ---------- */}
      <section className="relative bg-white text-[#06213d] py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            <span className="text-gray-500">Faith</span> in Business, <span className="text-gray-500">Trust</span> in Decisions
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            The Central Shariah Board serves as the heart of SANGi Group&apos;s ethical framework. Their guidance and approval ensure that our business and financial endeavors are carried out with integrity, purpose, and complete Shariah compliance. Every decision we make is a reflection of faith inspired by trust and accountability.
          </motion.p>

          {/* Three closing highlights */}
          <motion.div
            {...fadeUp(0.2)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left"
          >
            {[
              {
                title: "Guided Growth",
                text: "All business initiatives are reviewed and endorsed by the Shariah Board to ensure Halal profitability and ethical operations.",
                icon: "/guidance.png",
              },
              {
                title: "Ethical Integrity",
                text: "Our partnerships, transactions, and investments uphold transparency and justice to maintain trust with our stakeholders.",
                icon: "/justice.png",
              },
              {
                title: "Shared Accountability",
                text: "We believe prosperity is sustainable only when built upon truth, spiritual values, and collective responsibility.",
                icon: "/shared-accountability.png",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.15)}
                className="group grid place-items-center relative bg-[#06213d] text-white rounded-2xl border border-[#d4af37]/40 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative w-30 h-30 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#d4af37] mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-center text-gray-200 leading-relaxed">
                  {item.text}
                </p>
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" /> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Closing line */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-20 border-t border-gray-200 pt-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-sm italic text-gray-600 leading-relaxed">
              “At SANGi Group, every success is rooted in faith — guided by our Shariah Board, we grow with purpose, integrity, and responsibility.”
            </p>
          </motion.div>
        </div>

        {/* Subtle backdrop accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-transparent to-white pointer-events-none" />
      </section>
    </main>
  );
}