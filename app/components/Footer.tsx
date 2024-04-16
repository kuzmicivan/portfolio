"use client";
import { X } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
      <div className="mb-10 flex text-center w-1/3 justify-between">
        <motion.a
          href="https://github.com/kuzmicivan/"
          whileTap={{ scale: 0.95 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <GitHub className="inline-block transition-transform group-hover:scale-110 motion-reduce:transform-none" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ivan-kuzmi%C4%87-493905239/"
          whileTap={{ scale: 0.95 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <LinkedIn className="inline-block transition-transform group-hover:scale-110 motion-reduce:transform-none" />
        </motion.a>
        <motion.a
          href="https://twitter.com/_kuzma_01"
          whileTap={{ scale: 0.95 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <X className="inline-block transition-transform group-hover:scale-110 motion-reduce:transform-none" />
        </motion.a>
      </div>
    </footer>
  );
}
