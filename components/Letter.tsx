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
          Hi Ellie!
        </h2>
        
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p className="font-semibold text-rose-500">
            Happy Valentine&apos;s Day!
          </p>
          
          <p>
            Musta? I wasn&apos;t sure how to write this, kay to be honest, we haven&apos;t really talked, or interacted even. So natingala ko ngano, but that got me thinking...
          </p>
          
          <p>
            I always thought, you seemed fun to be with haha. Kanang feeling nga, bsag naa rako sa layo, unya makakita ko nnyu magkatawa, I can&apos;t help but smile sad.
          </p>
          
          <p>
            Your smile really left an impression on me. I can&apos;t remember when, pero I thought, &quot;Wow, lahi ra sya musmile, kanice&quot;. Since then, everytime makita nako inyu grupo, ikaw dayon ako mapansin.
          </p>
          
          <p>
            I know I might be getting ahead of myself, magtalk pa unta ta pag Tuesday, pero I didn&apos;t want today to pass without saying this.
          </p>
          
          <p>
            I hope I get the chance to know you more, beyond just the smile.
          </p>
          
          <p className="italic">
            No pressure though. I just wanted to be sincere today.
          </p>
        </div>
        
        <div className="mt-8 text-right">
          <p className="text-xl text-rose-500 font-semibold">
            With all my heart,
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Xyryll Jay Taneo
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
