"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Business Administration – Major in Marketing Management",
      school: "Manila Business College",
      date: "2024 – 2025 (Undergraduate)",
      description:
        "Undergraduate in Business Administration with a focus on Marketing, equipped with skills in market research, branding, and strategic marketing to create impactful business solutions.",
    },
    {
      degree: "Senior High School Diploma – ABM Strand",
      school: "Philippine College of Advance Arts and Technology",
      date: "2022 – 2024",
      description:
        "Graduated from the ABM strand with a strong foundation in business, management, and entrepreneurship. Equipped with skills in leadership, critical thinking, and practical business knowledge, ready to contribute and grow in real-world business settings.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-12 sm:py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-12 sm:mb-16 text-center break-words max-w-full"
      >
        Educational Background
      </motion.h2>

      {/* Education Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 w-full max-w-5xl">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(255, 200, 0, 0.8), 0 0 40px rgba(255, 180, 0, 0.6)",
              transition: { duration: 0.3 },
            }}
            className="w-full md:w-[48%] lg:w-[45%]"
          >
            <Card
              className="relative flex flex-col h-full overflow-hidden shadow-lg border-none bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black"
              style={{
                boxShadow:
                  "0 0 10px rgba(255, 200, 0, 0.3), 0 0 15px rgba(255, 180, 0, 0.2)",
              }}
            >
              <CardHeader className="flex flex-col items-center gap-3 pb-4 border-b border-black/20">
                {/* Icon with pulsing glow */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/30 shadow-md overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 blur-xl animate-pulse"></span>
                  <GraduationCap size={24} className="relative z-10 text-black" />
                </div>

                {/* Text */}
                <div className="text-center">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-black">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-black/90">
                    <span className="font-medium">{edu.school}</span> — {edu.date}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-4 flex-1">
                <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
