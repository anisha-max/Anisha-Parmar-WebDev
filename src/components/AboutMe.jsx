import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
        tl.from(".reveal-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        })

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className=" text-white py-5">
     <div className="bg-zinc-900 max-w-7xl mx-auto py-10 rounded-2xl">
             <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#00FFCA]"></span>
                        <span className="text-zinc-400 text-sm font-medium uppercase tracking-widest">About Me</span>
                    </div>
              <div className=" flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                <div className="max-w-2xl">
                    <p className="reveal-text text-5xl font-bold leading-tight">
                        Developer Driven by Impact and Precision
                    </p>
                </div>
                <p className="reveal-text text-gray-400  md:max-w-xs md:mt-0 leading-relaxed">
                  I'm a web developer passionate about crafting digital experiences that are both functional and visually engaging. I specialize in building fast, scalable, and user-friendly web solutions that solve real-world problems.
                </p>
            </div>
          </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-3 reveal-img">
                    <div className="aspect-4/5 rounded-3xl overflow-hidden">
                        <img src="/home5.jpg" alt="Maxel Morgan" className="w-full h-full object-cover" />

                    </div>
                </div>

                <div className="lg:col-span-4 reveal-img">
                    <div className="aspect-4/5 rounded-3xl overflow-hidden">
                        <img src="/home7.jpg" alt="Maxel Morgan" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col pt-4">
                    <div className="relative">
                        <span className="absolute -left-6 -top-4 text-6xl text-[#00FFCA] font-serif opacity-50">“</span>
                        <h3 className="reveal-text text-4xl font-semibold  relative z-10">
                            Every project I work on is approached with clarity, collaboration, and long-term value in mind."
                        </h3>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                     <div>
                           <p className="text-lg font-semibold text-white mb-1">Anisha Parmar</p>
                        <p className="text-[#00FFCA] ">Fullstack Developer</p>
                     </div>
                                          <Link to="/achievements" className="text-sm bg-zinc-800 hover:bg-white/20 backdrop-blur-md font-semibold text-white px-6 cursor-pointer py-2 h-fit rounded-lg transition-all ">
                        More About Experience
                    </Link>
                    </div>

                  

                    <hr className="border-zinc-800 my-4" />

                 
                    <div className="flex flex-col gap-6">
                        {[
                            "Specialize in modern, performance-focused web applications",
                            "Experienced collaborating with teams and personal brands",
                            "Focused on turning complex ideas into clean, maintainable solutions"
                        ].map((text, idx) => (
                            <div key={idx} className="reveal-text flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full border-2 text-[#00FFCA] flex items-center justify-center flex-shrink-0">
                                 <FaCheckCircle/>
                                </div>
                                <p className="text-zinc-300 text-lg leading-snug">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
     </div>
        </section>
    );
};

export default AboutMe;