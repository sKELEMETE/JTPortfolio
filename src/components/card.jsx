// ============================
// ProjectCard.jsx
// ============================

export default function ProjectCard({ title, description }) {
  const scrollToSection = () => {
    const section = document.getElementById("third-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        p-8
        min-h-[260px]
        transition-all
        duration-700
        hover:-translate-y-2
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent
          opacity-60
        "
      />

      <div
        className="
          absolute
          inset-[1px]
          rounded-[35px]
          bg-black/10
          backdrop-blur-3xl
        "
      />

      <div
        className="
          absolute
          -top-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-white/20
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-4">
        <h3
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            text-white/55
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>

      <button
        onClick={scrollToSection}
        className="
          absolute
          left-1/2
          bottom-8
          -translate-x-1/2
          translate-y-10
          opacity-0
          rounded-full
          border
          border-white/15
          bg-white/10
          backdrop-blur-xl
          px-6
          py-3
          text-white
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        View
      </button>
    </div>
  );
}

// ============================
// MainProjectCard.jsx
// ============================

export function MainProjectCard({
  title,
  description,
  img,
  link,
  status,
}) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!link) e.preventDefault();
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-[30px]
        min-h-[520px]
        transition-all
        duration-700
        hover:-translate-y-3
        hover:scale-[1.02]
        hover:border-white/20
        hover:shadow-[0_40px_100px_rgba(0,0,0,0.55)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-[1px]
          rounded-[39px]
          bg-black/20
          backdrop-blur-[40px]
        "
      />

      <div
        className="
          absolute
          top-0
          left-0
          h-[120px]
          w-full
          bg-gradient-to-b
          from-white/20
          to-transparent
          opacity-70
        "
      />

      {img && (
        <img
          src={img}
          alt={title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-20
            transition-all
            duration-1000
            group-hover:scale-110
            group-hover:opacity-45
          "
        />
      )}

      <div
        className="
          absolute
          -top-24
          left-1/2
          h-48
          w-48
          -translate-x-1/2
          rounded-full
          bg-white/25
          blur-[100px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          p-8
        "
      >
        <div>
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/70
            "
          >
            {status}
          </span>
        </div>

        <div className="space-y-4">
          <h2
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            {title}
          </h2>

          <p
            className="
              text-white/60
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
