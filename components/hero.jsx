"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50 overflow-hidden">

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left z-10 max-w-2xl mt-10 md:mt-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight mb-6">
          Diana Rose Elizabeth S. Mondero
        </h1>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
         Your Virtual Assistant
        </h3>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          A reliable and detail-oriented Virtual Assistant from the Philippines.
           I help businesses stay organized and grow by handling admin tasks, content creation, Canva designs, and social media management.
           I’m proactive, efficient, and committed to delivering results that make a difference.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 sm:mt-10">
          <Button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200">
            View My Work
          </Button>
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg border-yellow-400 text-yellow-600 hover:bg-yellow-100 hover:border-amber-500 transition-colors"
          >
            Contact Me
          </Button>
        </div>
      </motion.div>

      {/* Photo Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center w-full md:w-1/2 max-w-3xl"
      >
        {/* Animated Blob Background */}
        <motion.div
          className="absolute w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] md:w-[45vw] md:h-[45vw] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            borderRadius: [
              "50% 50% 40% 60% / 60% 40% 60% 40%",
              "60% 40% 50% 50% / 50% 60% 40% 60%",
              "50% 50% 40% 60% / 60% 40% 60% 40%",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />

        {/* Main Image */}
        <div className="relative w-[80vw] h-[80vh] sm:w-[65vw] sm:h-[70vh] md:w-[40vw] md:h-[80vh] z-10 flex items-end justify-center">
          <Image
            src="/heroimage1.png"
            alt="Diana Rose Mondero"
            fill
            className="object-contain drop-shadow-[0_10px_25px_rgba(251,191,36,0.4)]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
