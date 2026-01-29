import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ServicesSection from '../components/ServicesSection'
import StatisticsSection from '../components/StatisticsSection'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import TechSlider from '../components/TechSlider'

function Home() {

  const projects = [
    {
      title: "Corporate Business Website",
      tags: ["corporate", "responsive"],
      imageSrc: "/homebg.jpg",
      link: "/"
    },
    {
      title: "SaaS Product Dashboard",
      tags: ["saas", "interface"],
      imageSrc: "/homebg2.jpg",
      link: "/"
    }
  ];



  return (
    <div className="relative">
      <section
        className="relative  min-h-screen bg-fixed w-full flex items-center justify-center  bg-center bg-cover bg-no-repeat pb-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%), url('/homebg.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-baseline-last">
            <div className="text-white text-end max-w-md">
              <p className="text-6xl md:text-9xl font-semibold ">
                Build
              </p>
              <p className="text-6xl md:text-9xl font-semibold  text-transparent bg-clip-text"
                style={{
                  WebkitTextStroke: '2px #00f2ad',
                  color: 'transparent'
                }}>
                Digital
              </p>
              <p className="text-6xl md:text-9xl font-semibold ">
                Futures
              </p>

            </div>

            <div className="text-white space-y-3 max-w-md ">
              <p className="text-3xl font-semibold">
                Innovate. Develop. <br /> Succeed. Fast.
              </p>
              <p className="text-gray-300 text-lg ">
                Transform your ideas into cutting-edge web solutions.
                We craft high-performance websites and applications tailored to your business.
              </p>

              <div className="flex flex-wrap gap-4 py-4">
                <button className="bg-zinc-800 hover:bg-white/20 backdrop-blur-md font-semibold text-white px-8 py-3 rounded-md transition-all border border-white/10">
                  Get a Free Quote
                </button>
                <button className="border border-[#00f2ad] hover:bg-[#00f2ad] font-semibold hover:text-black text-white px-8 py-3 rounded-md transition-all">
                  Our Services
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 flex items-center gap-2 text-sm text-gray-300 justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <p className='text-white font-semibold'>Anisha Parmar — Software Developer</p>
          </div>
          <div className='lg:flex justify-between text-gray-300 pt-10'>
            <div className='border-l-2 px-5 border-[#00f2ad] max-w-md'>
              Trusted by businesses to build reliable digital products that grow.
            </div>
            <div className='flex justify-around gap-5'>
              <div className='flex items-center gap-2'>
                <a href="#" className="text-[#00f2ad] hover:text-gray-300 transition-colors text-lg border border-gray-600 rounded-md p-1"><FaGithub /></a> Github
              </div>
              <div className='flex items-center gap-2'>
                <a href="#" className="text-[#00f2ad] hover:text-gray-300 transition-colors text-lg border border-gray-600 rounded-md p-1"><FaTwitter /></a> Tweeter
              </div>
              <div className='flex items-center gap-2'>
                <a href="#" className="text-[#00f2ad] hover:text-gray-300 transition-colors text-lg border border-gray-600 rounded-md p-1"><FaLinkedinIn /></a> Linkedin

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className=" bg-zinc-950  text-white py-16">
        <div className='max-w-6xl mx-auto mb-5'>
          <div className='lg:grid lg:grid-cols-3'>
            <div className='lg:col-span-1'>
              <div className='flex items-center gap-2'>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <p>
                  My Core Expertise
                </p>
              </div>
            </div>
            <div className='lg:col-span-2'>
              <p className='text-4xl font-semibold '>
                I help businesses and founders turn ideas into functional, scalable digital products. Every project is built with performance, clarity, and long-term growth in mind.
              </p>
            </div>
          </div>
        </div>
        <ServicesSection />
      </section>

      <StatisticsSection />


      <section className='max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
        <p className='text-white font-medium py-16 text-center'>
          Have a project in mind? <Link to="" className='brand-color'>
            Let’s work together
          </Link>
        </p>
      </section>


      <AboutMe/>

      <TechSlider/>
    </div>
  )
}

export default Home
