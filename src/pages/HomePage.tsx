import AboutSection from "@/components/about/AboutSection";
import WorkExperience from "@/components/experience/WorkExperience";
import Navbar from "@/components/header/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="z-50 container">
      <Navbar />
      <AboutSection />
      <WorkExperience />
    </div>
  );
};

export default HomePage;
