import React from "react";
import { motion } from "framer-motion";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full py-2 overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-6xl text-center lg:text-right lg:text-7xl 2xl:text-8xl"
      >
        {children}
      </motion.h1>
    </div>
  );
}
