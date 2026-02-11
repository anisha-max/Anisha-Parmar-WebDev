"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 
import Card from "../components/Card";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const containerRef = useRef(null); 

  const cards = [
    {
      image: "/services/frontend.jpg",
      title: "Frontend Development",
      description: "Build responsive, modern, and user-friendly interfaces.",
      buttonText: "View Frontend Work"
    },
    {
      image: "/services/backend.jpg",
      title: "Backend Development",
      description: "Develop server-side logic, APIs, and database systems.",
      buttonText: "View Backend Work"
    },
    {
      image: "/services/full-stack.jpg",
      title: "Full Web App Development",
      description: "Deliver complete web applications from concept to deployment.",
      buttonText: "See Full Projects"
    },
    {
      image: "/services/security.jpg",
      title: "Authentication & Security",
      description: "Implement secure login and data protection measures.",
      buttonText: "Secure Your App"
    },
    {
      image: "/services/maintainance.jpg",
      title: "Maintenance & Support",
      description: "Provide ongoing updates and technical support.",
      buttonText: "Get Support"
    },
    {
      image: "/services/api.jpg",
      title: "API Integration Services",
      description: "Connect your apps with third-party APIs like payments.",
      buttonText: "Integrate APIs"
    },
    {
      image: "/services/refactoring.jpg",
      title: "Migration & Refactoring",
      description: "Upgrade or refactor legacy code for performance.",
      buttonText: "Refactor Code"
    },
    {
      image: "/services/mvp.jpg",
      title: "MVP in 30 Days",
      description: "Build a minimum viable product to validate your idea fast.",
      buttonText: "Build MVP"
    },
    {
      image: "/services/frontend-revamp.jpg",
      title: "Frontend Revamp Only",
      description: "Redesign or improve the UI/UX of your existing application.",
      buttonText: "Revamp UI"
    },
  ];

  useGSAP(() => {
    const section = sectionRef.current;
    const strip = stripRef.current;

    if (!section || !strip) return;
    const getScrollAmount = () => strip.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(strip, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top", 
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        invalidateOnRefresh: true, 
        anticipatePin: 1,
      },
    });

  }, { scope: containerRef }); 

  return (
    <div ref={containerRef}>
      <section className="text-white pt-20 lg:pt-26">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-4">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-lg text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Services offered
            </div>
          </div>

          <div className="lg:col-span-6">
            <h1 className="text-5xl font-bold leading-tight lg:max-w-md">
              Your Vision, Delivered as High-Performance Web Solutions
            </h1>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between">
            <Link 
              to="/contact" 
              className="border border-[#00f2ad] hover:bg-[#00f2ad] font-semibold py-3 px-8 hover:text-black text-white rounded-md transition-all text-center lg:ms-auto"
            >
              Get service 
            </Link>
            <p className="text-gray-400 pt-5">
              My mission is to turn your ideas into fully functional digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="overflow-hidden bg-transparent h-screen flex items-center">
        <div
          ref={stripRef}
          className="flex flex-nowrap will-change-transform"
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className=" md:w-[45vw] lg:w-[33vw] p-2 md:p-4 lg:px-8 shrink-0 box-content"
            >
              <Card
                image={c.image}
                heading={c.title}
                description={c.description}
                buttonText={c.buttonText}
                onClick={() => alert(`${c.title} clicked!`)}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}