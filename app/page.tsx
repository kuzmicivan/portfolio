"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

export default function Home() {
  const pathname = usePathname();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const subject = `Contacted from My Portfolio by ${email}`;
    const message = formData.get("message");

    const response = await axios.post("/api/email", {
      email,
      subject,
      message,
    });

    if (response.status === 200) {
      setEmailSuccess(true);
      setShowEmailForm(false);
      setTimeout(() => setEmailSuccess(false), 5000);
    }
  };

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
            {showEmailForm ? (
              <motion.form
                key="emailForm"
                name="emailForm"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-col w-full absolute"
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 mb-2 rounded w-full text-gray-300 focus:text-white
                  border border-transparent focus:outline-none focus:border-green-600
                  hover:border-green-700 hover:bg-green-100/10 bg-green-800/30"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  className="px-4 py-2 mb-4
                  rounded w-full flex-grow resize-none overflow-auto text-gray-300 focus:text-white
                  border border-transparent focus:outline-none focus:border-green-600
               hover:border-green-700 hover:bg-green-100/10 bg-green-800/30"
                />

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="text-center py-3 first-line:rounded-lg
                  border rounded border-transparent transition-colors hover:border-green-300
               hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-green-800/30"
                >
                  <h2 className=" text-sm font-medium">Send Email</h2>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowEmailForm(false)}
                  className="text-center first-line:rounded-lg border rounded border-transparent py-3 transition-colors 
                  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                  <h2 className=" text-sm font-medium">Cancel</h2>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="profileInfo"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="w-full h-full flex flex-col justify-center absolute"
              >
                <div>
                  <div className="text-xl md:text-3xl font-semibold text-green-500">
                    Ivan
                  </div>
                  <div className="text-xl md:text-3xl font-semibold">
                    Kuzmić
                  </div>
                  <p className="text-lg md:text-2xl font-thin mt-4 text-wrap sm:text-nowrap">
                    Full-stack <span className="text-gray-400">Developer</span>
                  </p>
                </div>
                <div className="flex flex-col mt-8 gap-2">
                  <motion.button
                    disabled={emailSuccess}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowEmailForm(true)}
                    className="group text-center first-line:rounded-lg border rounded border-transparent px-5 py-4 transition-colors hover:border-green-300
               hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-green-800/30"
                  >
                    <h2 className=" text-md md:text-2xl font-medium">
                      {emailSuccess ? "Success" : "Contact me"}
                    </h2>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}
