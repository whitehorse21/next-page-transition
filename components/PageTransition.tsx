import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  bg?: string;
}

export default function PageTransition({ children, bg = "bg-white" }: Props) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className={`absolute left-0 right-0 top-0 min-h-screen px-4 ${bg}`}
    >
      {children}
    </motion.div>
  );
}
