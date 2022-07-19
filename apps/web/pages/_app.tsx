import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { AppProps } from "next/app";
import { Navigation } from "../components/Navigation";

import "@fontsource/eczar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <header className="flex items-center px-8 p-4 bg-orange-600 text-2xl text-white">
        <div className="container flex p-4 gap-6">
          <h1 className="h-full font-black text-4xl">Logo</h1>

          <Navigation />
        </div>
      </header>

      <ul className="flex px-2 gap-3 font-black text-orange-700 bg-white shadow-xl shadow-gray-200">
        <li className="px-0 p-8">
          <Link href="/tags" passHref>
            <a className="px-6 p-4 bg-orange-100 rounded-lg">React</a>
          </Link>
        </li>

        <li className="px-0 p-8">
          <Link href="/tags" passHref>
            <a className="px-6 p-4 bg-orange-100 rounded-lg">CSS</a>
          </Link>
        </li>
      </ul>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          layout
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          key={router.asPath}
        >
          <Component {...pageProps} key={router.asPath} />
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
