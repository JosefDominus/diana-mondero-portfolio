"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  FileText,
  Users,
  MapPin,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-50"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-16 text-center break-words max-w-full"
      >
        Contact Me
      </motion.h2>

      {/* Cards Container */}
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl w-full">
        {/* Left Card: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="relative flex flex-col h-full overflow-hidden shadow-lg border-none hover:shadow-amber-400/40 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black">
            <CardHeader className="flex items-center gap-3 border-b border-black/20 pb-4">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/30 shadow-md">
                <span className="absolute inset-0 rounded-full bg-white/40 blur-xl animate-pulse"></span>
                <Mail size={22} className="relative z-10 text-black" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-black">
                  Get In Touch
                </CardTitle>
                <p className="text-sm text-black/90">
                  Feel free to reach out through the following contact details.
                </p>
              </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-5">
              {/* Contact Number */}
              <div className="flex items-center gap-3 text-black/90">
                <Phone size={20} />
                <span className="font-medium">+63 929 415 3292</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-black/90">
                <Mail size={20} />
                <span className="font-medium">dianavaldes6621@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-black/90">
                <MapPin size={20} />
                <span className="font-medium">Manila, Philippines</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4 justify-center sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/diana-rose-mondero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/40 rounded-full hover:bg-yellow-100 transition-all shadow-sm"
                >
                  <Linkedin size={22} className="text-black" />
                </a>
                <a
                  href="https://www.facebook.com/dianarosemondero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/40 rounded-full hover:bg-yellow-100 transition-all shadow-sm"
                >
                  <Facebook size={22} className="text-black" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Card: References */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="relative flex flex-col h-full overflow-hidden shadow-lg border-none hover:shadow-amber-400/40 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black">
            <CardHeader className="flex items-center gap-3 border-b border-black/20 pb-4">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/30 shadow-md">
                <span className="absolute inset-0 rounded-full bg-white/40 blur-xl animate-pulse"></span>
                <Users size={22} className="relative z-10 text-black" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-black">
                  References
                </CardTitle>
                <p className="text-sm text-black/90">
                  Professional contacts for verification and inquiries.
                </p>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-4">
              <div>
                <p className="font-semibold text-black">Donelle Stella Maris Valdes-Mariano</p>
                <p className="text-sm text-black/80">
                  Virtual Assistant, GFI Global Financial Impact
                </p>
                <p className="text-sm text-black/70">📧 donellevaldes12@yahoo.com</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Card: Ready to Connect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full mt-10 flex justify-center"
      >
        <Card className="relative flex flex-col items-center justify-center shadow-lg border-none hover:shadow-amber-400/40 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black py-10 px-8 rounded-2xl">
          <CardHeader className="w-full text-center mb-4">
            <CardTitle className="text-2xl font-semibold text-black mb-3">
              Ready to Connect?
            </CardTitle>
            <p className="text-sm text-black/80 max-w-2xl mx-auto text-justify">
              Let’s stay in touch — feel free to reach out anytime for
              collaboration, project discussions, or professional inquiries. You
              can contact me directly via email or download my CV below to learn
              more about my experience and skills. I’m always open to new
              opportunities and meaningful connections.
            </p>
          </CardHeader>

          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            {/* Send Email Button */}
            <Button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:from-yellow-500 hover:to-orange-500 transition-all">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dianavaldes6621@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an Email
              </a>
            </Button>

            {/* Download CV Button */}
            <Button
              variant="outline"
              className="rounded-full border-black/30 text-black hover:bg-yellow-100 hover:border-yellow-400 transition"
            >
              <a href="/DRESM-RESUME.pdf" download>
                <div className="flex items-center gap-2 justify-center">
                  <FileText size={18} /> Download My CV
                </div>
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
