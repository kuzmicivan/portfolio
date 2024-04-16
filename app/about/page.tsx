"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-40 md:p-24 font-mono overflow-scroll">
      <Header pathname={pathname} />
      <div className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-20 max-w-4xl h-full my-10 ">
        <AnimatePresence>
          <motion.div
            className="w-3/4 md:w-1/2  h-full flex justify-center items-center"
            key="profilePic"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img
              src="/profile.jpeg"
              alt="Profile pic"
              className="h-full w-full object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex-1 flex flex-col justify-center relative h-full w-3/4 md:w-full my-20">
          <AnimatePresence>
            <motion.div
              key="profileInfo"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-full h-full flex flex-col justify-center absolute"
            >
              <p className="text-sm text-gray-400 md:text-lg font-thin mt-4">
                I am <span className="text-white">Ivan Kuzmić</span>, a
                full-stack developer passionate about new technologies and
                opportunities.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}
