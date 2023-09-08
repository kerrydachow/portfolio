import { SectionWrapper } from "@/hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import { experiences } from "../../../constants";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="min-[1170px]:text-center sm:text-[18px] text-[14px] uppercase tracking-wider">
          my industry experience
        </p>
        <h2 className="min-[1170px]:text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-5 flex flex-col">
        <VerticalTimeline lineColor="rgb(148 163 184)" className="">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "experience");
