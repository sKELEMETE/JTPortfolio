import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Topbar from "../components/topbar.jsx";
import ProjectCard from "../components/card.jsx";
import LinkDesign from "../links/link.jsx";
import { projectsData } from "../js/projectsData.js";
import ContactForm from "../components/email.jsx";
import { div } from "framer-motion/client";
import jt3d from "../src/assets/imgs/jt3d.svg";

export default function FirstSection() {
  const [activeDiv, setActiveDiv] = useState("intro");
  const [fadeKey, setFadeKey] = useState(0);
  const [showLinks, setShowLinks] = useState(false);

  const handleContactClick = () => {
    setFadeKey((prev) => prev + 1);
    setActiveDiv(activeDiv === "contact" ? "intro" : "contact");
  };

  const handleProjectsClick = () => {
    setFadeKey((prev) => prev + 1);
    setActiveDiv(activeDiv === "projects" ? "intro" : "projects");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="sections flex flex-col">
      {/* <Topbar /> */}

      <div className="mt-[4%] flex flex-row justify-evenly items-center">
        {/* Left container */}
        <div className=" translate-y-10 flex flex-col justify-center items-center w-[50%] h-full">
          <div
            className={`left-container flex flex-col justify-start items-center w-full h-[420px] max-h-[500px] rounded-[13px] shadow-[5px_5px_20px_0_rgba(0,173,181,0.2)] -translate-y-10 overflow-hidden relative border-1 border-[#00ADB5] bg-red-100 transition-opacity duration-500 ${
              activeDiv === "contact" || activeDiv === "projects"
                ? "!bg-none !border-none "
                : "opacity-100"
            }`}
          >
            {/* Fade transition wrapper */}
            <div
              key={fadeKey}
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out animate-fade"
            >
              {activeDiv === "intro" && (
                <>
                  <h1 className=" text-white font-[Poppins] font-bold text-[40px] text-center leading-[110%]">
                    DESIGNER <span className="font-light text-[85%]">|</span>{" "}
                    DEVELOPER
                    <br />& TROUBLESHOOTING
                  </h1>
                  <p className="ml-10 mt-5 text-white text-[20px] font-thin font-[Poppins] w-[70%]">
                    I combine creative design with technical mastery to craft
                    seamless, high-performing digital experiences. From visuals
                    to code, I transform ideas into polished solutions that are
                    both smart and striking.
                  </p>
                </>
              )}

              {activeDiv === "contact" && <ContactForm />}

              {activeDiv === "projects" && (
                <div className="p-5 w-full grid grid-cols-1 gap-6 overflow-y-auto h-full hide-scrollbar scroll-smooth">
                  {projectsData.map((project, i) => (
                    <ProjectCard
                      key={i}
                      title={project.title}
                      description={project.description}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="pl-5 pr-5 flex flex-row items-center justify-between w-full h-[10%] -translate-y-5">
            <button
              onClick={handleContactClick}
              className={`bg-[#00ADB5] h-full w-[45%] rounded-[10px] transition duration-300 hover:scale-105 hover:cursor-pointer ${
                activeDiv === "contact" ? "brightness-110" : ""
              }`}
            >
              <h1 className="font-semibold font-[Poppins] text-white text-[30px]">
                CONTACT ME
              </h1>
            </button>
            <button
              onClick={handleProjectsClick}
              className={`border-2 border-[#00ADB5] h-full w-[45%] rounded-[10px] transition duration-300 hover:scale-105 hover:cursor-pointer ${
                activeDiv === "projects" ? "bg-[#00ADB5]/20" : ""
              }`}
            >
              <h1 className="font-semibold font-[Poppins] text-[#00ADB5] text-[30px]">
                PROJECTS
              </h1>
            </button>
          </div>
        </div>
        {/* Left side image */}
        <div
          className="w-60 h-80 rounded-full flex items-center justify-center translate-x-20 translate-y-5"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 173, 181, 0.1) 2px, transparent 0)",
            backgroundSize: "30px 30px",
            backgroundPosition: "-5px -5px",
          }}
        >
          <img
            src={jt3d}
            alt="jt3d"
            className="h-[600px] w-auto object-contain transition-all duration-500 ease-in-out"
          />
        </div>
        {/* Links */}
        <div className="h-[85%] w-[5%] flex flex-col justify-end items-center">
          <AnimatePresence>
            {showLinks && (
              <motion.div
                key="linkDesign"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                exit={{ height: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="overflow-hidden flex justify-center items-end w-full"
              >
                <LinkDesign />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={() => setShowLinks(!showLinks)}
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
            title="Attach"
          >
            <svg
              className="stroke-blue-300 fill-none"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 -0.5 25 25"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5"
              ></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
