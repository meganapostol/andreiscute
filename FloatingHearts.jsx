import React from "react";
import { motion } from "framer-motion";

const hearts = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 24 + 12,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 8,
  opacity: Math.random() * 0.25 + 0.15,
}));

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300"
          style={{
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -15, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            y: { duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: heart.delay * 0.5 },
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}