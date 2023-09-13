import Navbar from "@/components/header/Navbar";
import AboutSection from "./about/AboutSection";
import WorkExperience from "./experience/WorkExperience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import HeroSection from "./hero/HeroSection";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="z-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
