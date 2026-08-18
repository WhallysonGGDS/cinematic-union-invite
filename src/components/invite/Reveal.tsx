import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent ${className}`}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-emboss-soft text-[0.62rem] tracking-editorial uppercase text-primary">
      {children}
    </span>
  );
}