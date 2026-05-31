import { MainProjectCard } from "../components/card.jsx";
import { projectsData } from "../js/projectsData.js";

export default function ThirdSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06070A] px-6 lg:px-12 py-24">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <h1
          className="
            text-white
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-semibold
            tracking-[-0.06em]
          "
        >
          Projects
        </h1>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-16
          "
        >
          {projectsData.map((project, i) => (
            <MainProjectCard
              key={i}
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}