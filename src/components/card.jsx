export default function ProjectCard({ title, description }) {
  const scrollToSection = () => {
    const section = document.getElementById("third-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-auto h-[100%] rounded-[20px] border-2 border-[#00ADB5] p-[1.8rem] overflow-visible transition-all duration-500 ease-out hover:border-[#00ADB5] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] group bg-[rgba(245,245,245,)] hover:bg-[rgba(245,245,245,0.2)]">
      <div className="grid place-content-center h-full gap-2 text-black">
        <p className="text-[1.5em] font-bold text-[#EEEEEE]">{title}</p>
        <p className="text-[#EEEEEE] opacity-50">{description}</p>
      </div>
      <button
        onClick={scrollToSection}
        className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] bg-[#008bf8] text-white text-[1rem] rounded-xl py-2 px-4 border-none transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100 hover:cursor-pointer"
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
      className="max-w-[45%] cursor-pointer relative w-auto h-full rounded-[20px] border-r-1 border-b-1 border-[#00ADB5]/50 shadow-[-4px_-4px_5px_#000000]/25 p-[1.8rem] transition-all duration-500 ease-out hover:border-[#00ADB5] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] group"
    >
      {img && (
        <img
          src={img}
          alt={title}
          className="hover:z-200 absolute top-1/2 left-1/2 w-full h-full object-cover rounded-[20px] opacity-10 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-105"
        />
      )}

      <h1 className="text-center text-[#EEEEEE]/50 font-[Poppins] tracking-[2px]">
        {status}
      </h1>

      <div className=" relative h-[350px] flex flex-col justify-end gap-2 text-[#EEEEEE] text-left z-10">
        <p className="text-[1.5em] font-bold">{title}</p>
        <p className="opacity-70">{description}</p>
      </div>
    </a>
  );
}
