import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/card.jsx";
import { projectsData } from "../js/projectsData.js";
import ContactForm from "../components/email.jsx";

import jt3d from "../assets/imgs/jt3d.svg";

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

  return (
    <div
      className="
        sections
        flex
        flex-col
        min-h-screen
        overflow-hidden
        bg-[#0f172a]
        pt-24
      "
      style={{
        background: `
          radial-gradient(circle at top left, rgba(125,211,252,.12), transparent 40%),
          radial-gradient(circle at top right, rgba(192,132,252,.12), transparent 40%),
          radial-gradient(circle at bottom, rgba(0,173,181,.08), transparent 50%),
          #0f172a
        `,
      }}
    >
      <div
        className="
          relative
          flex
          flex-col
          lg:flex-row
          justify-center
          items-center
          gap-20
          px-4
          sm:px-6
          lg:px-12
          py-10
          w-full
        "
      >
        {/* LEFT CONTAINER */}
        <div className="h-full w-full lg:w-[42%] flex flex-col items-center gap-5">

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              overflow-hidden

              flex
              flex-col
              justify-center
              items-center

              w-full
              min-h-[320px]
              sm:min-h-[400px]
              lg:min-h-[420px]

              rounded-[36px]

              bg-white/[0.06]
              backdrop-blur-[42px]
              saturate-150
              contrast-125

              border border-white/10

              shadow-[0_20px_80px_rgba(0,0,0,0.35)]

              transition-all duration-500

              px-4 sm:px-8 py-8

              before:absolute
              before:inset-0
              before:rounded-[36px]
              before:bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_55%)]
              before:opacity-60

              after:absolute
              after:inset-0
              after:rounded-[36px]
              after:bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_40%,rgba(255,255,255,0.06))]
              after:pointer-events-none
            "
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="
                absolute
                -top-1/2
                left-[-40%]
                w-[180%]
                h-[180%]
                rotate-12

                bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]

                animate-[shine_8s_ease-in-out_infinite]
              " />
            </div>

            <div className="
              absolute inset-0
              opacity-[0.03]
              mix-blend-overlay
              pointer-events-none
              bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
            " />

            {/* CONTENT */}
            <div
              key={fadeKey}
              className="
                absolute
                inset-0

                flex
                flex-col
                items-center
                justify-center

                transition-all
                duration-500
                ease-in-out

                p-5
                z-10
              "
            >
              {activeDiv === "intro" && (
                <>
                  <h1
                    className="
                      text-white
                      font-[Poppins]
                      font-semibold
                      text-center
                      leading-tight
                      text-2xl sm:text-3xl lg:text-4xl
                    "
                  >
                    Design. Build. Solve.
                  </h1>

                  <p
                    className="
                      text-white/60
                      mt-4
                      text-lg sm:text-xl lg:text-2xl
                      text-center
                    "
                  >
                    Minimal. Modern. Fluid.
                  </p>
                </>
              )}

              {activeDiv === "contact" && (
                <div className="w-full">
                  <ContactForm />
                </div>
              )}

              {activeDiv === "projects" && (
                <div className="p-2 w-full grid grid-cols-1 gap-6 overflow-y-auto h-full hide-scrollbar">
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
          </motion.div>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleContactClick}
              className="
                relative
                overflow-hidden

                w-full sm:w-1/2
                h-[60px]

                rounded-2xl

                bg-white/[0.06]
                backdrop-blur-[30px]

                border border-white/10

                shadow-[0_10px_40px_rgba(0,0,0,0.25)]

                hover:bg-white/[0.10]
                hover:scale-[1.02]

                transition-all duration-300

                cursor-pointer
              "
            >
              <span className="relative z-10 text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                CONTACT ME
              </span>
            </button>

            <button
              onClick={handleProjectsClick}
              className="
                relative
                overflow-hidden

                w-full sm:w-1/2
                h-[60px]

                rounded-2xl

                bg-white/[0.06]
                backdrop-blur-[30px]

                border border-white/10

                shadow-[0_10px_40px_rgba(0,0,0,0.25)]

                hover:bg-white/[0.10]
                hover:scale-[1.02]

                transition-all duration-300

                cursor-pointer
              "
            >
              <span className="relative z-10 text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                PROJECTS
              </span>
            </button>
          </div>
        </div>

        {/* DESKTOP IMAGE */}
        <div
          className="
            hidden
            lg:flex
            w-[280px] xl:w-[340px]
            items-center
            justify-center
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 2px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        >
          <img
            src={jt3d}
            alt="jt3d"
            className="w-full object-contain"
            style={{
              filter: "drop-shadow(0 0 40px rgba(255,255,255,0.12))",
            }}
          />
        </div>
      </div>
    </div>
  );
}