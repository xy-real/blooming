"use client";

import { motion } from "framer-motion";

export default function Goodbye() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-6xl md:text-7xl font-light text-rose-500">
          See you!
        </h2>
      </motion.div>
    </motion.section>
  );
}
