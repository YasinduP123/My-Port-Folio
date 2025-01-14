import React from "react";
import "./intro.css";
import "react-google-fonts";
import ypc from "../assets/file (1).png";
import myCv from "../assets/Yasidu_Udayanga.pdf";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa"; // Import the download icon
import ButtonDowload from "../custom-component/ButtonDowload";

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
    <>
      <div className="intro-page grid h-full intr-h lg:grid-cols-2 sm:grid-cols-1">
        <div className="m-auto flex items-center justify-center">
          <img
            className="my-pic rounded-full lg:w-96 lg:h-96"
            src={ypc}
            alt="My PIC"
          />
        </div>

        <div className="m-auto flex items-center justify-center">
          <div className="block max-w-xl m-auto p-20 lg:mt-20 mt-2 rounded-lg shadow">
            <h5
              style={{
                fontFamily: "Bebas Neue, monospace",
                fontWeight: "bolder",
                fontSize: "40px",
              }}
              className="mb-2 neon tracking-tight text-gray-900 text-center text-flick dark:text-white"
            ><span>
              <span className="glowing-txt">Yasidu<span className="faulty-letter"> Uda</span>yanga Pathiraja</span>
            </span>
            </h5>
            <p
              style={{
                fontFamily: "Source Code Pro, monospace",
                fontSize: "20px",
              }}
              className="font-normal text-gray-700 dark:text-gray-400"
            >
              I’m a passionate Full-stack Developer and student with expertise
              in building efficient and user-friendly web applications. Skilled
              in technologies like Angular, Spring Boot, React, Bootstrap,
              Tailwind, and MySQL.
            </p>
            <div className="flex mt-5">
              <div className="shrink w-auto h-14">
                <ButtonDowload />
              </div>
              <a href="https://github.com/YasinduP123" target="_blank">
                <div className="flex-none w-14 mx-5 h-14">
                  <span className="btn-icon">
                    <FaGithub className="git-icon git-flick cursor-pointer flex items-start mt-2" />
                  </span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/yasindu-pathiraja-411751317"
                target="_blank"
              >
                <div className="flex-none w-14 h-14">
                  <button className="btn-icon">
                    <FaLinkedinIn className="cursor-pointer linkedIn-flick flex items-start mt-2" />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
