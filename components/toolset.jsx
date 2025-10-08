"use client";

import { motion } from "framer-motion";

export function Toolset() {
  const toolSections = [
    {
      title: "Communication Apps",
      tools: [
        { name: "Telegram", img: "/logos/telegram.png" },
        { name: "Whatsapp", img: "/logos/whatsapp.png" },
        { name: "Zoom", img: "/logos/zoom.png" },
        { name: "Microsoft Teams", img: "/logos/teams.png" },
        { name: "Google Meet", img: "/logos/gmeet.png" },
        { name: "Gmail", img: "/logos/gmail.png" },
        { name: "Outlook", img: "/logos/outlook.png" },
      ],
    },
    {
      title: "Productivity / Office Apps",
      tools: [
        { name: "Microsoft Word", img: "/logos/msword.png" },
        { name: "Microsoft Excel", img: "/logos/excel.png" },
        { name: "Google Docs", img: "/logos/googledocs.png" },
        { name: "Google Sheets", img: "/logos/googlesheets.png" },
        { name: "Google Forms", img: "/logos/googleforms.png" },
      ],
    },
    {
      title: "Social Media Management",
      tools: [
        { name: "Facebook", img: "/logos/facebook.png" },
        { name: "Meta Business Suite", img: "/logos/meta.png" },
        { name: "Instagram", img: "/logos/instagram.png" },
        { name: "X", img: "/logos/x.png" },
        { name: "Tiktok", img: "/logos/tiktok.png" },
      ],
    },
    {
      title: "Project Management",
      tools: [
        { name: "Notion", img: "/logos/notion.png" },
        { name: "Asana", img: "/logos/asana.png" },
        { name: "ClickUp", img: "/logos/clickup.png" },
      ],
    },
    {
      title: "Time Tracking & Scheduling",
      tools: [
        { name: "Google Calendar", img: "/logos/gcalendar.png" },
        { name: "Calendly", img: "/logos/calendly.png" },
      ],
    },
    {
      title: "Editing & Creative Apps",
      tools: [
        { name: "Canva", img: "/logos/canva.png" },
        { name: "CapCut", img: "/logos/capcut.png" },
      ],
    },
  ];

  return (
    <section
      id="toolset"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-16 text-center break-words max-w-full"
      >
        Tools & Apps I Use
      </motion.h2>

      {toolSections.map((section, idx) => (
        <div key={idx} className="w-full mb-12 flex flex-col items-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center text-black/90"
          >
            {section.title}
          </motion.h3>

          {/* Responsive grid with auto-fit */}
          <div className="grid gap-6 justify-center w-full max-w-6xl" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
            {section.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 0 20px rgba(255, 200, 0, 0.8), 0 0 30px rgba(255, 180, 0, 0.6)",
                }}
                className="flex flex-col items-center gap-3 p-4 bg-white/30 rounded-xl shadow-md"
              >
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/20 shadow-md overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 blur-xl animate-pulse"></span>
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="relative z-10 w-10 h-10 object-contain"
                  />
                </div>
                <p className="text-black font-medium text-center">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
