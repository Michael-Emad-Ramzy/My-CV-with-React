import "./Header.css";
import reactImg from "../../imgs/Cv-img.jpg";
import Links from "./Links";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <header data-aos="fade-up">
        <img id="image" src={reactImg} alt="Profile photo" />
        <h1>
          Michael<span> Emad</span>
          <p >Junior Front-End (React) Developer </p>
        </h1>
      </header>
      <div className="socialContainer" data-aos="zoom-in">
        <Links />
      </div>
    </>
  );
}
