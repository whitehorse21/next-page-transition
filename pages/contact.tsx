import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Title from "../components/Title";
import { container, item } from "../animations";

export default function Contact({ bg }: { bg: string }) {
  return (
    <PageTransition bg={bg}>
      <main className="max-w-6xl mx-auto pb-12">
        <div className="h-screen flex items-center">
          <Title>Let&apos;s Talk</Title>
        </div>

        <div className="flex gap-16 lg:gap-24 2xl:gap-36">
          <div className="text-base lg:text-2xl 2xl:text-3xl">
            <h4>Find me:</h4>
          </div>
          <div className="text-2xl lg:text-4xl 2xl:text-6xl underline">
            <AnimatePresence initial={true}>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                className="flex flex-col gap-2"
              >
                {["Twitter", "Instagram", "LinkedIn", "Dribble"].map(
                  (social) => (
                    <li key={social} className="overflow-hidden">
                      <motion.div variants={item} className="pb-1">
                        {social}
                      </motion.div>
                    </li>
                  )
                )}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
