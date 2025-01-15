import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./Intro/Intro";
import { useEffect } from "react";
import Navbar from "./common/NavBar";
import "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
