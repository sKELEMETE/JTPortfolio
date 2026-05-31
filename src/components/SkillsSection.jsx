import { useState } from "react";
import { motion } from "framer-motion";

import SkillCard, { SkillTitle, LockSkill } from "./skillcard";

import backIcon from "../assets/imgs/back.svg";
import dev from "../assets/imgs/dev.svg";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleBack = () => {
    setActiveCategory(null);
  };

  return (
    <div className="w-full min-h-[600px] flex flex-col justify-start items-start">
      <motion.div
        key={activeCategory ? "cards" : "titles"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {activeCategory ? (
          <>
            <button
              onClick={handleBack}
              className="mb-6 hover:scale-110 transition-transform duration-200"
            >
              <img
                src={backIcon}
                alt="back"
                className="w-10 sm:w-14 opacity-70"
              />
            </button>

            {activeCategory === "front-end" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <SkillCard icon={dev} Name="Python" Percent={85} />
                <SkillCard icon={dev} Name="PHP" Percent={60} />
                <SkillCard icon={dev} Name="Supabase" Percent={50}/>
                <SkillCard icon={dev} Name="Next.JS" Percent={50}/>
                <SkillCard icon={dev} Name="Flutter" Percent={50}/>
              </div>
            )}

            {activeCategory === "database" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <SkillCard icon={dev} Name="MySQL" Percent={90} />
                <SkillCard icon={dev} Name="PostgreSQL" Percent={20}/>
                <LockSkill icon={dev} Name="NoSQL" />
                <LockSkill icon={dev} Name="MongoDB" />
              </div>
            )}

            {activeCategory === "tools" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <SkillCard icon={dev} Name="Git & GitHub" Percent={40} />
                <SkillCard icon={dev} Name="VS Code" Percent={80} />
                <SkillCard icon={dev} Name="Figma" Percent={70} />
                <SkillCard icon={dev} Name="Canva" Percent={80} />
                <SkillCard icon={dev} Name="Notion" Percent={60} />
                <SkillCard icon={dev} Name="ChatGPT/Codex" Percent={60} />
                <SkillCard icon={dev} Name="Gemini" Percent={60} />

              </div>
            )}

            {activeCategory === "networking" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <SkillCard
                  icon={dev}
                  Name="Cybersecurity Awareness"
                  Percent={40}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-3 w-full">
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
          </div>
        )}
      </motion.div>
    </div>
  );
}