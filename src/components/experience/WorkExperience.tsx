import { SectionWrapper } from "@/hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { experiences } from "../../constants";
import ExperienceCard from "./ExperienceCard";
import { useTheme } from "../ThemeProvider";

const WorkExperience = () => {
  const theme = useTheme();
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="rgb(148 163 184)"
          
          className=""
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "experience");
