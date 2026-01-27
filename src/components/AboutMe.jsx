import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
        }).from(".reveal-img", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className=" text-white py-5">
     <div className="bg-zinc-900 max-w-7xl mx-auto py-10 rounded-2xl">
             <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#00FFCA]"></span>
                        <span className="text-zinc-400 text-sm font-medium uppercase tracking-widest">About the Founder</span>
                    </div>
              <div className=" flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                <div className="max-w-2xl">
                    <h2 className="reveal-text text-5xl font-bold leading-tight">
                        Developer Driven by Purpose and Precision
                    </h2>
                </div>
                <p className="reveal-text text-gray-400  md:max-w-xs md:mt-0 leading-relaxed">
                    I'm a web developer focused on building meaningful digital experiences. With years of hands-on experience, I turn complex ideas into clean, functional solutions.
                </p>
            </div>
          </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-3 reveal-img">
                    <div className="aspect-4/5 rounded-3xl overflow-hidden">
                        <img src="/homebg2.jpg" alt="Maxel Morgan" className="w-full h-full object-cover" />

                    </div>
                </div>

                <div className="lg:col-span-4 reveal-img">
                    <div className="aspect-4/5 rounded-3xl overflow-hidden">
                        <img src="/homebg2.jpg" alt="Maxel Morgan" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col pt-4">
                    <div className="relative">
                        <span className="absolute -left-6 -top-4 text-6xl text-[#00FFCA] font-serif opacity-50">“</span>
                        <h3 className="reveal-text text-4xl font-semibold  relative z-10">
                            Every project is approached with clarity, collaboration, & long term value in mind. "
                        </h3>
                    </div>

                    <div className="flex justify-between items-center">
                     <div>
                           <p className="text-lg font-semibold text-white mb-1">Maxel Morgan</p>
                        <p className="text-[#00FFCA] ">Founder & Lead Developer</p>
                     </div>
                                          <Link to="/" className="text-sm bg-zinc-800 hover:bg-white/20 backdrop-blur-md font-semibold text-white px-6 cursor-pointer py-2 h-fit rounded-lg transition-all ">
                        More About Experience
                    </Link>
                    </div>

                  

                    <hr className="border-zinc-800 my-4" />

                    {/* Feature List */}
                    <div className="flex flex-col gap-6">
                        {[
                            "Founder & Lead Web Developer at MaXel",
                            "Specialized in modern, performance-focused web solutions",
                            "Experienced working with startups, businesses, and personal brands"
                        ].map((text, idx) => (
                            <div key={idx} className="reveal-text flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full border-2 border-[#00FFCA] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-[#00FFCA]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
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