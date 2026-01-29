import React, { useState } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { MdOutlineDesignServices, MdOutlineSpeed, MdOutlineSettings, MdOutlineSupportAgent, MdOutlineCode } from "react-icons/md";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const services = [
    {
      id: 'UI / UX Design',
      icon: <MdOutlineDesignServices />,
      title: 'Building User-Centric Designs',
      description: 'Focusing on intuitive interfaces that enhance user satisfaction. I ensure your digital presence is not only beautiful but highly functional.',
      points: ['User Interface Design', 'User Experience Strategy', 'Interactive Prototypes'],
      image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'Performance Optimization',
      icon: <MdOutlineSpeed />,
      title: 'Lightning Fast Performance',
      description: 'Speed is a feature. I optimize code, assets, and delivery pipelines to ensure your users never have to wait.',
      points: ['Load Time Reduction', 'SEO Performance', 'Core Web Vitals'],
      image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'CMS & Elementor Development',
      icon: <MdOutlineSettings />,
      title: 'Custom CMS Solutions',
      description: 'Specializing in Elementor and WordPress development to give you full control over your content without technical hurdles.',
      points: ['Custom Theme Building', 'Plugin Integration', 'Drag-and-Drop Editor Setup'],
      image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'Maintenance & Support',
      icon: <MdOutlineSupportAgent />,
      title: 'Reliable Support & Updates',
      description: 'Ongoing maintenance to keep your platform secure, up-to-date, and performing at its peak long after launch.',
      points: ['Security Audits', 'Regular Backups', 'Content Updates'],
      image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'Web Development',
      icon: <MdOutlineCode />,
      title: 'Building Digital Experiences',
      description: 'This service is designed to help businesses and individuals build a strong, reliable online presence. I focus on creating fast, scalable, and visually consistent websites.',
      points: ['Startups and growing businesses', 'Personal brands and portfolios', 'Agencies needing development support', 'Companies seeking scalable web solutions'],
      image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
  ];

  const activeContent = services.find((s) => s.id === activeTab);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen p-6 md:p-12 lg:p-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="text-2xl font-semibold mb-8 tracking-tight">More Services</p>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  activeTab === service.id
                    ? 'border-emerald-500 bg-zinc-900 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xl ${activeTab === service.id ? 'text-emerald-500' : 'text-zinc-500'}`}>
                    {service.icon}
                  </span>
                  <span className={`text-[15px] font-medium ${activeTab === service.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                    {service.id}
                  </span>
                </div>
                <HiOutlineChevronRight className={`transition-transform duration-300 ${activeTab === service.id ? 'translate-x-1 text-emerald-500' : 'text-zinc-600'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <p className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {activeContent.title}
            </p>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-3xl">
              <p>{activeContent.description}</p>
              <p>
                Every project is developed with clean code, modern tools, and performance best practices. 
                The goal is not just to build a website, but to create a digital product that works seamlessly.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-5">Designed For Growth</h3>
                <ul className="space-y-4">
                  {activeContent.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-zinc-300">
                      <span className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-[16px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className="relative group overflow-hidden rounded-2xl border border-zinc-800">
                <img 
                  src={activeContent.image} 
                  alt="Code on screen"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;