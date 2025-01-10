import React from "react";
import "./intro.css";
import "react-google-fonts";
import ypc from "../assets/file (1).png";
import myCv from "../assets/Yasidu_Udayanga.pdf";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaGithub } from "react-icons/fa"; // Import the download icon

const Intro = () => {

  gsap.to(".fade-animate", {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine.out",
    force3D: true,
  });

  document.querySelectorAll(".fade-animate").forEach(function (box) {
    box.addEventListener("click", function () {
      gsap.to("box", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.1,
        ease: "back.in",
      });
    });
  });
  return (
    <div className="intro-page grid h-full intr-h lg:grid-cols-2 sm:grid-cols-1">
      <div className="m-auto items-center justify-center">
        <img
          className="my-pic rounded-full w-96 h-96 "
          src={ypc}
          alt="My PIC"
        />
      </div>
      <div className="m-auto items-center justify-center">
        <div className="block max-w-xl m-auto mr-4 p-20 lg:mt-20 mt-2 rounded-lg shadow">
          <h5
            style={{
              fontFamily: "Bebas Neue,monospace",
              fontWeight: "bolder",
              fontSize: "40px",
            }}
            className="mb-2 neon tracking-tight text-gray-900 text-center dark:text-white"
          >
            Yasidu Udayanga Pathiraja
          </h5>
          <p
            style={{
              fontFamily: "Source Code Pro, monospace",
              fontSize: "20px",
            }}
            className="font-normal text-gray-700 dark:text-gray-400"
          >
            I’m a passionate Full-stack Developer and student with expertise in
            building efficient and user-friendly web applications. Skilled in
            technologies like Angular, Spring Boot, react , Bootstrap , tailwind
            , MySQL.
          </p>
          <div className="grid" >
            <button style={{backgroundImage:""}} className="ml relative btn-continue inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group">
              
              <a
                href={myCv}
                download="Yasidu_Udayanga_CV"
                className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0"
                style={{ fontSize: "15px", textDecoration: "none", display:"flex" }}
              >
                Download CV
                <FaDownload className="ml-2" />
              </a>
            </button>
              <FaGithub/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
