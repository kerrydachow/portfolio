import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-24 w-full flex justify-center items-center">
      <a href="#about">
        <motion.div
          animate={{
            y: [0, 16, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="flex flex-col text-6xl"
        >
          <span className="opacity-50">⌄</span>
          <span className="opacity-50 absolute left-0 right-0 top-3">⌄</span>
        </motion.div>
      </a>
    </div>
  );
};

export default ScrollDown;
