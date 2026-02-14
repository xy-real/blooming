"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const floatingHearts = [
    { left: 10, top: 15, fontSize: 1.5, x: -5, duration: 4, delay: 0 },
    { left: 85, top: 20, fontSize: 2, x: 8, duration: 4.5, delay: 0.5 },
    { left: 25, top: 75, fontSize: 1.8, x: -8, duration: 3.5, delay: 1 },
    { left: 70, top: 80, fontSize: 1.3, x: 5, duration: 4.2, delay: 0.3 },
    { left: 5, top: 50, fontSize: 2.5, x: 10, duration: 3.8, delay: 0.8 },
    { left: 90, top: 60, fontSize: 1.6, x: -6, duration: 4.8, delay: 0.2 },
    { left: 40, top: 10, fontSize: 2.2, x: 7, duration: 3.3, delay: 1.2 },
    { left: 60, top: 90, fontSize: 1.4, x: -9, duration: 4.6, delay: 0.6 },
    { left: 15, top: 85, fontSize: 1.9, x: 6, duration: 3.7, delay: 1.5 },
    { left: 95, top: 35, fontSize: 1.7, x: -7, duration: 4.3, delay: 0.4 },
    { left: 50, top: 5, fontSize: 2.3, x: 9, duration: 3.9, delay: 0.9 },
    { left: 30, top: 40, fontSize: 1.2, x: -4, duration: 4.7, delay: 1.8 },
    { left: 75, top: 55, fontSize: 2.1, x: 8, duration: 3.6, delay: 0.7 },
    { left: 20, top: 65, fontSize: 1.8, x: -10, duration: 4.4, delay: 1.3 },
    { left: 80, top: 25, fontSize: 1.5, x: 5, duration: 4.1, delay: 1.1 },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-red-50 to-rose-100 flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        className="text-center space-y-12 max-w-2xl relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating hearts background */}
        {floatingHearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-30"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.fontSize}rem`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, heart.x, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay,
            }}
          >
            <FaHeart />
          </motion.div>
        ))}

        {/* Main content */}
        <motion.div variants={itemVariants} className="relative z-10">
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-red-500 to-rose-600 drop-shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy Valentine&apos;s Day!
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 text-6xl relative z-10"
        >
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              className="text-pink-500 drop-shadow-md"
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <FaHeart />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-rose-600 font-light relative z-10"
        >
          Sending you all the love today
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 text-5xl relative z-10"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="text-red-500 cursor-pointer"
              whileHover={{
                scale: 1.4,
                rotate: 15 * (i % 2 === 0 ? 1 : -1),
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <FaHeart />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
