"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:info@sangibd.com
      ?subject=${encodeURIComponent(form.subject)}
      &body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="bg-white text-gray-900">
      {/* ---------- Header ---------- */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 text-center bg-gray-50">
        <motion.h1
          {...fadeUp()}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Contact <span className="text-gray-500">Us</span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.1)}
          className="max-w-2xl mx-auto text-gray-600 leading-relaxed"
        >
          We welcome your inquiries. Get in touch with <span className="font-bold">SAN Group of Industries</span> for questions, collaborations or anything you&apos;d like to know about us. 
        </motion.p>
      </section>

      {/* ---------- Contact Info Cards ---------- */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="text-amber-400" size={28} />,
              title: "Our Address",
              text: "Shiraj Market,Ranavola, 10no Sector,Turag,Dhaka-1230, Bangladesh",
            },
            {
              icon: <Mail className="text-amber-400" size={28} />,
              title: "Email Us",
              text: "info@sangibd.com / sangitrade25@gmail.com",
            },
            {
              icon: <Phone className="text-amber-400" size={28} />,
              title: "Call Us",
              text: "+880 1730-718300 / +8809614122012",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.1)}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Map + Form ---------- */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div {...fadeUp()} className="w-full h-[420px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110967.56061472098!2d90.23177249726565!3d23.8808029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c500752e1991%3A0xe04b24d1b77fae96!2sShiraj%20market%2C%20Ranavola%2C%2010no%20Sector%2C%20Turag%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1765989538237!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeUp(0.1)} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-4">
                <input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />

                <input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />

                <Button
                    onClick={handleSubmit}
                    className="bg-amber-400 text-black hover:bg-amber-500 font-semibold"
                >
                    Send Message
                </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}