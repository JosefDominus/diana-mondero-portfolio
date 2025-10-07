"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-16 py-12 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50 overflow-hidden">

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left z-10 max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight mb-6">
          Diana Rose Elizabeth S. Mondero
        </h1>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
          <Button className="px-8 py-3 text-base sm:text-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200">
            View My Work
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 text-base sm:text-lg border-yellow-400 text-yellow-600 hover:bg-yellow-100 hover:border-amber-500 transition-colors"
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
        className="relative flex items-center justify-center w-full md:w-1/2 max-w-2xl"
      >
        {/* Animated Blob Background */}
        <motion.div
          className="absolute w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[38vw] md:h-[38vw] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
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
