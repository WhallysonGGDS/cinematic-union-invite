import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function Intro({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, reduce ? 300 : 2200);
    return () => clearTimeout(t);
  }, [onDone, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em", filter: "blur(10px)" }}
            animate={{ opacity: 1, letterSpacing: "0.34em", filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 text-center text-[0.62rem] uppercase text-foreground/70 md:text-xs"
          >
            Whallyson &amp; Emylli
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}