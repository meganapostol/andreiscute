import React, { useState, useRef, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LoveButton from "@/components/LoveButton";
import LoveMessage from "@/components/CatPopup";
import LipstickMark from "@/components/LipstickMark";

const LOVE_MESSAGES = [
  "I love you 💖",
  "I miss you 🥺",
  "You're amazing 💕",
  "You're wonderful 🌸",
  "I love you so much 💗",
  "Missing you always 💭",
  "You're so beautiful 🌹",
  "I adore you 💝",
  "You're perfect 😘",
  "I need you 💞",
  "You're my everything ✨",
  "I want you 💋",
  "You're incredible 🌟",
  "I'm thinking of you 💌",
  "You're so special 💫",
  "I cherish you 🌷",
  "You're gorgeous 💐",
  "I'm crazy about you 😍",
  "You're my love 💘",
  "You mean the world to me 🌎",
];



// Kissing sound as a short base64 encoded tone (we'll use Web Audio API)
function playKissSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create a "kiss" pop sound
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(2000, audioCtx.currentTime + 0.05);
  osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.15);
  
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
  
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.2);

  // Second pop for "mwah" effect
  setTimeout(() => {
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    
    osc2.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
    
    gain2.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    
    osc2.start(audioCtx.currentTime);
    osc2.stop(audioCtx.currentTime + 0.15);
  }, 100);
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [pressCount, setPressCount] = useState(0);
  const [showLipstick, setShowLipstick] = useState(false);
  const lastMsgIndex = useRef(-1);

  const handlePress = useCallback(() => {
    // Pick a random message (avoid repeats)
    let msgIdx;
    do {
      msgIdx = Math.floor(Math.random() * LOVE_MESSAGES.length);
    } while (msgIdx === lastMsgIndex.current && LOVE_MESSAGES.length > 1);
    lastMsgIndex.current = msgIdx;

    // Show lipstick mark animation and message at the same time
    setShowLipstick(true);
    setMessage(LOVE_MESSAGES[msgIdx]);
    
    setPressCount((c) => c + 1);
  }, []);

  const handleLipstickComplete = useCallback(() => {
    setShowLipstick(false);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffe0ec 0%, #ffd6e7 30%, #ffcce0 60%, #ffc2d9 100%)",
      }}
    >
      <FloatingHearts />
      <LipstickMark show={showLipstick} onComplete={handleLipstickComplete} />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
        {/* Title at top */}
        <h1 
          className="text-4xl sm:text-7xl font-bold text-pink-500 mb-8 sm:mb-12 text-center"
          style={{ 
            textShadow: "0 2px 15px rgba(255,182,193,0.5)"
          }}
        >
          THIS IS FOR YOU
        </h1>

        {/* Prompt message */}
        {!message && pressCount === 0 && (
          <p className="text-pink-400 text-lg font-medium tracking-wide animate-pulse mb-8">
            Tap the heart~ 💕
          </p>
        )}

        {/* The Button */}
        <LoveButton onClick={handlePress} />

        {/* Message below button */}
        <div className="h-20 flex items-center justify-center mt-8">
          <LoveMessage message={message} />
        </div>

        {/* Kiss counter */}
        {pressCount > 0 && (
          <p className="text-gray-800 text-xl sm:text-2xl font-medium mt-4">
            {pressCount} kiss{pressCount !== 1 ? "es" : ""} sent 💋
          </p>
        )}
      </div>
    </div>
  );
}