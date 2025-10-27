import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Navbar() {
  return (
    <section className="w-full backdrop-blur-3xl fixed border-b border-[#ffc700]">
      <div className="px-3 max-w-5xl m-auto flex justify-between content-center h-20">
        <img src="./img/logo-vn.png" alt="" className="" />
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/nicolasvazquezpizzi/" className="text-2xl hover:text-[#ffc700] transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nicomvazquez" className="text-2xl hover:text-[#ffc700] transition">
            <FaGithub />
          </a>
          <a href="mailto:vazquezpizzinicolas@gmail.com" className="text-2xl hover:text-[#ffc700] transition">
            <BiLogoGmail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
