"use client";
import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MessageFromCeo() {
  return (
    <section className="w-full text-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Message from <span className="text-gray-500">Founder & CEO</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A few words from the Founder &amp; CEO highlighting our vision,
            mission, and commitment to excellence.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 p-8 sm:p-12 flex flex-col justify-center text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                “A Vision Built on Integrity and Innovation”
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                &quot;At SANGi Group, our journey has always been guided by a simple principle: excellence in every endeavor. From automotive solutions and international trade to real estate, safety footwear, protein & agro products and our social development initiatives, we strive to deliver quality, reliability and value to our customers, partners, and communities.<br/><br/>
                Our vision is to build a diversified group that leads with innovation, ethical practices and sustainable growth. Our mission is to provide products and services that meet the highest standards, while creating a positive impact on society and supporting the communities we serve.<br/><br/>
                Through the Central Shariah Board, we ensure that all operations comply with Islamic Shariah principles, reinforcing transparency, integrity and trust in every business activity. At the same time, our philanthropic initiatives including the SAN Global Care Foundation, reflect our commitment to education, healthcare and social welfare for underprivileged communities.
              </p>
              {/* <Link href="/about/message-from-ceo">
                <Button
                  variant="outline"
                  className="text-blue-700 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-200"
                >
                  Read Full Message
                </Button>
              </Link> */}

              
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full lg:w-[40%] flex items-center justify-center p-4 lg:p-6"
            >
              <div className="relative w-full aspect-[10/11] rounded-2xl shadow-md overflow-hidden">
                <Image
                  src="/ceo.png"
                  alt="Founder & CEO"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
          <div className="px-12 pb-6">
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base text-center lg:text-left">
              <p>We are dedicated to continuous improvement, fostering innovation and nurturing long-term relationships built on trust. As we grow, our focus remains on creating sustainable value, empowering individuals and maintaining our reputation as a responsible and forward-looking business group.&quot;</p>
            </div>
            <div className="mt-10">
              <p className="font-semibold text-gray-900">Md. Sajedul Islam</p>
              <p className="text-gray-600 text-sm">
                Founder & CEO, Sangi Group of Industries
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}