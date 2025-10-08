"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Image Side */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
          }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-300 bg-yellow-100"
        >
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
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
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="text-center md:text-left max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
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

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
          I bring strong skills in multitasking, time management, and communication, along with hands-on experience
          in administrative support and content creation. I efficiently manage emails, scheduling,
          and documentation, and create professional visual designs and videos using Canva and other tools.
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Known for being reliable, organized, and results-driven, I take pride in delivering high-quality
          work that helps entrepreneurs streamline operations and maintain consistency in their business.
        </p>
      </motion.div>
    </section>
  );
}
