"use client";

import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const sections = ["about", "experience", "projects"];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const content = document.querySelector(".content");

    const handleScroll = () => {
      const middleScreen = content.scrollTop + content.clientHeight / 2;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (middleScreen >= top && middleScreen < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    content.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    const target = document.getElementById(section);
    const content = document.querySelector(".content");

    if (target && content) {
      content.scrollTo({
        top: target.offsetTop,
        behavior: "smooth", // this gives you the smooth scroll
      });

      setActiveSection(section); // optional: immediately set active class
    }
  };


  return (
    <div className="sidebar" style={{ marginLeft: "60px" }}>
      <p
        style={{
          marginLeft: "10px",
          marginBottom: "0px",
          // color: "white",
          fontWeight: "bold",
          fontSize: "40px",
        }}
        className="font-white"
      >
        Devina Viantie
      </p>
      <h3
        style={{ marginLeft: "10px", marginBottom: "10px" }}
        className="font-white"
      >
        Software Engineer
      </h3>
      <p
        className="font-soft-purple"
        style={{ marginLeft: "10px", marginBottom: "40px" }}
      >
        Understanding and transforming your challenges <br />
        <span style={{ marginTop: "10px", display: "inline-block" }}>
          into smart, tailored solutions.
        </span>
      </p>
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`} // optional (for normal URL update)
          onClick={(e) => {
            e.preventDefault(); // prevent default link jump
            handleClick(section);
          }}
          className={activeSection === section ? "active" : ""}
          style={{ color: activeSection === section ? "white" : "#b7abd6" }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
      <div className="social-icons">
        <a
          href="https://github.com/appdevina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/devina-viantie-05755a132/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/devinaviantie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
