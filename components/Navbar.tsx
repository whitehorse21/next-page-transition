import Link from "next/link";
import { motion } from "framer-motion";

const paths = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

export default function Navbar({ currentPath }: { currentPath: string }) {
  return (
    <nav className="text-2xl font-medium px-4 py-12 absolute left-0 right-0 top-0 z-20">
      <div className="max-w-6xl mx-auto">
        <ul className="flex gap-12 transition-colors duration-200">
          {paths.map(({ name, path }) => (
            <li key={name} className="relative">
              <Link href={path}>{name}</Link>
              {currentPath === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 h-[2px] bg-current w-full"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
