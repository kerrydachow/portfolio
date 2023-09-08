import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { expertise } from "@/constants";
import SkillsCard from "./SkillsCard";
import { SectionWrapper } from "@/hoc";

const AboutSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
          Introduction
        </p>
        <h2 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </motion.p>
      <div className="mt-20 grid lg:flex gap-5">
        {expertise.map((skill, index) => (
          <SkillsCard
            key={skill.title}
            index={index}
            {...skill}
          ></SkillsCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
