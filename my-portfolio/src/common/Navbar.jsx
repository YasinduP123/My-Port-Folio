import React from "react";
import "flowbite";
import "flowbite-react";
import ypc from "../assets/ypc.png";
import water from "../assets/6.jpg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import "../common/nav-bar.css";
import Intro from "../Intro/Intro";
import About from "../about/About";
import imagesLoaded from 'imagesloaded';


function Navbar() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const scrollContentRef = useRef(null);
  const containerRef = useRef(null);

  const data = useRef({
    ease: 0.02,
    current: 0,
    last: 0,
    rounded: 0,
  });

  useEffect(() => {
    const setHeight = () => {
      if (scrollContentRef.current) {
        document.body.style.height = `${
          scrollContentRef.current.getBoundingClientRect().height
        }px`;
      }
    };

    const smoothScroll = () => {
      data.current.current = window.scrollY;
      data.current.last +=
        (data.current.current - data.current.last) * data.current.ease;
      data.current.rounded = Math.round(data.current.last * 100) / 100;

      const diff = data.current.current - data.current.rounded;
      const acc = diff / windowDimensions.width;
      const skew = acc * 7.5;

      if (scrollContentRef.current) {
        scrollContentRef.current.style.transform = `translate3d(0, -${data.current.rounded}px, 0) skewY(${skew}deg)`;
      }

      requestAnimationFrame(smoothScroll);
    };

    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      setHeight();
      data.current.rounded = data.current.last = data.current.current;
    };

    const preload = () => {
      if (scrollContentRef.current) {
        imagesLoaded(scrollContentRef.current, setHeight);
      }
    };

    const init = () => {
      if (containerRef.current) {
        containerRef.current.style.position = "fixed";
        containerRef.current.style.top = 0;
        containerRef.current.style.left = 0;
        containerRef.current.style.height = "100%";
        containerRef.current.style.width = "100%";
        containerRef.current.style.overflow = "hidden";
      }
      setHeight();
      window.addEventListener("resize", handleResize);
      preload();
      requestAnimationFrame(smoothScroll);
    };

    init();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowDimensions.width]);
  
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
        }}
        className="marginBottom: 120px z-10"
      >
        <nav
          style={{
            fontFamily: '"Alfa Slab One", sans-serif',
            backgroundColor: "black",
          }}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={ypc} className="h-8 mt-10" alt="Logo" />
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
              <ul className="collapesed-navbar-animation collapesed-navbar font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
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
                    Career
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
      <div data-scroll ref={containerRef}>
        <div data-scroll-content ref={scrollContentRef}>
          <figure>
            <div className="mx-10">
              <div id="home" className="pt-16">
                <Intro />
              </div>
              <div id="about" className=" pt-16">
              <h1 className="main-title text-center *: uppercase">My Career</h1>
                <About className="m-auto" />
              </div>
              <div id="services" className="pt-16"></div>
              <div id="pricing" className="pt-16"></div>
              <div id="contact" className="pt-16"></div>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default Navbar;
