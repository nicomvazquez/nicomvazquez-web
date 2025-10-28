import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-[#ffc700]/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="./img/logo-vn.png" 
                alt="Nicolas Vazquez Logo" 
                className="h-10 lg:h-12 w-auto"
              />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#ffc700] mb-1">Nicolas Vazquez</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Economista & Desarrollador</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Especialista en análisis financiero y desarrollo de soluciones tecnológicas para el sector de inversiones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {[
                { label: 'Inicio', id: 'home' },
                { label: 'Sobre mí', id: 'about' },
                { label: 'Informes', id: 'reports' },
                { label: 'Newsletter', id: 'news' },
                { label: 'Proyectos', id: 'proyects' },
                { label: 'Contacto', id: 'advisor' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-[#ffc700] transition-colors duration-300 text-left text-sm lg:text-base"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Conecta conmigo</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BiLogoGmail className="text-[#ffc700] shrink-0" />
                <a 
                  href="mailto:vazquezpizzinicolas@gmail.com"
                  className="text-gray-400 hover:text-[#ffc700] transition-colors duration-300 text-xs lg:text-sm break-all"
                >
                  vazquezpizzinicolas@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4 justify-start">
              <a
                href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/nicomvazquez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:vazquezpizzinicolas@gmail.com"
                className="p-2 lg:p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <BiLogoGmail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Nicolas Vazquez Pizzi. Hecho con</span>
              <FaHeart className="text-[#ffc700] animate-pulse" />
              <span>y dedicación.</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-[#ffc700] text-gray-400 hover:text-black rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-sm">Volver arriba</span>
              <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
