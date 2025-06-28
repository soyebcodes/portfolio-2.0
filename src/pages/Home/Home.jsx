import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutMe from "../AboutMe/AboutMe";
import SkillsSection from "../SkillsSection/SkillsSection";
import ProjectsSection from "../ProjectSection/ProjectSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
