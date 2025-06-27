import React from "react";
import "./SplashPortal.css";

export default function SplashPortal() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Cosmic Frequency Grid */}
      <div className="absolute inset-0 z-0 animate-pulse bg-[url('/geometry-grid.json')] bg-cover opacity-10 pointer-events-none"></div>

      {/* Floating Sigil Logo */}
      <img
        src="/glow-sigil.png"
        alt="Frekqenci Sigil"
        className="w-24 h-24 md:w-36 md:h-36 animate-float z-10"
      />

      {/* Portal Headline */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-center z-10 mt-4">
        FREKQENCI
      </h1>
      <p className="text-center text-lg md:text-xl mt-2 z-10 text-neutral-400 font-light">
        Tune in. Unlock your resonance. Walk through the portal.
      </p>

      {/* Login Options */}
      <div className="flex flex-col space-y-4 mt-10 z-10 w-[90%] max-w-sm">
        <button className="bg-white text-black py-3 rounded-xl hover:scale-105 transition">
          Login with Instagram
        </button>
        <button className="bg-blue-500 text-white py-3 rounded-xl hover:scale-105 transition">
          Login with Facebook
        </button>
        <button className="bg-black border border-white py-3 rounded-xl hover:bg-white hover:text-black transition">
          Login with Snapchat
        </button>
        <button className="bg-pink-600 text-white py-3 rounded-xl hover:scale-105 transition">
          Login with TikTok
        </button>
      </div>

      {/* Background Audio */}
      <audio autoPlay loop className="hidden">
        <source src="/ambient-trap.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
