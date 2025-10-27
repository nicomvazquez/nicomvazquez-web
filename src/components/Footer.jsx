import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <section className="w-full bg-gray-900 px-3">
      <div className="max-w-5xl m-auto flex justify-between">
        <div className="max-w-lg flex flex-col my-10 gap-5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            Inicio
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            About
          </Link>
          <Link
            to="reports"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            Reports
          </Link>
          <Link
            to="news"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            News Letter
          </Link>
          <Link
            to="proyects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            Proyects
          </Link>
          <Link
            to="advisor"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-white hover:text-[#ffc700] transition"
          >
            Advisor
          </Link>
        </div>
        <div className="max-w-lg flex flex-col my-10 gap-5">
          <a href="https://www.linkedin.com/in/nicolasvazquezpizzi/">
            Linkedin
          </a>
          <a href="mailto:vazquezpizzinicolas@gmail.com">Gmail</a>
          <a href="https://github.com/nicomvazquez">Github</a>
        </div>
        <div className="max-w-lg flex flex-col my-10 gap-2 justify-baseline">
          <img className="w-20" src="./img/logo-vn.png" alt="" />
          <p>&copy; nicomvazquez</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
