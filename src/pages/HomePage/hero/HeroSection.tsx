import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";
import ScrollDown from "@/components/ScrollDown";

const HeroSection = () => {
  return (
    <div className="-mt-32 min-h-screen flex flex-col gap-5 items-center justify-center relative">
      <Reveal>
        <h1 className="lg:text-9xl text-6xl font-extrabold -top-1 relative text-center">
          Hello, I'm Kerry.
        </h1>
      </Reveal>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn("left", "spring", 1, 2)}
        className="text-center lg:text-5xl text-3xl"
      >
        I am a Software Developer.
      </motion.p>
      <ScrollDown />
    </div>
  );
};

export default HeroSection;
