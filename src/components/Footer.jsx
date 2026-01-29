import React, { useRef } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMagic } from 'react-icons/fa';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" text-white py-6 px-5 md:px-10 overflow-hidden">
            <div className="flex flex-col md:flex-row items-baseline justify-end gap-4 select-none">
                <p 
                    className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter"
                    style={{
                        WebkitTextStroke: '2px #00f2ad',
                        color: 'transparent'
                    }}
                >
                    Web
                </p>
                <p className="text-6xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter text-white">
                    Developer
                </p>
            </div>

            <div className="flex gap-8 my-5">
                <a href="#" className="hover:text-[#00f2ad] transition-colors text-2xl"><FaGithub /></a>
                <a href="#" className="hover:text-[#00f2ad] transition-colors text-2xl"><FaTwitter /></a>
                <a href="#" className="hover:text-[#00f2ad] transition-colors text-2xl"><FaLinkedinIn /></a>
                <Link 
                    className="text-[#00f2ad] hover:text-white transition-colors text-2xl cursor-pointer"
                >
                    <FaMagic />
                </Link>
            </div>

            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                     © 2026 By Anisha Parmar. All rights reserved.
                </p>
                
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;