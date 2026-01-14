import { useRef } from "react";
import Topbar from "./components/topbar";
import FirstSection from "../src/sections/firstSection";
import SecondSection from "./sections/secondSection";
import ThirdSection from "./sections/thirdSection";
import FourthSection from "./sections/fourthSection";

export default function App() {
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Topbar
        onJTClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onAboutMeClick={() => scrollToSection(aboutRef)}
      />
      <div ref={homeRef}>
        <FirstSection />
      </div>
      <div ref={skillsRef}>
        <SecondSection />
      </div>
      <div ref={projectRef} id="third-section">
        <ThirdSection scrollToProjects={() => scrollToSection(projectRef)} />
      </div>
      <div ref={aboutRef}>
        <FourthSection />
      </div>
    </>
  );
}
