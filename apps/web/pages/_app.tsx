import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { AppProps } from "next/app";
import { Navigation } from "../components/Navigation";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Navigation />

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
