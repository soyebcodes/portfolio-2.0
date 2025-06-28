import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <hr className="text-[#99A1AF]" />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
