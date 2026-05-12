"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SanMotorsPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  const cars = [
    {
      name: "Toyota Corolla Cross",
      slug: "toyota-corolla-cross",
      image: "/Toyota-Crolla-Cross.jpg.jpeg",
      desc: "Stylish compact SUV crossover combining hybrid efficiency with modern comfort and Toyota Safety Sense.",
    },
    {
      name: "Honda Insight",
      slug: "honda-insight",
      image: "/Honda-Insight.jpg.jpeg",
      desc: "Sleek hybrid sedan delivering outstanding fuel economy and a refined driving experience.",
    },
    {
      name: "Toyota Noah Hybrid",
      slug: "toyota-noah-hybrid",
      image: "/Toyota-Noah-Hybrid.jpg.jpeg",
      desc: "Spacious hybrid minivan with dual sliding doors and excellent fuel efficiency for families.",
    },
    {
      name: "Toyota Fielder Hybrid",
      slug: "toyota-fielder-hybrid",
      image: "/Toyota-fielder-hybrid.jpg.jpeg",
      desc: "Practical hybrid station wagon with generous boot space and low running costs for daily commuting.",
    },
    {
      name: "Toyota Voxy X",
      slug: "toyota-voxy-x",
      image: "/Toyota-Voxy-X.jpg.jpeg",
      desc: "Premium hybrid MPV with bold styling and advanced safety features for modern families.",
    },
    {
      name: "Toyota Yaris Cross",
      slug: "toyota-yaris-cross",
      image: "/Toyota-Yaris-Cross.jpg.jpeg",
      desc: "Reliable compact sedan with proven VVT-i engine, comfortable interior, and low maintenance costs.",
    },
    {
      name: "Hiace Super GL",
      slug: "hiace-super-gl",
      image: "/Hiace Super GL.jpeg",
      desc: "Premium commercial van with upgraded interior, alloy wheels, and powerful turbo diesel engine.",
    },
    {
      name: "Hiace TRH200",
      slug: "hiace-trh200",
      image: "/car8.png",
      desc: "Workhorse passenger van seating up to 15, built for durability and high-capacity transport.",
    },
    {
      name: "Hyundai H100",
      slug: "hyundai-h100",
      image: "/car9.png",
      desc: "Compact yet capable commercial pickup suited for delivery and transport efficiency.",
    },
    {
      name: "Mazda Bongo",
      slug: "mazda-bongo",
      image: "/car10.png",
      desc: "Trusted commercial van ensuring performance, space, and cost-effectiveness for business users.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* ---------- Hero Banner ---------- */}
      <section className="relative h-[420px] sm:h-[550px] lg:h-[680px] overflow-hidden">
        <Image
          src="/san-motors-banner.png"
          alt="SAN Motor's Limited"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            {...fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-white"
          >
            <span className="text-indigo-400">SAN</span> Motor&apos;s Limited
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="max-w-2xl text-gray-100 text-base sm:text-lg mb-6"
          >
            Driving Bangladesh forward with quality, reliability, and trust in
            every vehicle we deliver.
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

      {/* ---------- Company Overview ---------- */}
      <section className="max-w-7xl mx-auto py-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div {...fadeUp()} className="w-full lg:w-1/2">
            <div className="relative w-full h-[350px] sm:h-[450px]">
              <Image
                src="/car_import.png"
                alt="SAN Motors Factory"
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp(0.1)} className="w-full lg:w-1/2 text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
              About Us
            </h2>
            <p className="leading-relaxed mb-4">
              Established in 2012, SAN Motors Limited is a trusted importer of high-quality vehicles from aboard mainly Japan and China. Since our inception, we have focused on delivering reliable, affordable and well-inspected cars that meet the needs of our Clients with modern systems. Our commitment to transparency, customer satisfaction and consistent quality has helped us build long lasting relationships with Clients across the market.
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
               Mission & Vision
            </h2>
            <p className="leading-relaxed mb-4">
              At San Motors Ltd, our vision is to establish ourselves as a trusted leader in Bangladesh’s imported vehicle market by maintaining the highest standards of quality, reliability, and customer service. Our mission is to deliver carefully selected vehicles that meet our clients’ needs, ensuring safety, performance, and value—while providing a smooth, transparent, and professional buying experience.
            </p>
             
            
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="stock" className="bg-gray-300 py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold text-blue-900/85 mb-4"
          >
            Our Current <span className="text-indigo-950">Stock</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-800 max-w-2xl mx-auto"
          >
            Browse our latest inventory of commercial and private vehicles,
            carefully curated to deliver exceptional quality and reliability.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cars.map((car, i) => (
            <Link key={car.name} href={`/services/san-motors/${car.slug}`} target="_blank" rel="noreferrer">
              <motion.div
                {...fadeUp(i * 0.1)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-900 cursor-pointer"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden shadow-lg mx-auto w-full h-[420px]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-500 delay-150 
                       group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Info Section Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/10 backdrop-blur-sm p-5 shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">
                    {car.name}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {car.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Core Capabilities ---------- */}
      {/* <section className="bg-gray-100 py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-semibold">
            Our Strengths
          </motion.h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Setting industry benchmarks through quality, trust, and advanced
            mobility solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: "🚛",
              title: "Commercial Vehicles",
              desc: "Reliable trucks, vans, and carriers designed to power businesses across Bangladesh.",
            },
            {
              icon: "🚗",
              title: "Private Cars",
              desc: "Stylish, efficient vehicles customized to deliver comfort and convenience.",
            },
            {
              icon: "🔧",
              title: "After-Sales Service",
              desc: "Dedicated support and maintenance ensuring long-term reliability.",
            },
            {
              icon: "🏆",
              title: "Quality Assurance",
              desc: "Each import undergoes stringent quality checks for guaranteed satisfaction.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.1)}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="relative bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900"
          >
            Our <span className="text-gray-500">Strengths</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Strength built on trust, precision, and excellence — defining every step
            we take toward automotive innovation.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Commercial Vehicles",
              desc: "Reliable trucks and carriers built to power industries with unmatched durability and strength across every road.",
            },
            {
              title: "Private Cars",
              desc: "Elegant designs and top-tier features engineered to provide utmost comfort and refined driving experiences.",
            },
            {
              title: "After-Sales Service",
              desc: "Dedicated maintenance teams ensuring smooth operation, genuine parts supply, and long-term vehicle reliability.",
            },
            {
              title: "Quality Assurance",
              desc: "Strict inspection processes and performance testing guarantee that every vehicle meets international standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.15)}
              className="relative bg-purple-950/5 border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-950 to-purple-800 transition-transform duration-500 transform group-hover:scale-y-110" />

              {/* Card content */}
              <div className="p-8 pl-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Subtle accent hover underline effect */}
                <div className="flex items-center gap-3 text-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-purple-950 rounded-full animate-pulse" />
                  <span className="text-sm font-medium tracking-wide">
                    Excellence in action
                  </span>
                </div>
              </div>

              {/* Hover overlay glow */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-amber-400/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Technology & Sustainability ---------- */}
      <section className="relative bg-[#0b1220] text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-semibold mb-6 text-indigo-500"
          >
            <span className="text-indigo-300">Trusted</span> Global Partnerships
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            As an authorized importer and dealer, SAN Motor&apos;s Limited proudly brings
            a curated selection of international automotive brands directly to
            Bangladesh — ensuring genuine quality, authenticity, and reliability in
            every delivery.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-36 text-left">
            {[
              {
                image: "/photo1.png",
                title: "Authorized Import Network",
                text: "Partnered with globally recognized manufacturers to ensure certified and high-quality vehicle imports.",
                offset: "lg:mt-12",
              },
              {
                image: "/photo2.png",
                title: "Transparent Sourcing",
                text: "Every vehicle is procured through proper channels, with verified documents and full import compliance.",
                offset: "lg:-mt-6"
              },
              {
                image: "/photo3.png",
                title: "End-to-End Delivery Support",
                text: "From port to showroom, our logistics team ensures smooth handling, inspection, and secure transportation.",
                offset: "lg:mt-8"
              },
            ].map((item, i) => (
              // <motion.div
              //   key={i}
              //   {...fadeUp(i * 0.1)}
              //   className="bg-gray-800 rounded-xl p-6 shadow-sm hover:bg-gray-700/80 transition-all duration-300"
              // >

              //   <div className="relative overflow-hidden shadow-lg mx-auto w-full h-[420px]">
              //     <Image
              //       src={item.image}
              //       alt={item.title}
              //       fill
              //       className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-500 delay-150 
              //        group-hover:scale-110"
              //     />
              //     <div className="absolute inset-0 bg-black/30"></div>
              //   </div>

              //   <h3 className="font-semibold text-lg mb-2 text-amber-400">
              //     {item.title}
              //   </h3>
              //   <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              // </motion.div>
              // <motion.div
              //   key={item.title}
              //   {...fadeUp(i * 0.1)}
              //   className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-900"
              // >
              //   <div className="relative overflow-hidden shadow-lg mx-auto w-full h-[420px]">
              //     <Image
              //       src={item.image}
              //       alt={item.title}
              //       fill
              //       className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-500 delay-150 
              //         group-hover:scale-110"
              //     />
              //     <div className="absolute inset-0 bg-black/30"></div>
              //   </div>

              //   <div className="absolute bottom-0 left-0 right-0 bg-gray-900/10 backdrop-blur-sm p-5 shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
              //     <h3 className="text-lg font-semibold text-amber-400 mb-2">
              //       {item.title}
              //     </h3>
              //     <p className="text-sm text-gray-200 leading-relaxed">
              //       {item.text}
              //     </p>
              //   </div>
              // </motion.div>
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.15)}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900 w-full sm:max-w-sm h-[580px] mx-auto ${item.offset}`}
              >
                {/* Car Image */}
                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 transition-opacity duration-300 group-hover:opacity-90" /> */}
                </div>

                {/* Card Text Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                  <h3 className="text-lg font-semibold text-purple-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{item.text}</p>
                </div>

                {/* Hover Border Highlight */}
                {/* <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-amber-400/30 transition-all duration-500"></div> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-gray-50">
        <motion.h2
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900"
        >
          Driving <span className="text-gray-500">Excellence</span> Forward
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          At SAN Motor&apos;s Limited, we remain committed to providing quality vehicles,
          trustworthy service, and long-term reliability. Our journey is defined by
          satisfied clients, strong partnerships, and a promise to deliver only the
          best in every drive.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-4xl mx-auto text-gray-700"
        >
          <div className="bg-slate-900 p-6 rounded-xl shadow-sm w-full sm:w-1/3 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-lg text-purple-500 mb-2">
              Our Vision
            </h3>
            <p className="text-sm leading-relaxed text-gray-50">
              To be Bangladesh&apos;s most trusted automotive partner, enhancing mobility
              through integrity and excellence.
            </p>
          </div>

          <div className="bg-slate-900/95 p-6 rounded-xl shadow-sm w-full sm:w-1/3 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-lg text-purple-500 mb-2">
              Our Promise
            </h3>
            <p className="text-sm leading-relaxed text-gray-100">
              Delivering authentic imports, exceptional service quality, and
              consistency that drives long-term trust and satisfaction.
            </p>
          </div>

          <div className="relative bg-slate-900/90 p-6 rounded-xl shadow-sm w-full sm:w-1/3 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-lg text-purple-500 mb-2">
              Our Commitment
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              To continue leading with responsibility, expanding our reach while
              maintaining uncompromised values and customer focus.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}



// // app/services/san-motors/page.tsx
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function SanMotorsPage() {
//   // Re-usable animation pattern
//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, delay },
//     viewport: { once: true, amount: 0.3 },
//   });

//   return (
//     <main className="bg-white text-gray-900">
//       {/* ---------- Hero Banner ---------- */}
//       <section className="relative h-[420px] sm:h-[550px] lg:h-[680px] overflow-hidden">
//         <Image
//           src="/san-motors-banner.png"
//           alt="SAN Motor's Limited"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
//           <motion.h1
//             {...fadeUp()}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
//           >
//             SAN Motor's Limited
//           </motion.h1>
//           <motion.p
//             {...fadeUp(0.2)}
//             className="max-w-2xl text-gray-200 text-base sm:text-lg mb-6"
//           >
//             Engineering tomorrow's mobility with innovation, excellence, and
//             responsibility.
//           </motion.p>
//           <motion.div {...fadeUp(0.3)}>
//             <Link href="/contact">
//               <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
//                 Get in Touch
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Company Overview ---------- */}
//       <section className="max-w-7xl mx-auto py-20 px-6 sm:px-10 lg:px-20">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image */}
//           <motion.div {...fadeUp()} className="w-full lg:w-1/2">
//             <div className="relative w-full h-[350px] sm:h-[450px]">
//               <Image
//                 src="/images/car-factory.jpg"
//                 alt="SAN Motors Factory"
//                 fill
//                 className="object-cover rounded-xl shadow-md"
//               />
//             </div>
//           </motion.div>

//           {/* Text */}
//           <motion.div {...fadeUp(0.1)} className="w-full lg:w-1/2 text-gray-700">
//             <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
//               Pioneering Automotive Excellence
//             </h2>
//             <p className="leading-relaxed mb-4">
//               SAN Motor's Limited, a flagship of SANGi Group, focuses on building a
//               new era of efficient, reliable, and sustainable vehicles. Our
//               manufacturing process combines precision engineering with
//               eco-friendly innovation.
//             </p>
//             <p className="leading-relaxed">
//               From concept design to production, every vehicle embodies our
//               passion for quality and the nation's ambition for industrial
//               advancement.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Core Capabilities ---------- */}
//       <section className="bg-gray-100 py-20 px-6 sm:px-10 lg:px-20">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-semibold">
//             Core Capabilities
//           </motion.h2>
//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             Excellence across R&amp;D, manufacturing, and sustainable
//             automotive design.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {[
//             {
//               icon: "⚙️",
//               title: "Engineering",
//               desc: "Advanced mechanical and electrical engineering tailored to modern mobility.",
//             },
//             {
//               icon: "🧠",
//               title: "R&D Innovation",
//               desc: "A dedicated research division exploring future vehicle technologies.",
//             },
//             {
//               icon: "🌿",
//               title: "Sustainability",
//               desc: "Green manufacturing processes reducing waste and emissions.",
//             },
//             {
//               icon: "🚗",
//               title: "Product Range",
//               desc: "Passenger vehicles, utility carriers, and customized mobility solutions.",
//             },
//           ].map((c, i) => (
//             <motion.div
//               key={i}
//               {...fadeUp(i * 0.1)}
//               className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
//             >
//               <div className="text-3xl mb-3">{c.icon}</div>
//               <h3 className="font-semibold text-lg mb-2 text-blue-700">
//                 {c.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{c.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Innovation + Sustainability ---------- */}
//       <section className="relative bg-[#0b1220] text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <motion.h2
//             {...fadeUp()}
//             className="text-3xl sm:text-4xl font-semibold mb-6"
//           >
//             Innovation Driven. Responsibly Built.
//           </motion.h2>
//           <motion.p
//             {...fadeUp(0.2)}
//             className="text-gray-300 max-w-3xl mx-auto mb-12"
//           >
//             As Bangladesh's automotive pioneer, SAN Motors ensures that progress
//             and sustainability move together. Our approach integrates renewable
//             technologies and circular economy principles into production.
//           </motion.p>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
//             {[
//               { title: "Electric Mobility", text: "Developing EV prototypes for eco-friendly transportation." },
//               { title: "Smart Manufacturing", text: "IoT-enabled processes improving efficiency and safety." },
//               { title: "Carbon Efficiency", text: "Commitment to reducing emissions across our supply chain." },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 {...fadeUp(i * 0.1)}
//                 className="bg-gray-800 rounded-xl p-6 shadow-sm hover:bg-gray-700 transition"
//               >
//                 <h3 className="font-semibold text-lg mb-2 text-amber-400">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//       </section>

//       {/* ---------- CTA ---------- */}
//       <section className="py-20 text-center bg-white">
//         <motion.h2
//           {...fadeUp()}
//           className="text-3xl sm:text-4xl font-semibold mb-4"
//         >
//           Partner with SAN Motors Limited
//         </motion.h2>
//         <motion.p
//           {...fadeUp(0.1)}
//           className="text-gray-600 mb-6 max-w-2xl mx-auto"
//         >
//           Join us in driving innovation, sustainability, and growth in
//           Bangladesh's automotive future.
//         </motion.p>
//         <motion.div {...fadeUp(0.2)}>
//           <Link href="/contact">
//             <Button className="bg-amber-400 text-black hover:bg-amber-500 font-semibold">
//               Contact Us
//             </Button>
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// }