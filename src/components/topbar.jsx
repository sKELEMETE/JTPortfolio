import { motion } from "framer-motion";

export default function Topbar({
  onJTClick,
  onSkillsClick,
  onProjectClick,
  onAboutMeClick,
}) {
  return (
    <motion.div
      className="border-b border-[#00ADB5]/20 backdrop-blur-md z-100 sticky top-0 button-container flex flex-row justify-start items-center w-full pl-5 "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      <motion.button
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onJTClick}
      >
        <h1 className="jt-button">JT</h1>
      </motion.button>

      <motion.button
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkillsClick}
      >
        <h1 className="top-nav-link">Skills</h1>
      </motion.button>

      <motion.button
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onProjectClick}
      >
        <h1 className="top-nav-link">Projects</h1>
      </motion.button>

      <motion.button
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onAboutMeClick}
      >
        <h1 className="top-nav-link">About Me</h1>
      </motion.button>
    </motion.div>
  );
}
