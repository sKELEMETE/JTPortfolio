import { motion, useReducedMotion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";
import { memo } from "react";

const skillsData = [
  { id: 1, label: "Fast Learner", icon: "⚡" },
  { id: 2, label: "Collaboration", icon: "🤝" },
  { id: 3, label: "Problem Solving", icon: "🧠" },
  { id: 4, label: "Adaptability", icon: "🌍" },
  { id: 5, label: "Time Management", icon: "⏰" },
  { id: 6, label: "Communication", icon: "💬" },
  { id: 7, label: "Leadership", icon: "🏆" },
  { id: 8, label: "Creativity", icon: "🎨" },
];

export default function SecondSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen w-full overflow-hidden px-4 sm:px-8 lg:px-30 pt-30 pb-8 bg-[#05070C]">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute top-1/2 left-[-200px] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* LEFT */}
        <div className="relative h-full rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,0,0,0.6)] flex flex-col">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/10 blur-[120px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 opacity-40" />
          </div>

          <div className="relative z-10 p-5 sm:p-6">
            <div className="text-white/50 text-[11px] tracking-[0.3em] uppercase">
              Soft Skills
            </div>
          </div>

          <div className="relative z-10 flex-1 px-3 sm:px-5 pb-6 grid grid-cols-3 sm:grid-cols-4 gap-2 overflow-y-auto hide-scrollbar p-5">
            {skillsData.map((skill, i) => (
              <SoftSkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-full rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,0,0,0.6)] flex flex-col">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[160px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 opacity-40" />
          </div>

          <div className="relative z-10 p-5 sm:p-6">
            <div className="text-white/50 text-[11px] tracking-[0.3em] uppercase">
              Technical Skills
            </div>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto hide-scrollbar px-5 pb-6">
            <SkillsSection />
          </div>
        </div>

      </div>
    </section>
  );
}

const SoftSkillCard = memo(function SoftSkillCard({ skill, index }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.07, y: -6 }}
      className="
        relative
        aspect-square
        rounded-xl
        flex flex-col items-center justify-center
        text-center
        cursor-pointer
        select-none
        bg-white/[0.08]
        border border-white/15
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transform-gpu
        will-change-transform
      "
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-60" />
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-blue-400/10 blur-xl" />

      <div className="relative text-2xl sm:text-3xl mb-1 drop-shadow-lg">
        {skill.icon}
      </div>

      <div className="relative text-white/70 text-[10px] sm:text-xs font-light px-1 leading-tight">
        {skill.label}
      </div>
    </motion.div>
  );
});