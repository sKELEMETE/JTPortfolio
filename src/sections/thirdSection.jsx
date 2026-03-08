import { MainProjectCard } from "../components/card.jsx";
import { projectsData } from "../js/projectsData.js";

export default function ThirdSection() {
  return (
    <div className="h-full w-full bg-[#222831] px-4 pt-10 sm:px-6 lg:px-10 lg:pt-15">
      <div className="flex h-full w-full flex-col items-center justify-start">
        <div className="w-full pt-4 text-left sm:pt-6 lg:pl-20 lg:pt-10">
          <h1 className="font-[Poppins] text-[34px] font-medium text-[#EEEEEE] sm:text-[44px] lg:text-[55px]">
            PROJECTS
          </h1>
        </div>
        <div className="flex w-full flex-wrap gap-6 overflow-visible py-6 sm:gap-8 lg:px-20 lg:py-10">
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
    </div>
  );
}
