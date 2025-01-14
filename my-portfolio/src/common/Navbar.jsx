import React from "react";
import "flowbite";
import "flowbite-react";
import ypc from "../assets/ypc.png";
import water from "../assets/6.jpg";
import ProjectCard from "../project-card/ProjectCard";
import { Link } from "react-scroll";
import "../common/nav-bar.css";
import Intro from "../Intro/Intro";
import About from "../about/About";

function Navbar() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          
        }}
        className="marginBottom: 120px z-10"
      >
        <nav  style={{ fontFamily: '"Alfa Slab One", sans-serif', backgroundColor:"black" }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={ypc} className="h-8" alt="Logo" />
              <span className="navbar-title text-flick self-center font-semibold whitespace-nowrap dark:text-white">
              <span className="glowing-txt">
              Yasidu<span className="faulty-letter"> Pathiraja</span>
              </span>
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto hover:cursor-pointer"
              id="navbar-default"
            >
              <ul className=" collapesed-navbar font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={700}
                    className="nav-link nav-link-ltr block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={700}
                    className="nav-link nav-link-ltr block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={700}
                    className="nav-link nav-link-ltr block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="pricing"
                    smooth={true}
                    duration={700}
                    className="nav-link nav-link-ltr block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="nav-link nav-link-ltr block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="mx-10">
        <div id="home" className="pt-16">
            <Intro />
        </div>
        <div id="about" className=" pt-16">
          <About className="m-auto" />
        </div>
        <div id="services" className="pt-16">

        </div>
        <div id="pricing" className="pt-16">
          
        </div>
        <div id="contact" className="pt-16">
           
        </div>
      </div>
    </>
  );
}

export default Navbar;
