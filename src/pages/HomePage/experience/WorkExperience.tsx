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
          the privilege to complete two practicums. The opportunity to
          work on genuine IT and software development projects directly from
          industry sponsors was invaluable. In this program, I not only applied
          my skills to create industry-standard MVPs, but also gained an
          understanding of the full development life-cycle. Collaborating in
          teams or sometimes working individually, under the mentorship of
          industry sponsors, has equipped me with the confidence, skills, and
          experience I need for the professional world.
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
