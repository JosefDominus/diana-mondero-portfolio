"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full mt-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center py-4 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 text-black shadow-inner border-t border-black/10"
      >
        <p className="text-sm md:text-base text-black/80 font-medium text-center">
          © {new Date().getFullYear()} Diana Rose Elizabeth S. Mondero.
        </p>
      </motion.div>
    </footer>
  );
}
