import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const pathsPalette: {
  [key: string]: {
    bg?: string;
    text?: string;
  };
} = {
  default: {
    bg: "bg-blue-500",
    text: "text-white",
  },
  "/contact": {
    bg: "bg-orange-300",
    text: "text-gray-900",
  },
  "/about": {
    bg: "bg-lime-600",
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  const text = pathsPalette[pathname]?.text || pathsPalette.default.text;
  const bg = pathsPalette[pathname]?.bg || pathsPalette.default.bg;
  const [textColor, setTextColor] = useState(text);

  useEffect(() => {
    setTimeout(() => setTextColor(text), 390);
  }, [pathname]);

  console.log("render");

  return (
    <div className={`${lato.variable} font-lato ${textColor}`}>
      <Head>
        <title>Page Transition - whitehorse21</title>
        <meta
          name="description"
          content="Page transition with Next.js and Framer Motion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentPath={pathname} />

      <AnimatePresence initial={false}>
        <Component key={pathname} bg={bg} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
