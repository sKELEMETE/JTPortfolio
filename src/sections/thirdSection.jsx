import { MainProjectCard } from "../components/card.jsx";
import { projectsData } from "../js/projectsData.js";

export default function ThirdSection() {
  return (
    <div className="bg-[#222831] w-full h-full px-10 pt-15">
      <div className=" w-full h-full flex flex-col justify-start items-center">
        <div className="w-full text-left pl-20 pt-10">
          <h1 className="text-[#EEEEEE] font-medium text-[55px] font-[Poppins] ">
            PROJECTS
          </h1>
        </div>
        <div className="flex flex-wrap gap-10 w-full px-20 py-10 overflow-visible">
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
