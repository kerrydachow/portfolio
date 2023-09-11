import { SectionWrapper } from "@/hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
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
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] text-center max-w-3xl leading-[30px]"
        >
          Thanks to BCIT's Industry Sponsored Student Projects program, I've had
          the privilege to complete two project practicums. The opportunity to
          work on genuine IT and software development projects directly from
          industry sponsors was invaluable. Through this program, I was not only
          able to apply my skills in real-life scenarios but also understand the
          comprehensive development life-cycle. Working in teams, sometimes
          individually, under the guidance of our industry sponsors has
          ingrained in me the confidence, skills, and experience that I can now
          carry forward into the professional world.
        </motion.p>
      </div>
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

export default SectionWrapper(WorkExperience, "work");
