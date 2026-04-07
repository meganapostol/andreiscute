import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative group cursor-pointer"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-pink-400 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Main button */}
      <div
        className="relative w-44 h-44 sm:w-80 sm:h-80 rounded-full flex flex-col items-center justify-center gap-2 sm:gap-4 shadow-2xl border-2 border-pink-300/50"
        style={{
          background: "linear-gradient(135deg, #ff9ec4 0%, #ff6b9d 30%, #e8457c 60%, #ff6b9d 80%, #ffb3d0 100%)",
          boxShadow: "0 0 40px rgba(255, 107, 157, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.4), 0 8px 32px rgba(232, 69, 124, 0.3)",
        }}
      >
        {/* Shine overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 30%, transparent 50%)",
          }}
        />

        <Heart className="w-14 h-14 sm:w-24 sm:h-24 text-white drop-shadow-lg fill-white/80" strokeWidth={1.5} />
        <span
          className="text-white font-extrabold text-sm sm:text-2xl tracking-widest drop-shadow-md"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
        >
          PRESS HERE
        </span>
      </div>
    </motion.button>
  );
}