import React from "react";
import "./button.css";
import myCv from "../assets/Yasidu_Udayanga.pdf";
import { FaDownload } from "react-icons/fa";

const ButtonDowload = () => {
  return (
    <>
      <button className="glowing-btn">
        <a
          href={myCv}
          download="Yasidu_Udayanga_CV"
          className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 flex items-center"
          style={{
            fontSize: "15px",
            textDecoration: "none",
          }}
        >
          <span className="glowing-txt">
            Downl<span className="faulty-letter">oad</span> CV
          </span>
          <FaDownload className="ml-5 faulty-letter" />
        </a>
      </button>
    </>
  );
};

export default ButtonDowload;
