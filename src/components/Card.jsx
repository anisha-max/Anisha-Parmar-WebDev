import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, heading, description, buttonText, onClick }) {
  return (
    <div
      className="w-[95vw] md:w-[45vw] lg:w-[33vw] h-[60vh] shrink-0 relative rounded-xl overflow-hidden flex items-end p-6 shadow-[0_10px_30px_-15px_rgba(0,242,173,0.6)]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-bold mb-2">{heading}</h3>
        <p className="mb-4">{description}</p>
        <Link to="/contact"
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition w-fit"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
