import React, { useRef } from 'react';
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-zinc-800 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 transition-all hidden md:block"
  >
    <HiOutlineArrowRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-zinc-800 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 transition-all hidden md:block"
  >
    <HiOutlineArrowLeft size={24} />
  </button>
);

const ProjectCard = ({ project }) => {
  const container = useRef();
  const overlayRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(contentRef.current, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .to(contentRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }, "-=0.2");

    const el = container.current;
    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, { scope: container });

  return (
    <div ref={container} className="px-3 outline-none">
      <div className="relative h-130 rounded-[2.5rem] overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900 shadow-xl">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale-10 group-hover:grayscale-0 transition-all duration-700"
        />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10 z-10"
        >
          <div ref={contentRef}>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
            <p className="text-white text-sm mb-8 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 p-3.5 rounded-full text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { title: "Dancing Dunes", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800", description: "Capturing the breathtaking beauty of sand dunes through artistic lensmanship and clean design.", technologies: ["React", "GSAP"], github: "#" },
    { title: "Mountain Peaks", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", description: "A high-performance exploration of landscapes using modern frontend frameworks and scalable tools.", technologies: ["Next.js", "Tailwind"], github: "#" },
    { title: "Ocean Blue", image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800", description: "Visually consistent web experiences that support long-term growth and high performance best practices.", technologies: ["Three.js", "React"], github: "#" },
    { title: "Forest Edge", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", description: "Modular landing page structures with strong visual hierarchy and clear digital messaging.", technologies: ["Vite", "Prisma"], github: "#" },
    { title: "Urban Sky", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", description: "Modern and conversion-optimized interfaces designed for digital products and startups.", technologies: ["Node.js", "SQL"], github: "#" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false, dots: true } }
    ]
  };

  return (
    <section className="py-16  overflow-hidden max-w-7xl mx-auto ">
      <div className=" mx-auto w-full relative">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-5xl md:text-7xl font-serif text-emerald-500 italic mb-8 tracking-tight">
            My Works
          </p>
          <p className="text-zinc-500 max-w-2xl text-lg md:text-xl leading-relaxed">
            Witness the beauty of nature through our lens, as we showcase stunning
            landscapes that evoke wonder and appreciation for the environment.
          </p>
        </div>

        <div className="relative px-2 md:px-12">
          <Slider {...settings} className="project-slider overflow-visible">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;