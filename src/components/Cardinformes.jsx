import React from "react";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

function Cardinformes({ img, description, url, title }) {
  return (
    <div className="group w-full rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm shadow-2xl border border-gray-700/50 hover:border-[#ffc700]/50 transform transition-all duration-500 hover:scale-105 hover:shadow-[#ffc700]/20">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          src={img}
          alt={title || "Imagen del informe"}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#ffc700]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <FaExternalLinkAlt className="text-black text-sm" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {title && (
          <h3 className="text-xl font-semibold text-white group-hover:text-[#ffc700] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        )}
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* CTA Button */}
        <div className="pt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffc700] hover:bg-[#ffb700] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ffc700]/25 group/btn"
          >
            <span>Ver más</span>
            <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
      
      {/* Bottom border animation */}
      <div className="h-1 bg-linear-to-r from-transparent via-[#ffc700] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </div>
  );
}

export default Cardinformes;
