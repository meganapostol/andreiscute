import React from "react";

export default function LoveMessage({ message }) {
  if (!message) return null;

  return (
    <p
      className="text-2xl sm:text-3xl font-bold text-pink-600 text-center px-4"
      style={{ textShadow: "0 2px 12px rgba(255,182,193,0.6)" }}
    >
      {message}
    </p>
  );
}