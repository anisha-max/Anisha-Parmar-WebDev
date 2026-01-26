import React, { useRef, useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', to: "/" },
        { name: 'About Me', to: "/about" },
        { name: 'Achievement', to: "/achievement" },
        { name: 'GitHub', to: "/github" },
        { name: 'Projects', to: "/projects" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const overlay = useRef(null)
    const contentRef = useRef(null);
    const tlRef = useRef(null);
    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true });
        tlRef.current
            .to(overlay.current, {
                left: 0,
                duration: 0.4,
                ease: "power2.out"
            })
            .to(
                contentRef.current,
                {
                    x: "0%",
                    duration: 0.8,
                    ease: "expo.out"
                },
                "-=0.2"
            );
    }, []);


    useGSAP(() => {
        if (isOpen) {
            tlRef.current.play();
        } else {
            tlRef.current.reverse();
        }
    }, [isOpen]);


    return (
        <>
            <nav className="bg-black ">
               <div className='max-w-7xl mx-auto text-white px-5 md:px-10  lg:px-0 py-3 flex items-center justify-between'>
                 <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
                    <span className='z-10'>Web</span>
                    <span className=' bg-[#00f2ad] -ms-1 rounded-3xl  shadow-[0_0_15px_rgba(0,242,173,0.5)] px-1 mt-3'>
                        Dev
                    </span>
                </div>


                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink to={link.to} key={link.name}
                            className={({ isActive }) =>
                                ` flex items-center gap-1 cursor-pointer group text-[15px] font-medium hover:text-white transition-color ${isActive ? 'brand-color' : 'text-gray-300'
                                }`
                            }>
                            {link.name}

                        </NavLink>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        <FaBars />
                    </button>
                </div>

                <Link to="/" className="group hidden lg:flex items-center gap-2 border-2  border-[#00f2ad] hover:bg-[#00f2ad]  hover:border-[#1e1e1e] hover:text-black rounded-full pl-6 pr-2 py-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Contact</span>
                    <IoArrowForwardCircleOutline
                        size={28}
                        className="text-[#00f2ad] group-hover:bg-[#00f2ad] group-hover:text-black rounded-full transition-all"
                    />
                </Link>
               </div>
            </nav>
            <div
                ref={overlay}
                className='fixed top-0 -left-full w-full h-screen bg-black/50 z-40 lg:hidden'
            >
                <div ref={contentRef} className='bg-[#1e1e1e] flex flex-col px-5 py-6 gap-8 h-screen w-[80vw] -translate-x-full'>
                    <div className='flex justify-between text-white font-bold'>
                        <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
                            <span className='z-10'>Web</span>
                            <span className=' bg-[#00f2ad] -ms-1 rounded-3xl  shadow-[0_0_15px_rgba(0,242,173,0.5)] px-1 mt-3'>
                                Dev
                            </span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-300">
                            <FaTimes />
                        </button>
                    </div>
                    {navLinks.map((link) => (
                        <NavLink
                            onClick={() => setIsOpen(false)}
                            to={link.to}
                            key={link.name}
                            className=" text-white hover:text-[#00f2ad]"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;