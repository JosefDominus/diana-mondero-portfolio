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
      software: [
        "Canva",
        "CapCut",
        "Meta Business Suite",
        "Microsoft Teams",
        "Asana",
        "Google Workspace",
        "Microsoft Office",
        "Microsoft Outlook",
        "Zoom",
        "AI Assisted Tools",
      ],
    },
    {
      title: "AI Executive Coordinator",
      company: "Diversity in Technology",
      date: "May 1, 2025 – August 31, 2025",
      description:
        "Designed and produced branded visuals and promotional materials using Canva, created and edited instructional videos with original scripts, and generated AI-based merchandise concepts. Managed the organization’s Facebook page, including content planning, posting, and scheduling, and boosted engagement by producing and editing compelling social media Reels with CapCut.",
      software: [
        "Canva",
        "CapCut",
        "Meta Business Suite",
        "Microsoft Teams",
        "Asana",
        "Google Workspace",
        "Microsoft Office",
        "Microsoft Outlook",
        "Zoom",
        "AI Assisted Tools",
      ],
    },
    {
      title: "Virtual Assistant",
      company: "GFI Global Financial Impact",
      date: "May 1, 2025 – August 31, 2025",
      description:
        "Oversaw agent licensing and onboarding to ensure compliance with contracting requirements. Managed documentation, records, and licensing processes to streamline onboarding. Sent welcome emails, maintained communication with new agents, and handled Excel and administrative tasks. Also supported marketing efforts by creating event flyers.",
      software: [
        "Canva",
        "Gmail",
        "WhatsApp",
        "Telegram",
        "Notion",
        "Calendly",
        "Microsoft Excel",
        "Zoom",
        "AI Assisted Tools",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-12 sm:py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-12 sm:mb-16 text-center break-words max-w-full"
      >
        My Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: index * 0.2 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 30px rgba(255, 200, 0, 0.8), 0 0 40px rgba(255, 180, 0, 0.6)",
              transition: { duration: 0.3 },
            }}
            className="w-full"
          >
            <Card
              className="relative flex flex-col h-full overflow-hidden shadow-lg border-none bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black"
              style={{
                boxShadow:
                  "0 0 10px rgba(255, 200, 0, 0.3), 0 0 15px rgba(255, 180, 0, 0.2)",
              }}
            >
              <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-3 border-b border-black/20 pb-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/30 shadow-md">
                  <Briefcase size={22} className="relative z-10 text-black" />
                </div>
                <div className="text-center sm:text-left">
                  <CardTitle className="text-xl font-semibold text-black">
                    {exp.title}
                  </CardTitle>
                  <p className="text-sm text-black/90">
                    <span className="font-medium">{exp.company}</span> —{" "}
                    {exp.date}
                  </p>
                </div>
              </CardHeader>

              {/* Description */}
              <CardContent className="pt-4 pb-6 flex-1">
                <p className="text-black/90 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>

              {/* Frosted Glass Oval Labels (Fixed Placement) */}
              <div className="px-4 pb-4 flex flex-wrap justify-center gap-2">
                {exp.software.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.05 },
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-1 rounded-full backdrop-blur-md bg-gradient-to-r from-yellow-300/60 via-amber-300/50 to-orange-300/60 border border-yellow-200/40 text-gray-800 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
