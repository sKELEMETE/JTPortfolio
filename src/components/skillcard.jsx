// ============================
// skillcard.jsx
// ============================

export default function SkillCard({
  icon,
  Name,
  Percent,
}) {
  return (
    <div
      className="
        group
        relative
        w-full
        rounded-2xl
        border
        border-[#00ADB5]/20
        bg-[#2a313c]
        p-4
        transition-all
        duration-300
        hover:border-[#00ADB5]/50
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={icon}
          alt={Name}
          className="w-8 h-8 flex-shrink-0"
        />

        {/* Skill Name */}
        <div className="relative flex-1 min-w-0">
          <h1
            className="
              text-[#EEEEEE]
              font-semibold
              text-sm
              sm:text-base
              truncate
            "
          >
            {Name}
          </h1>

          {/* Hover Tooltip */}
          <div
            className="
              absolute
              left-0
              top-full
              mt-2
              z-50
              hidden
              group-hover:block
              whitespace-nowrap
              rounded-lg
              border
              border-[#00ADB5]/20
              bg-[#111827]
              px-3
              py-2
              text-xs
              sm:text-sm
              text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            "
          >
            {Name}
          </div>
        </div>
      </div>

      <div
        className="
          w-full
          h-3
          rounded-full
          bg-[#1b1f27]
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-[#00ADB5]
          "
          style={{
            width: `${Percent}%`,
          }}
        />
      </div>
    </div>
  );
}

export function LockSkill({ icon, Name }) {
  return (
    <div className="opacity-40 blur-[1px]">
      <SkillCard
        icon={icon}
        Name={Name}
        Percent={0}
      />
    </div>
  );
}

export function SkillTitle({
  Title,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        text-left
        px-5
        py-5
        rounded-2xl
        border
        border-[#00ADB5]/10
        bg-[#2a313c]
        text-[#EEEEEE]
        hover:border-[#00ADB5]/40
        hover:bg-[#00ADB5]/5
        transition-all
        duration-300
        font-[Poppins]
        text-sm
        sm:text-lg
        cursor-pointer
      "
    >
      {Title}
    </button>
  );
}