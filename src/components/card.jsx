export default function ProjectCard({ title, description }) {
  const scrollToSection = () => {
    const section = document.getElementById("third-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="group relative h-full w-auto overflow-visible rounded-[20px] border-2 border-[#00ADB5] p-5 transition-all duration-500 ease-out hover:border-[#00ADB5] hover:bg-[rgba(245,245,245,0.2)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] sm:p-[1.8rem]">
      <div className="grid place-content-center h-full gap-2 text-black">
        <p className="text-[1.5em] font-bold text-[#EEEEEE]">{title}</p>
        <p className="text-[#EEEEEE] opacity-50">{description}</p>
      </div>
      <button
        onClick={scrollToSection}
        className="absolute bottom-0 left-1/2 w-[75%] translate-x-[-50%] translate-y-[125%] rounded-xl border-none bg-[#008bf8] px-4 py-2 text-[0.95rem] text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100 hover:cursor-pointer sm:w-[60%] sm:text-[1rem]"
      >
        More info
      </button>
    </div>
  );
}

export function MainProjectCard({ title, description, img, link, status }) {
  return (
    <a
      href={link || "#"}
      onClick={(e) => {
        if (!link) e.preventDefault();
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full w-full cursor-pointer rounded-[20px] border-b border-r border-[#00ADB5]/50 p-5 shadow-[-4px_-4px_5px_#000000]/25 transition-all duration-500 ease-out hover:border-[#00ADB5] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] sm:p-6 lg:max-w-[45%]"
    >
      {img && (
        <img
          src={img}
          alt={title}
          className="hover:z-99 absolute top-1/2 left-1/2 w-full h-full object-cover rounded-[20px] opacity-10 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-105"
        />
      )}

      <h1 className="text-center text-[#EEEEEE]/50 font-[Poppins] tracking-[2px]">
        {status}
      </h1>

      <div className="relative z-10 flex h-[260px] flex-col justify-end gap-2 text-left text-[#EEEEEE] sm:h-[300px] lg:h-[350px]">
        <p className="text-[1.5em] font-bold">{title}</p>
        <p className="opacity-70">{description}</p>
      </div>
    </a>
  );
}
