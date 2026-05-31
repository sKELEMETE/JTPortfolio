import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LinkDesign from "../links/link.jsx";

export default function Topbar({
  onJTClick,
  onSkillsClick,
  onProjectClick,
}) {
  const [open, setOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <motion.div
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50

        w-fit
        max-w-[95%]
      "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      <div
        className="
          relative
          overflow-visible

          h-16
          px-6

          flex
          items-center
          gap-10

          rounded-full

          bg-white/[0.08]
          backdrop-blur-[30px]

          border
          border-white/20

          shadow-[0_8px_32px_rgba(0,0,0,0.25)]

          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-gradient-to-b
          before:from-white/10
          before:to-white/[0.02]
          before:pointer-events-none

          after:absolute
          after:inset-[1px]
          after:rounded-full
          after:bg-gradient-to-b
          after:from-white/20
          after:to-transparent
          after:pointer-events-none
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-10 relative z-10">
          <motion.button
            className="cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onJTClick}
          >
            <h1 className="jt-button">JT</h1>
          </motion.button>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-8">
            <NavButton text="Skills" onClick={onSkillsClick} />
            <NavButton text="Projects" onClick={onProjectClick} />

            {/* LINKS DROPDOWN */}
            <div className="relative inline-flex">
              <NavButton
                text="Links"
                onClick={() => setShowLinks((prev) => !prev)}
              />

              <AnimatePresence>
                {showLinks && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="
                      absolute
                      top-[calc(100%+12px)]
                      left-0
                      z-50

                      rounded-3xl




                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-[1px]
                        rounded-3xl
                        bg-gradient-to-b
                        from-white/20
                        to-transparent
                        pointer-events-none
                      "
                    />

                    <div className="relative z-10">
                      <LinkDesign />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white relative z-10"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                absolute
                top-[78px]
                right-0

                w-[240px]

                rounded-3xl

                bg-white/[0.08]
                backdrop-blur-[30px]

                border
                border-white/20

                shadow-[0_8px_32px_rgba(0,0,0,0.25)]

                p-5

                overflow-hidden

                flex
                flex-col
                gap-4
              "
            >
              <div
                className="
                  absolute
                  inset-[1px]
                  rounded-3xl
                  bg-gradient-to-b
                  from-white/20
                  to-transparent
                  pointer-events-none
                "
              />

              <div className="relative z-10 flex flex-col gap-4">
                <MobileButton
                  text="Skills"
                  onClick={() => {
                    onSkillsClick();
                    setOpen(false);
                  }}
                />

                <MobileButton
                  text="Projects"
                  onClick={() => {
                    onProjectClick();
                    setOpen(false);
                  }}
                />

                {/* ================= MOBILE LINKS (FIXED) ================= */}
                <div>
                  <MobileButton
                    text="Links"
                    onClick={() => setShowLinks((prev) => !prev)}
                  />

                  {showLinks && (
                    <div className="mt-3 ml-2">
                      <LinkDesign />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ================= NAV BUTTON ================= */

function NavButton({ text, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      className="
        px-4
        py-2
        rounded-full

        text-white/80
        hover:text-white

        hover:bg-white/10

        border
        border-transparent
        hover:border-white/10

        transition-all
        duration-300

        font-medium
        tracking-wide
      "
    >
      {text}
    </motion.button>
  );
}

/* ================= MOBILE BUTTON ================= */

function MobileButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        text-left
        text-white/80
        hover:text-white
        transition-colors
        font-medium
      "
    >
      {text}
    </button>
  );
}