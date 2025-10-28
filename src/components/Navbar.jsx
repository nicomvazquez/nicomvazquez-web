import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'reports', label: 'Informes' },
    { id: 'proyects', label: 'Proyectos' },
    { id: 'advisor', label: 'Contacto' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-[#ffc700]/30 shadow-lg shadow-[#ffc700]/5' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-5xl mx-auto px-3 lg:px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="./img/logo-vn.png" 
              alt="Nicolas Vazquez Logo" 
              className="h-10 lg:h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-[#ffc700] transition-all duration-300 font-medium relative group py-2 focus:outline-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc700] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Social Icons - Visible only on desktop */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <a 
                href="https://www.linkedin.com/in/nicolasvazquezpizzi/" 
                className="text-lg lg:text-xl hover:text-[#ffc700] transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/nicomvazquez" 
                className="text-lg lg:text-xl hover:text-[#ffc700] transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:vazquezpizzinicolas@gmail.com" 
                className="text-lg lg:text-xl hover:text-[#ffc700] transition-all duration-300 hover:scale-110"
              >
                <BiLogoGmail />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-300 hover:text-[#ffc700] transition-colors duration-200 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-700/50 mx-3 lg:mx-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 lg:px-6 py-3 text-gray-300 hover:text-[#ffc700] hover:bg-gray-800/50 transition-all duration-200 rounded-md text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            
            {/* Social links in mobile menu */}
            <div className="flex justify-center gap-4 pt-4 pb-2 border-t border-gray-700/50 mt-4">
              <a 
                href="https://www.linkedin.com/in/nicolasvazquezpizzi/" 
                className="p-2 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://github.com/nicomvazquez" 
                className="p-2 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="mailto:vazquezpizzinicolas@gmail.com" 
                className="p-2 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300"
              >
                <BiLogoGmail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
