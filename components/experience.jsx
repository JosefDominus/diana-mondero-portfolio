"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Admission Counsellor",
      company: "Diversity in Technology",
      date: "February 10, 2024 – April 30, 2025",
      description:
        "Reviewed applications, guided students through enrollment, and maintained accurate records. Provided professional support via chat and email, managed documentation, handled internal communications, and performed administrative tasks to ensure efficient, smooth admissions operations.",
    },
    {
      title: "AI Executive Coordinator | Virtual Assistant",
      company: "GFI Global Financial Impact",
      date: "May 1, 2025 – August 31, 2025",
      description:
        "Designed and produced branded visuals and promotional materials using Canva, created and edited instructional videos with original scripts, and generated AI-based merchandise concepts. Managed the organization’s Facebook page, including content planning, posting, and scheduling, and boosted engagement by producing and editing compelling social media Reels with CapCut.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-12 text-center"
      >
        My Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="relative flex flex-col h-full overflow-hidden shadow-lg border-none hover:shadow-amber-400/40 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black">
              <CardHeader className="flex items-center gap-3 border-b border-black/20 pb-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/30 shadow-md">
                  {/* Pulsing Glow */}
                  <span className="absolute inset-0 rounded-full bg-white/40 blur-xl animate-pulse"></span>
                  {/* Icon */}
                  <Briefcase size={22} className="relative z-10 text-black" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-black">
                    {exp.title}
                  </CardTitle>
                  <p className="text-sm text-black/90">
                    <span className="font-medium">{exp.company}</span> — {exp.date}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-4 flex-1">
                <p className="text-black/90 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
