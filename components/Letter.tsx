"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <motion.section
      id="letter"
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-2xl bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl p-12 border border-pink-200"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-rose-600 mb-6 text-center">
          My Dearest,
        </h2>
        
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            {/* Add your letter content here */}
            Write your heartfelt message here...
          </p>
          
          <p>
            More paragraphs...
          </p>
        </div>
        
        <div className="mt-8 text-right">
          <p className="text-xl text-rose-500 font-semibold">
            With all my love,
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Your name
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
