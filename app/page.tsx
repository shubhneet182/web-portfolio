import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import SkillSection from "./skillSection";
import ExperienceSection from "./experienceSection";
import CertificationsAwards from "./certificationsAwards";

export const metadata = {
  title: "Shubhneet Sandhu"
}

export default function Home() {
  return (
    <div className="bg-black w-full overflow-x-hidden m-0 p-0">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <CertificationsAwards />
    </div>
  );
}
