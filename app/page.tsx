import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import SkillSection from "./skillSection";
import ExperienceSection from "./experienceSection";
// import FullPageSection from "./fullPageScroll";

export const metadata = {
  title: "Shubhneet Sandhu"
}

export default function Home() {
  // const allsections = [<HeroSection key="hero" />, <ProjectSection key="projects"/>, <SkillSection key="skills"/>, <ExperienceSection key="experience"/>];

  return (
    <div className="bg-black w-full overflow-x-hidden m-0 p-0">
      {/* <FullPageSection sections={allsections} /> */}
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
    </div>
  );
}
