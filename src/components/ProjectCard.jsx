import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, tags, imageSrc ,link}) => {
    const cardRef = useRef(null);
    const arrowRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: cardRef });
    const handleMouseMove = contextSafe((e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(arrowRef.current, {
            x: x - 40, 
            y: y - 40,
            duration: 0.6,
            ease: "power3.out",
        });
    });

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <Link to={link}
                className="group relative flex flex-col gap-6 cursor-pointer w-full max-w-xl">

                <div className="relative overflow-hidden rounded-3xl aspect-video">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div
                        ref={arrowRef}
                        className="pointer-events-none absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#00FFCA] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>

         
                    <div className="absolute bottom-6 left-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-white font-medium text-sm">UI UX</span>
                    </div>
                </div>

  
                <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-white max-w-62 leading-tight">
                        {title}
                    </h3>

                    <div className="flex flex-wrap justify-end gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full border border-zinc-700 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div></Link>
        </div>
    );
};

export default ProjectCard;