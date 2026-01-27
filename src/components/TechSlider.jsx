import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Replace these with your actual dev technology logos
const logos = [
  { name: "Glovix", icon: "🦊" },
  { name: "crevox", icon: "💠" },
  { name: "Markon", icon: "🌙" },
  { name: "Brandex", icon: "📦" },
  { name: "Nexora", icon: "🔼" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🌊" },
];

const TechSlider = () => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the logos list to create a seamless loop
    const totalWidth = slider.scrollWidth / 2;

    // GSAP infinite horizontal scroll animation
    gsap.to(slider, {
      x: `-=${totalWidth}`, // Move left by half the total width
      duration: 30, // Adjust for speed (higher = slower)
      ease: "none",
      repeat: -1, // Infinite loop
      onReverseComplete: () => {
        gsap.set(slider, { x: 0 });
      }
    });
  }, { scope: sliderRef });

  return (
    <div className="max-w-6xl mx-auto  py-12 overflow-hidden relative">
             <div 
        ref={sliderRef} 
        className="flex whitespace-nowrap items-center gap-16 md:gap-24"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-4xl grayscale brightness-150">{logo.icon}</span>
            <span className="text-2xl font-bold text-zinc-400 uppercase tracking-widest">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;