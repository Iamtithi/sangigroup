"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

type PosterItem = string | { image: string; caption?: React.ReactNode };
type PosterCarouselProps = { posters: PosterItem[] };

export default function PosterCarousel({ posters }: PosterCarouselProps) {
  const [curr, setCurr] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fade, setFade] = useState(false);

  // Keep same interval & timing as before
  useEffect(() => {
    if (posters.length <= 1) return;

    const timer = setInterval(() => {
      setPrev(curr);
      const next = (curr + 1) % posters.length;
      setFade(true);

      // halfway through fade → update image index
      setTimeout(() => {
        setCurr(next);
      }, 350);

      // end fade
      setTimeout(() => setFade(false), 700);
    }, 4000); // same as before

    return () => clearInterval(timer);
  }, [curr, posters.length]);

  if (!posters || posters.length === 0) return null;

  const currPoster =
    typeof posters[curr] === "string"
      ? { image: posters[curr] as string }
      : (posters[curr] as { image: string; caption?: React.ReactNode });

  const prevPoster =
    prev !== null
      ? typeof posters[prev] === "string"
        ? { image: posters[prev] as string }
        : (posters[prev] as { image: string; caption?: React.ReactNode })
      : null;

  return (
    <section className="w-full flex justify-center m-0 p-0">
      <div className="relative overflow-hidden shadow-lg rounded-4xl mx-[10px] md:mx-[15px] lg:mx-[20px] w-full max-w-none h-[340px] xs:h-[420px] sm:h-[530px] md:h-[670px] lg:h-[800px]">
        {/* -------- Previous Image for crossfade ---------- */}
        {prevPoster && prevPoster.image && (
          <Image
            key={`prev-${prev}`}
            src={prevPoster.image}
            alt={`Poster ${prev ?? 0}`}
            fill
            sizes="100vw"
            className={`object-cover object-center absolute inset-0 transition-opacity duration-700 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* -------- Current Image ---------- */}
        <Image
          key={`curr-${curr}`}
          src={currPoster.image}
          alt={`Poster ${curr + 1}`}
          fill
          sizes="100vw"
          priority
          className={`object-cover object-center rounded-2xl absolute inset-0 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-100"
          }`}
        />

        {/* -------- Overlay ---------- */}
        <div className="absolute inset-0 bg-black/35 rounded-2xl pointer-events-none" />

        {/* -------- Caption (mid-upper position) ---------- */}
        <div
          className={`${poppins.className} absolute left-6 sm:left-12 top-1/3 transform -translate-y-1/4 text-white drop-shadow-lg z-20`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={curr}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="max-w-[70%]"
            >
              {currPoster.caption}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* -------- Dots ---------- */}
        {posters.length > 1 && (
          <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2 z-30">
            {posters.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurr(i)}
                aria-label={`Poster ${i + 1}`}
                className={`transition-all duration-300 rounded-lg ${
                  curr === i
                    ? "w-10 h-2 bg-amber-300"
                    : "w-4 h-2 bg-amber-100 opacity-70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}