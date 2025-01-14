import React from "react";
import universeVideo from "../assets/universe-video.mp4";

const ProjectCard = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#pin-windmill",
      start: "50% 50%",
      endTrigger: "#pin-windmill-wrap",
      end: "bottom 50%",
    },
  });

  tl.to("#pin-windmill-svg", {
    rotateZ: 900,
  });

  return (
    <></>
  );
};

export default ProjectCard;
