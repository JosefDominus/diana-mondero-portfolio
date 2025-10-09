"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SampleWorks() {
  const posters = [
    {
      title: "DIT Promotional Posters",
      software: "Canva",
      images: [
        { name: "Poster 1", img: "/SampleWorks/Sample1.jpg" },
        { name: "Poster 2", img: "/SampleWorks/Sample2.jpg" },
        { name: "Poster 3", img: "/SampleWorks/Sample3.jpg" },
        { name: "Poster 4", img: "/SampleWorks/Sample4.jpg" },
        { name: "Poster 5", img: "/SampleWorks/Sample5.jpg" },
        { name: "Poster 6", img: "/SampleWorks/Sample6.jpg" },
        { name: "Poster 7", img: "/SampleWorks/Sample7.jpg" },
        { name: "Poster 8", img: "/SampleWorks/Sample8.jpg" },
        { name: "Poster 9", img: "/SampleWorks/Sample9.jpg" },
      ],
      description:
        "Promotional posters for Diversion in Technology designed using Canva, showcasing consistency and modern visual style.",
    },
    {
      title: "Elite International Matchmaker Posters (Freelance)",
      software: "Canva",
      images: [
        { name: "Poster 10", img: "/SampleWorks/Sample10.jpg" },
        { name: "Poster 11", img: "/SampleWorks/Sample11.jpg" },
        { name: "Poster 12", img: "/SampleWorks/Sample12.jpg" },
        { name: "Poster 13", img: "/SampleWorks/Sample13.jpg" },
        { name: "Poster 14", img: "/SampleWorks/Sample14.jpg" },
        { name: "Poster 15", img: "/SampleWorks/Sample15.jpg" },
      ],
      description:
        "Freelance promotional posters for Elite International Matchmaker, designed to enhance branding and digital presence.",
    },
  ];

  const videos = {
    title: "Video Projects",
    software: "CapCut",
    videos: [
      { name: "Promo Video 1", src: "/SampleWorks/Video1.mp4" },
      { name: "Promo Video 2", src: "/SampleWorks/Video2.mp4" },
      { name: "Promo Video 3", src: "/SampleWorks/Video3.mp4" },
      { name: "Promo Video 4", src: "/SampleWorks/Video4.mp4" },
      { name: "Promo Video 5", src: "/SampleWorks/Video5.mp4" },
      { name: "Promo Video 6", src: "/SampleWorks/Video6.mp4" },
    ],
    description:
      "A collection of promotional and creative videos edited using CapCut, showcasing storytelling and visual design.",
  };

  const [lightbox, setLightbox] = useState({ items: [], index: null, type: "image" });

  useEffect(() => {
    document.body.style.overflow = lightbox.index !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const handleNext = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));
  };

  const handlePrev = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length,
    }));
  };

  return (
    <section
      id="sampleworks"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-12 sm:mb-16 text-center"
      >
        My Sample Works
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-10 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {[...posters, videos].map((poster, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 25px rgba(255, 200, 0, 0.6), 0 0 40px rgba(255, 180, 0, 0.4)",
            }}
            className="w-full flex justify-center"
          >
            <Card className="w-full max-w-md min-h-[540px] flex flex-col justify-between bg-gradient-to-b from-yellow-100 via-amber-100 to-orange-100 text-black shadow-md rounded-2xl overflow-hidden border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center border-b border-black/10 py-5 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {poster.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-center justify-between gap-4 py-6 px-4 flex-grow">
                <div className="grid grid-cols-3 gap-2 w-full">
                  {poster.images
                    ? poster.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.img}
                          alt={img.name}
                          className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() =>
                            setLightbox({
                              items: poster.images,
                              index: i,
                              type: "image",
                            })
                          }
                        />
                      ))
                    : poster.videos.map((vid, i) => (
                        <video
                          key={i}
                          src={vid.src}
                          muted
                          className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() =>
                            setLightbox({
                              items: poster.videos,
                              index: i,
                              type: "video",
                            })
                          }
                        />
                      ))}
                </div>

                <p className="text-gray-700 text-center text-sm sm:text-base px-3 leading-relaxed">
                  {poster.description}
                </p>

                {/* Software Label */}
                <div className="mt-2 text-xs sm:text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-300 shadow-sm">
                  {poster.software}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for both images & videos */}
      {lightbox.index !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox({ items: [], index: null, type: "image" })}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              <img
                src={lightbox.items[lightbox.index].img}
                alt="Preview"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : (
              <video
                src={lightbox.items[lightbox.index].src}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}

            <button
              onClick={() =>
                setLightbox({ items: [], index: null, type: "image" })
              }
              className="absolute top-4 right-4 text-4xl text-black hover:text-red-500"
            >
              <X />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-white/80 hover:bg-white text-3xl rounded-full p-2 shadow-md transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black bg-white/80 hover:bg-white text-3xl rounded-full p-2 shadow-md transition"
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-3 bg-white/70 px-4 py-1 rounded-full text-sm text-black shadow-md">
              {lightbox.index + 1} / {lightbox.items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
