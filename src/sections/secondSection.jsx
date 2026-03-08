import { useState } from "react";
import { motion } from "framer-motion";
import Topbar from "../components/topbar";
import RadioSelector from "../components/radioSelector";
import gridImg from "../assets/imgs/grid.svg";
import jt3d from "../assets/imgs/jtcon.svg";
import jt3dback from "../assets/imgs/jt3dback.svg";
import SkillsSection from "../components/SkillsSection";

const skillsData = [
  { id: 1, label: "Fast Learner", icon: "⚡", angle: 30, distance: 160 },
  { id: 2, label: "Collaboration", icon: "🤝", angle: 90, distance: 160 },
  { id: 3, label: "Problem-Solving", icon: "🧠", angle: 150, distance: 160 },
  { id: 4, label: "Adaptability", icon: "🌍", angle: 210, distance: 160 },
  { id: 5, label: "Time Management", icon: "⏰", angle: 270, distance: 160 },
  { id: 6, label: "Communication", icon: "💬", angle: 330, distance: 160 },
  { id: 7, label: "Leadership", icon: "🏆", angle: 420, distance: 250 },
  { id: 7, label: "Creativity", icon: "🎨", angle: 240, distance: 250 },
];

const CONTENT = {
  soft: {
    left: {
      component: (
        <div className="w-full h-full flex items-end justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-full h-full flex items-end justify-center"
          >
            <img src={gridImg} alt="grid" className="absolute w-[85%]" />
            <img src={jt3d} alt="jt3d" className="z-10 w-[75%]" />
          </motion.div>
        </div>
      ),
    },
    right: {
      component: (
        <div className="relative flex h-full w-full cursor-default items-start justify-center pt-6 sm:pt-10 lg:justify-start">
          <div className="relative aspect-square w-[280px] sm:w-[340px] lg:w-[380px]">
            <motion.div
              className="absolute top-1/2 left-1/2 w-[90px] h-[90px] 
rounded-full 
bg-gradient-to-b from-[#00ADB540] to-[#00ADB520] 
backdrop-blur-[6px] 
border border-[#00ADB5]/60 
shadow-[0_0_25px_#00ADB560,0_0_60px_#00ADB520,inset_0_0_20px_#00ADB520]
flex items-center justify-center 
text-white font-semibold 
transition-all duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)] 
hover:scale-110 hover:shadow-[0_0_40px_#00ADB5,0_0_80px_#00ADB520,inset_0_0_30px_#00ADB540]
"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>

            {skillsData.map((skill) => (
              <SkillNode
                key={skill.id}
                label={skill.label}
                icon={skill.icon}
                angle={skill.angle}
                distance={skill.distance}
              />
            ))}
          </div>
        </div>
      ),
    },
  },

  tech: {
    left: {
      component: <SkillsSection />,
    },

    right: {
      component: (
        <div className="flex h-full w-full items-end justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-full h-full flex items-end justify-center"
          >
            <img src={gridImg} alt="grid" className="absolute w-[85%]" />
            <img
              src={jt3dback}
              alt="jt3dback"
              className="z-10 w-[70%] sm:w-[62%]"
            />
          </motion.div>
        </div>
      ),
    },
  },
};

export default function SecondSection() {
  const [selected, setSelected] = useState("soft");
  const layout = CONTENT[selected];

  return (
    <div className="flex min-h-screen w-full flex-col border-b border-[#00ADB5] bg-[#222831] px-4 pb-8 pt-6 sm:px-6 lg:px-0">
      {/* <Topbar /> */}
      <div className="flex h-full w-full flex-col gap-6 pt-6 lg:flex-row lg:px-5 lg:pt-25">
        <div className="w-full lg:h-full lg:w-[15%] lg:pl-10 lg:pt-10">
          <RadioSelector onChange={setSelected} />
        </div>

        <div className="relative flex h-full w-full flex-col gap-6 lg:flex-row">
          {["left", "right"].map((side) => (
            <AnimatedColorCard key={`${selected}-${side}`}>
              {layout[side].component}
            </AnimatedColorCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedColorCard({ children }) {
  return (
    <motion.div
      className="h-[360px] w-full overflow-hidden rounded-2xl md:h-[420px] lg:h-full lg:flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <div className="h-full w-full">{children}</div>
    </motion.div>
  );
}

function SkillNode({ label, icon, angle, distance }) {
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * distance;
  const y = Math.sin(radians) * distance;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className="absolute flex flex-col items-center"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          textShadow: "0 0 12px #00ADB5",
        }}
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#393E46] text-xl text-[#00ADB5] shadow-[0_0_10px_#00ADB5] sm:h-[70px] sm:w-[70px] sm:text-2xl"
      >
        {icon}
      </motion.div>
      <p className="mt-2 max-w-[90px] text-center font-[Poppins] text-xs text-gray-200 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
