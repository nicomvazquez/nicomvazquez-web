import React from "react";

function Cardinformes({ img, description, url }) {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gray-900 shadow-lg border border-gray-700 transform transition duration-300 shadow-[#ffc700]/10">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Imagen del informe"
      />
      <div className="p-6">
        <p className="text-gray-300 text-md mb-4 line-clamp-3">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#ffc700] hover:bg-[#c09600] text-black font-medium rounded-lg transition duration-200"
        >
          Ver
        </a>
      </div>
    </div>
  );
}

export default Cardinformes;
