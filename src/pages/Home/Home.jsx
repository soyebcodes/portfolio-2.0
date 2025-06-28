import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutMe from "../AboutMe/AboutMe";
import SkillsSection from "../SkillsSection/SkillsSection";
import ProjectsSection from "../ProjectSection/ProjectSection";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
