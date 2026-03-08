import { useState } from "react";
import { motion } from "framer-motion";
import SkillCard, { SkillTitle, LockSkill } from "./skillcard";

import backIcon from "../assets/imgs/back.svg";
import htmlIcon from "../assets/imgs/html.svg";
import dev from "../assets/imgs/dev.svg";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleBack = () => setActiveCategory(null);

  return (
    <div className="flex h-full w-full flex-col items-start justify-center px-2 sm:px-4 lg:pl-24 xl:pl-40">
      <motion.div
        key={activeCategory ? "cards" : "titles"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex h-full w-full flex-col items-start justify-center"
      >
        {activeCategory ? (
          <>
            <button onClick={handleBack} className="focus:outline-none">
              <img
                src={backIcon}
                alt="Back"
                className="w-14 cursor-pointer opacity-50 transition-transform duration-200 hover:scale-110 hover:opacity-100 sm:w-16 lg:w-20 lg:-translate-x-8 lg:-translate-y-3"
              />
            </button>

            {activeCategory === "front-end" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard icon={dev} Name="HTML" Percent={85} />
                <SkillCard icon={dev} Name="CSS" Percent={85} />
                <SkillCard icon={dev} Name="JavaScript" Percent={50} />
                <SkillCard icon={dev} Name="React.js" Percent={45} />
                <SkillCard icon={dev} Name="Bootstrap" Percent={30} />
                <SkillCard icon={dev} Name="Responsive Design" Percent={90} />
                <SkillCard icon={dev} Name="UI/UX Fundamentals" Percent={70} />
                <SkillCard icon={dev} Name="TailWind" Percent={60} />
              </div>
            )}
            {activeCategory === "back-end" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard icon={dev} Name={<>Python</>} Percent={85} />
                <SkillCard icon={dev} Name="PHP" Percent={60} />
                <LockSkill icon={dev} Name="API" />
                <LockSkill icon={dev} Name="Node.JS" />
              </div>
            )}
            {activeCategory === "database" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard icon={dev} Name="MySQL" Percent={20} />
                <LockSkill icon={dev} Name="NoSQL" />
                <LockSkill icon={dev} Name="MongoDB" />
              </div>
            )}
            {activeCategory === "tools" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard icon={dev} Name="Git & GitHub" Percent={40} />
                <SkillCard icon={dev} Name="VS Code" Percent={80} />
                <SkillCard icon={dev} Name="Figma" Percent={70} />
                <SkillCard icon={dev} Name="Canva" Percent={80} />
                <SkillCard icon={dev} Name="Notion" Percent={60} />
              </div>
            )}
            {activeCategory === "networking" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard
                  icon={dev}
                  Name="Hardware/Software Troubleshooting"
                  Percent={90}
                />
                <SkillCard
                  icon={dev}
                  Name="LAN/WAN Configuration"
                  Percent={40}
                />
                <SkillCard icon={dev} Name="Network Security" Percent={50} />
              </div>
            )}
            {activeCategory === "extra" && (
              <div className="flex h-[85%] w-full flex-col flex-wrap items-start justify-start gap-y-3 md:flex-wrap-reverse">
                <SkillCard
                  icon={dev}
                  Name="Cybersecurity Awareness"
                  Percent={40}
                />
              </div>
            )}
          </>
        ) : (
          <>
            <SkillTitle
              Title="Front-End Development"
              onClick={() => setActiveCategory("front-end")}
            />
            <SkillTitle
              Title="Back-End Development"
              onClick={() => setActiveCategory("back-end")}
            />
            <SkillTitle
              Title="Database Management"
              onClick={() => setActiveCategory("database")}
            />
            <SkillTitle
              Title="Creative Tools"
              onClick={() => setActiveCategory("tools")}
            />
            <SkillTitle
              Title="Networking & IT Support"
              onClick={() => setActiveCategory("networking")}
            />
            <SkillTitle
              Title="Additional Skills"
              onClick={() => setActiveCategory("extra")}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
