"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

const sections = ["about", "experience", "projects"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [glowStyle, setGlowStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const middleScreen = window.innerHeight / 2 + window.scrollY;

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

    const handleMouseMove = (e) => {
      setGlowStyle({
        background: `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(95,65,128, 0.25) 0%, rgba(0, 0, 0, 0) 50%)`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="glow-effect" style={glowStyle}></div>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <section id="about">
            <p className="font-soft-purple">
              An IT professional with{" "}
              <span className="font-white"> 4+ years </span> of experience in
              system development, IT project management, and technology
              research. I specialize in optimizing workflows and implementing
              strategic technology solutions that have{" "}
              <span className="font-white">
                {" "}
                improved operational efficiency{" "}
              </span>{" "}
              by up to <span className="font-white"> 80%. </span>
              <br />
              <br />
              At Trusmi Group, I develop IT systems and research AI, Automation,
              that successfully implementing{" "}
              <span className="font-white"> 70% </span> of research-driven
              ideas. I also oversee up to{" "}
              <span className="font-white"> 3 new IT programs monthly </span> to
              drive business innovation. Previously, at Complete Selular, I
              launched asset management platforms that{" "}
              <span className="font-white">
                {" "}
                reduced employee workload by 80%{" "}
              </span>{" "}
              and developed <span className="font-white"> 4 web </span> and{" "}
              <span className="font-white"> 3 mobile </span> applications.
              <br />
              <br />
              Beyond coding, I enhanced branding and revenue growth at Noko
              Farm,{" "}
              <span className="font-white">
                {" "}
                increasing awareness by 40%{" "}
              </span>{" "}
              and <span className="font-white"> revenue by 30% </span> through
              digital strategy and product innovation. With expertise in Agile
              methodologies, IT budgeting, and risk management, I ensure
              technology aligns with business goals.
              <br />
              <br />
              Passionate about problem-solving and emerging tech, I thrive on
              delivering impactful, data-driven IT solutions that drive business
              success.
            </p>
          </section>

          <section id="experience">
            <div className="experience-card">
              <div className="experience-content">
                <p className="date font-soft-purple">JUN 2024 — PRESENT</p>
                <div className="experience-details">
                  <p className="title">
                    IT Research and Development <br /> Trusmi Group{" "}
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    As a Research and Development Specialist, actively conducted
                    technology research including AI and Automation technologies
                    for company implementation. Presented findings weekly in a
                    strategic format for executive-level decision-making.
                    Utilized Design Thinking methodology for problem and
                    solution identification, with proven{" "}
                    <span className="font-white">
                      implementation success of up to 70%{" "}
                    </span>{" "}
                    of method-based ideas.
                  </p>
                  <div className="tags">
                    <span className="tag">AI</span>
                    <span className="tag">Automation</span>
                    <span className="tag">Research</span>
                    <span className="tag">Design Thinking</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="experience-card">
              <div className="experience-content">
                <p className="date font-soft-purple">FEB 2024 — PRESENT</p>
                <div className="experience-details">
                  <p className="title">
                    Software Engineer <br /> Trusmi Group{" "}
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    As a software engineer, I am responsible for developing
                    platforms according to business needs. Focused on problem
                    analysis, system design, and testing of{" "}
                    <span className="font-white">
                      {" "}
                      up to 3 new IT programs monthly.
                    </span>{" "}
                    Worked with IT Manager to provide innovative and strategic
                    solutions to improve operational effectiveness and ensure
                    the system remains agile through regular maintenance and
                    systematic documentation.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://punyarumah.rumahningrat.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> House Booking
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">UI UX</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="experience-card">
              <div className="experience-content">
                <p className="date font-soft-purple">JUL 2022 — MAY 2024</p>
                <div className="experience-details">
                  <p className="title">
                    Application Developer <br /> Complete Group{" "}
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    Launched an asset management platform as a fullstack
                    developer that successfully{" "}
                    <span className="font-white">
                      reduced employee workload by up to 80%.
                    </span>{" "}
                    Translated complex business challenges into practical
                    technology solutions. A total of{" "}
                    <span className="font-white"> 4 </span> web applications and{" "}
                    <span className="font-white"> 3 </span>
                    mobile applications were developed and maintained according
                    to SDLC approach and proper documentation.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://dnd.completeselular.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> DND
                    </a>
                    <a
                      href="https://grosir.mediaselularindonesia.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> SAM
                    </a>
                    <a
                      href="https://sumo.completeselular.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> SUMO
                    </a>
                    <a
                      href="https://modul.completeselular.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> Modul App
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Flutter</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="experience-card">
              <div className="experience-content">
                <p className="date font-soft-purple">AUG 2023 — DES 2023</p>
                <div className="experience-details">
                  <p className="title">
                    Business Development <br /> NOKOFARM{" "}
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    - Responsible for increasing product value through branding
                    strategies using technology and innovation. Successfully
                    developed the official website and{" "}
                    <span className="font-white">
                      {" "}
                      increased branding and awareness by up to 40%.
                    </span>
                    <br />- Focused on product development through data analysis
                    that strategically{" "}
                    <span className="font-white">
                      {" "}
                      increased company income by up to 30%{" "}
                    </span>{" "}
                    while maintaining optimal resource allocation.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://nokofarm.co.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> nokofarm.co.id
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">Wordpress</span>
                    <span className="tag">SEO</span>
                    <span className="tag">Project Management</span>
                    <span className="tag">Planning</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/Devina Viantie - IT CV 2025 - 2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              <h3 style={{ marginLeft: "18px", marginBottom: "10px" }}>
                View Full Resume ↗
              </h3>
            </a>
          </section>

          <section id="projects">
            <div className="experience-card">
              <div className="experience-content">
                <img
                  src="/BOOK MANDIRI.png"
                  alt="Project Thumbnail"
                  className="project-thumbnail"
                />
                <div className="experience-details">
                  <p className="title">
                    House Booking
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    Rumah Ningrat customers can easily book a home through the
                    platform, streamlining the process from reservation to
                    completion. This enhances sales productivity, improves
                    customer experience, and strengthens brand credibility
                    through seamless service and real-time monitoring.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://punyarumah.rumahningrat.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> House Booking
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">UI UX Design</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">CSS</span>
                    <span className="tag">Javascript</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-content">
                <img
                  src="/NOKO.png"
                  alt="Project Thumbnail"
                  className="project-thumbnail"
                />
                <div className="experience-details">
                  <p className="title">
                    NOKOFARM
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    NOKOFARM's website established its digital presence,
                    showcasing products, enhancing brand identity, and improving
                    search rankings with a blog on sustainable farming,
                    supporting digital marketing efforts.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://nokofarm.co.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> nokofarm.co.id
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">Wordpress</span>
                    <span className="tag">CSS</span>
                    <span className="tag">SEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-content">
                <img
                  src="/DND.png"
                  alt="Project Thumbnail"
                  className="project-thumbnail"
                />
                <div className="experience-details">
                  <p className="title">
                    Do and Done
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    Complete Group needed a task management system for all of
                    its division to streamline operations and track KPI's. The
                    web and mobile platforms improved task visibility, enhanced
                    KPI tracking for managers, and kept field teams connected
                    and productive.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://dnd.completeselular.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> DND
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Flutter</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-content">
                <img
                  src="/SUMO.png"
                  alt="Project Thumbnail"
                  className="project-thumbnail"
                />
                <div className="experience-details">
                  <p className="title">
                    Submission Mobile
                    <span className="arrow"> ↗</span>
                  </p>
                  <p className="description font-soft-purple">
                    Complete Group's General Affairs department replaced manual,
                    email-based asset management with an automated system,
                    streamlining requests, IT support, and tracking. QR-based
                    management improved accuracy, while automated workflows cut
                    processing time and admin overhead.
                  </p>
                  <p className="description font-soft-purple">
                    <a
                      href="https://sumo.completeselular.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link-purple"
                    >
                      <i className="fa fa-link"></i> SUMO
                    </a>
                  </p>
                  <div className="tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="end-note font-soft-purple">
              Built with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link-white"
              >
                {" "}
                Next.js{" "}
              </a>{" "}
              and <span className="font-white">CSS</span>, deployed with Vercel.
              <br /> All text is set in the{" "}
              <a
                href="https://rsms.me/inter/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link-white"
              >
                Inter{" "}
              </a>
              typeface.
              <br />
              Inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link-white"
              >
                Brittany Chiang.
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
