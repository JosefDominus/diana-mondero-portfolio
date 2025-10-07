"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50">
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)", // golden glow
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-300 bg-yellow-100"
        >
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 blur-2xl opacity-30"
          />

          <Image
            src="/heropicture-removebg-preview.png"
            alt="Josef Valdes Portrait"
            fill
            className="object-contain relative z-10"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Hi! I’m{" "}
          <span className="font-semibold text-amber-600">
            Diana Rose Elizabeth S. Mondero
          </span>
          , an aspiring{" "}
          <span className="font-semibold text-amber-600">
            Virtual Assistant
          </span>{" "}
         and a dedicated mother. I’m an undergraduate student in Marketing Management,
          pursuing a career that allows me to support my family while growing professionally.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
         I bring strong skills in multitasking, time management, and communication, along with hands-on experience
          in administrative support and content creation. I efficiently manage emails, scheduling,
          and documentation, and create professional visual designs and videos using Canva and other tools.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
        Known for being reliable, organized, and results-driven, I take pride in delivering high-quality
         work that helps entrepreneurs streamline operations and maintain consistency in their business.
        </p>
      </motion.div>
    </section>
  );
}
