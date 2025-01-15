import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="justify-center grid outer">
        <div className="card">
          <div data-aos="fade-left" className="info">
            <h3 className="title">
              School Life{" "}
              <span style={{ color: "grey" }}>
                <small>(2019 - 2024)(since O/L)</small>
              </span>
            </h3>
            <br></br>
            <p>
              I successfully completed my Ordinary Level (O/L) examination in
              2019, achieving 4 As, 4 Bs, and 1 C. Following this, I pursued the
              Mathematics stream for my Advanced Level (A/L) studies, which I
              completed with 3 S passes. This marked the conclusion of my school
              education.{" "}
            </p>
          </div>
        </div>
        <div  className="card">
          <div data-aos="fade-right" className="info">
            <h3 className="title">
              <span style={{ color: "grey" }}>
                <small>(2024 - FEB to 2024 - JUN)</small>
              </span>{" "}
              NVQ Level 3
            </h3>
            <br></br>
            <p>
              I completed an NVQ Level 3 course at the Lidekevery Educational
              Institute, where I gained skills in Microsoft Word, Excel,
              PowerPoint, and Access, along with a strong foundation in basic IT
              knowledge.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <div data-aos="fade-left" className="info">
            <h3 className="title">
              ICET Certified master (ICD){" "}
              <span style={{ color: "grey" }}>
                <small>(2024 - FEB to present)</small>
              </span>
            </h3>
            <br></br>
            <p>
              I started my software development career with ICET as a trainee
              Fullstack Developer. During this diploma-level course, I gained
              skills in programming languages like Java, Dart, HTML, CSS, and
              JavaScript, along with expertise in database management using
              MySQL. I also worked with modern frameworks such as Spring Boot,
              React, and Angular. This training enabled me to develop
              user-friendly web applications and websites, enhancing both my
              technical and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
