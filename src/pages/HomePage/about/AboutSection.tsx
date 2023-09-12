import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { expertise } from "@/constants";
import SkillsCard from "./SkillsCard";
import { SectionWrapper } from "@/hoc";
import me1 from "../../../assets/me-1.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row md:justify-between md:items-center md:h-full gap-16">
        <motion.div className="text-center lg:text-left lg:basis-1/2" variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
            Introduction
          </p>
          <h2 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About Me
          </h2>
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="basis-1/2 relative lg:hidden bg-blend-overlay"
          >
            <img
              alt="profile"
              className="lg:hidden rounded-full h-[200px] w-[200px] object-cover my-5 lg:my-0 mx-auto hover:filter hover:saturate-150 transition duration-500 z-10"
              src={me1}
            />
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className=" text-[17px] leading-[30px]"
          >
            I am a Software Developer from Vancouver, B.C, who is a recent
            graduate from British Columbia Institute of Technology's (BCIT)
            Computer Systems Technology program. My coding philosophy centers
            around prioritizing user experience and delivering clean, efficient,
            and scalable solutions. I am always seeking for better ways to
            design and implement solutions. I am deeply fascinated by the
            rapidly changing tech landscape, and my pursuit of knowledge does
            not stem from a mere professional obligation, but from a genuine
            desire to be of value in an industry that is constantly reshaping
            itself.
          </motion.p>

          <br />

          <motion.p
            variants={fadeIn("", "", 0.4, 1)}
            className="text-[17px] leading-[30px]"
          >
            Open-minded and eager for growth, I am actively seeking
            opportunities to refine my skills and emerge as both a stronger
            Software Developer and a visionary leader.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.4, 1.5)}
          className="hidden lg:flex basis-1/2 relative z-0 before:absolute before:-top-10 before:-right-10 before:rounded-t-full
            before:w-full before:max-w-[400px] md:before:max-w-[500px] before:h-full before:border-2 lg:before:border-inherit before:border-transparent  before:z-[-1]"
        >
          <img
            alt="profile"
            className="hidden lg:flex rounded-t-full my-5 lg:my-0 custom-position mx-auto hover:filter hover:saturate-150 transition duration-500 z-10 w-full md:max-w-[600px]"
            src={me1}
          />
        </motion.div>
      </div>
      <div className="mt-20 grid lg:flex gap-5">
        {expertise.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill}></SkillsCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
