import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/mecopy.jpg";
import {
  FaFacebookF,
  FaRss,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./style.css";

/* links classname */
let linkClassName =
  "inline-block border-y border-y-white w-full  text-black py-3 text-center ";
let activeLinkClassName =
  "inline-block w-full border-y border-y-white   py-3 text-center";

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-100 basis-4/12 h-screen max-h-full overflow-y-auto">
      <div className="text-center mt-2">
        <p className="italic font-mono ">#Hello_world!</p>
        <p className=" italic font-mono">#new_&_creative_code_everyday</p>
      </div>
      <header className=" text-center py-6 text-black uppercase">
        <img src={logo} alt="Logo" className="rounded-full mx-auto  w-44" />
        <h4 className=" italic text-1xl mt-3 font-bold font-serif">
          bELGAILA Mohamed Zakaria
        </h4>
        <h4 className="text-sm font-serif text-yellow-500">
          Free Web Developer
        </h4>

        <h5 className="lowercase "></h5>

        <p className="italic font-mono">telephone :</p>
        <p className="oldstyle-nums">+212662751355</p>
        <div className="icons flex justify-center align-center">
          <a
            href="belgaila.mohamed.zakaria@gmail.com"
            className="flex justify-center p-1  bg-yellow-300 hover:bg-red-600"
            target="_blank"
          >
            <SiGmail color="white" className="sigmail" />
          </a>
        </div>
      </header>
      <nav className="">
        <ul className="flex flex-col justify-center align-center w-full">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/"
            >
              Intro
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/education"
            >
              Education & Career
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* social media icons */}
      <div className="icons flex justify-center align-center py-12 gap-14  md:gap-1">
        <a
          href="https://web.facebook.com/Belgaila.mohamed.zakaria"
          target="_blank"
          className="p-2 bg-yellow-300  hover:bg-red-600"
        >
          <FaFacebookF color="white" className="text-lg" />
        </a>

        <a
          href="http://"
          target="_blank"
          className="p-2 bg-yellow-300  hover:bg-red-600"
        >
          <FaLinkedin color="white" className="text-lg" />
        </a>

        <a
          href="https://github.com/BMZ89/"
          target="_blank"
          className="p-2 bg-yellow-300  hover:bg-red-600"
        >
          <FaGithub color="white" className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
