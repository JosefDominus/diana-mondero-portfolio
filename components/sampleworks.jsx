"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SampleWorks() {
  const posters = [
    {
      title: "Tech Conference Poster",
      date: "March 2025",
      description:
        "Created a vibrant, eye-catching poster for a tech conference using Canva. Focused on modern typography, bold colors, and clear hierarchy.",
      image: "/mock-images/tech-conference.jpg",
    },
    {
      title: "Marketing Campaign Poster",
      date: "April 2025",
      description:
        "Designed a promotional poster for a social media marketing campaign. Balanced visual appeal with clear messaging and branding elements.",
      image: "/mock-images/marketing-poster.jpg",
    },
    {
      title: "Event Invitation Poster",
      date: "May 2025",
      description:
        "Crafted an elegant poster for a corporate event invitation. Utilized Canva’s templates and custom illustrations to match the event theme.",
      image: "/mock-images/event-invitation.jpg",
    },
    {
      title: "Product Launch Poster",
      date: "June 2025",
      description:
        "Developed a poster to announce a product launch. Focused on strong visuals and clear call-to-action.",
      image: "/mock-images/product-launch.jpg",
    },
    {
      title: "Workshop Poster",
      date: "July 2025",
      description:
        "Designed a creative poster for an educational workshop. Used Canva templates and custom graphics to communicate the event details effectively.",
      image: "/mock-images/workshop-poster.jpg",
    },
    {
      title: "Festival Poster",
      date: "August 2025",
      description:
        "Created a colorful festival poster, highlighting the main attractions and sponsors with bold visuals.",
      image: "/mock-images/festival-poster.jpg",
    },
  ];

  return (
    <section
      id="sampleworks"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-16 text-center break-words max-w-full"
      >
        My Sample Works
      </motion.h2>
      

      {/* Poster Cards */}
      <div className="grid gap-8 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posters.map((poster, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(255, 200, 0, 0.8), 0 0 40px rgba(255, 180, 0, 0.6)",
            }}
            className="h-full"
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
                  <ImageIcon size={24} className="relative z-10 text-black" />
                </div>

                {/* Text */}
                <div className="text-center">
                  <CardTitle className="text-xl font-semibold text-black">
                    {poster.title}
                  </CardTitle>
                  <p className="text-sm text-black/90">{poster.date}</p>
                </div>
              </CardHeader>

              {/* Poster Image & Description */}
              <CardContent className="pt-4 flex flex-col items-center gap-4">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <p className="text-black/90 leading-relaxed text-center">{poster.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
