import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible")
    slideControls.start("visible")
  }, [isInView])
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden", top: -10}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div 
        variants={{
          hidden: {left: 0},
          visible: { left: "100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn"}}
        className="absolute z-20 top-2 bottom-0 left-0 right-0 bg-slate-900 dark:bg-slate-50"

      />
    </div>
  );
};
