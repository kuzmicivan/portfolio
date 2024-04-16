"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  pathname: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="fixed top-0 flex h-48 w-full items-start pt-10 justify-center bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      <div className="flex text-center w-1/3 justify-between">
        <motion.a
          href="/"
          whileTap={{ scale: 0.95 }}
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors ${
            props.pathname === "/" && "border-green-800 bg-green-900/30"
          } hover:border-green-700 hover:bg-green-800/30`}
        >
          <span>Home</span>
        </motion.a>
        <motion.a
          href="/about"
          whileTap={{ scale: 0.95 }}
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors ${
            props.pathname === "/about" && "border-green-800 bg-green-900/30"
          } hover:border-green-700 hover:bg-green-800/30`}
        >
          <span>About</span>
        </motion.a>
      </div>
    </header>
  );
}
