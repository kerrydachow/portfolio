import React from "react";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
          My Work
        </p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-1: gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
