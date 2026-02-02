import React from 'react';
import Slider from "react-slick";

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCardProject from '../components/ProjectCardProject';
import SliderProjectCard from '../components/SliderProjectCard';


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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real time ride booking Web application",
      image: "/uber2.png",
      description:
        "A full-stack, real-time ride booking application inspired by Uber, featuring live location tracking, ride requests, driver matching, and socket-based updates for seamless user–driver communication.",
      technologies: ["React", "GSAP", "MongoDb", "Nodejs", "ExpressJS", "Tailwind"],
      github: "https://github.com/anisha-max/uber-clone",
      live: "https://uber-clone-frontend-2ubg.onrender.com"
    },
    {
      id: 2,
      title: "Video straming Platform like youtube",
      image: "/videoapp.png",
      description:
        "A scalable video streaming platform similar to YouTube, supporting video uploads, playback, and responsive layouts with optimized performance and modern UI patterns.",
      technologies: ["Next.js", "Tailwind", "Imagekit", "NextAuth", "MongoDb"],
      github: "https://github.com/anisha-max/Fullstack-youtube-application",
      live: "https://fullstack-video-application.onrender.com"
    },
    {
      id: 3,
      title: "Portfolio",
      image: "/portfolio.png",
      description:
        "A personal developer portfolio showcasing projects, skills, and experience with smooth animations and a strong focus on performance and visual clarity.",
      technologies: ["React", "Tailwind", "GSAP"],
      github: "https://github.com/anisha-max/Anisha-Parmar-WebDev",
      live: "https://anisha-parmar-webdev.onrender.com"
    },
    {
      id: 4,
      title: "Company Project(Frontend Developer) - Fintech Web application",
      image: "/bbps.png",
      description:"Worked on a company project designing the frontend of a fintech web application, focusing on user interfaces, seamless user experience, and integrating features like authentication flows, role-based access controls, and financial data presentation.",
      technologies: ["React", "Tailwind"],
      live: "https://utility.finuniques.in"

    },
    {
      id: 5,
      title: "Company Project(Frontend Developer)  - Main Website",
      image: "/sevenunique.png",
      description:
        "Collaborated with a team to design and develop the frontend of the company’s main website, focusing on user interface, responsiveness, and smooth user experience.",
      technologies: ["React", "Tailwind"],
      live: "https://www.sevenunique.com"

    },
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
    { 
      breakpoint: 1280, 
      settings: { slidesToShow: 2 } 
    },
    { 
      breakpoint: 1024, 
      settings: { slidesToShow: 2 } 
    },
    { 
      breakpoint: 640, 
      settings: { 
        slidesToShow: 1, 
        arrows: false, 
        dots: true 
      } 
    }
  ]
};

  return (
<>
    <section className="pt-20 pb-8 lg:pt-26  overflow-hidden max-w-6xl mx-auto text-white">
      <div className=" mx-auto w-full relative">
        <div className="flex flex-col items-center text-center mb-20">
          <header className="mb-5 text-center">
            <h1 className="text-5xl font-black mb-4 ">Featured <span className="text-[#00FFCA]">Work</span></h1>
            <div className="h-1 w-20 bg-[#00FFCA] mx-auto"></div>
          </header>
          <p className=" text-lg md:text-xl leading-relaxed">
            Each project carries a story of learning — moments of confusion, breakthroughs, and quiet progress. From shaping interfaces to building real-time systems, every line of code reflects growth, curiosity, and the journey of becoming a better developer.
          </p>
        </div>
        <div className="min-h-screen   md:py-5 px-6">
          <section>
            {projects.map((item, index) => (
              <ProjectCardProject
                key={item.id}
                project={item}
                isEven={index % 2 === 0}
              />
            ))}
          </section>
        </div>
      </div>
    </section>

    <section className='max-w-7xl mx-auto pb-16'>
         <div className="relative px-2 md:px-12">
          <Slider {...settings} className="project-slider overflow-visible">
            {projects.map((project, index) => (
              <SliderProjectCard key={index} project={project} />
            ))}
          </Slider>
        </div>
    </section>
    </>
  );
};

export default Projects;