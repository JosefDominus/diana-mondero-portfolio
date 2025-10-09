"use client";

import { motion } from "framer-motion";
import { Laptop, ClipboardList, MessageSquare, Palette } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      icon: <ClipboardList className="text-orange-600 w-6 h-6" />,
      title: "Administrative Support",
      skills: [
        { name: "Email Management", level: 90 },
        { name: "Calendar Scheduling", level: 90 },
        { name: "Data Entry", level: 80 },
        { name: "File Organization", level: 85 },
        { name: "Appointment Setting", level: 85 },
      ],
    },
    {
      icon: <MessageSquare className="text-orange-600 w-6 h-6" />,
      title: "Communication & Customer Support",
      skills: [
        { name: "Professional Email Writing", level: 90 },
        { name: "Live Chat Support", level: 90 },
        { name: "CRM Management", level: 85 },
        { name: "Customer Follow-ups", level: 85 },
      ],
    },
    {
      icon: <Palette className="text-orange-600 w-6 h-6" />,
      title: "Creative & Social Media",
      skills: [
        { name: "Canva Graphic Design", level: 85 },
        { name: "Content Creation", level: 85 },
        { name: "Video Editing (CapCut)", level: 80 },
        { name: "Social Media Management", level: 90 },
      ],
    },
    {
      icon: <Laptop className="text-orange-600 w-6 h-6" />,
      title: "Technical & Productivity Tools",
      skills: [
        { name: "Google Workspace", level: 80 },
        { name: "Microsoft Office", level: 80 },
        { name: "Notion / Asana", level: 90 },
        { name: "AI Tools (ChatGPT, Notion AI)", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-orange-50 via-yellow-100 to-amber-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-16 text-center"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-none hover:shadow-amber-400/40 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black">
              <CardHeader className="flex items-center gap-3 border-b border-black/20 pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/40 shadow-md">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-black">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4 space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="w-full">
                    <div className="flex justify-between text-sm font-medium text-black/90 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
