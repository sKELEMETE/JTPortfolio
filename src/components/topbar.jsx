import { motion } from "framer-motion";

export default function Topbar({
  onJTClick,
  onSkillsClick,
  onProjectClick,
  onAboutMeClick,
}) {
  return (
    <motion.div
      className="border-b border-[#00ADB5]/20 backdrop-blur-md sticky top-0 z-50 flex w-full flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2 sm:gap-x-6 sm:px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      <motion.button
        className="cursor-pointer shrink-0"
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
