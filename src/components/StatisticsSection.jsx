import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = () => {
  const containerRef = useRef(null);

  const stats = [
    { label: "Years of Professional Web Development Experience", value: 8, suffix: "+" },
    { label: "Successful Websites & Digital Projects Delivered", value: 120, suffix: "+" },
    { label: "Industries Served Across Global Business Markets", value: 15, suffix: "+" },
    { label: "Long Term Client Trust and Satisfaction", value: 100, suffix: "%" },
  ];

useGSAP(() => {
  const counters = gsap.utils.toArray(".stat-number");

  ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top 70%",
    once: true, // 🔥 important
    onEnter: () => {
      counters.forEach((counter) => {
        const target = +counter.dataset.target;

        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.8,
            ease: "power1.out",
            snap: { textContent: 1 },
          }
        );
      });
    },
  });
}, { scope: containerRef });

  return (
    <section ref={containerRef} className=" text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {stats.map((stat, index) => (
          <div key={index} className="border-l-2 border-gray-800  pl-6 space-y-6">
            <h4 className=" font-bold leading-tight min-h-10">
              {stat.label}
            </h4>
            <div className="flex items-center gap-1">
              <span 
                className="stat-number text-8xl font-bold opacity-20" 
                style={{ WebkitTextStroke: '2px #ffffff', color:'transparent'}}
                data-target={stat.value}
              >
                0
              </span>
              <span className="text-3xl font-black text-emerald-400">
                {stat.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Selected Projects
          </div>
        </div>
        
        <div className="lg:col-span-6">
          <p className="text-5xl font-bold leading-tight max-w-md mx-auto">
            Crafting Scalable Digital Products That Perform
          </p>
        </div>

        <div className="lg:col-span-3 flex items-end">
          <p className="text-gray-400 ">
            Each project reflects a strategic approach to problem solving and user experience. 
            I focus on building fast, scalable, and visually refined web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;