import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Transition: React.FC<Props> = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black origin-bottom z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
      > */}
        {children}
      {/* </motion.div> */}
    </>
  );
};

export default Transition;
