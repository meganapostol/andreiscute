import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LipstickMark({ show, onComplete }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 800);
          }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
        >
          <motion.img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698cafbeb3f7f0eeefb22896/e4f770baf_kiss-mark_1f48b.png"
            alt="Kiss mark"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 5 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 10 }}
            className="w-96 h-96 sm:w-[32rem] sm:h-[32rem]"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(255, 20, 147, 0.3))",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}