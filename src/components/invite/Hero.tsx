import { motion, useScroll, useTransform } from "motion/react";
import { event, photos } from "@/content/event";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 140]);
  const fade = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="inicio" className="relative h-[100svh] w-full overflow-hidden grain vignette">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.img
          src={photos.hero}
          alt="Whallyson e Emylli de rosto colado ao ar livre"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "linear" }}
          className="h-[115%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/85 via-[#05070A]/45 to-[#05070A]" />
        <div className="absolute inset-0 bg-[#071321]/35 mix-blend-multiply" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="text-[0.6rem] uppercase tracking-editorial text-foreground/65 md:text-xs"
        >
          {event.type}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 font-script text-5xl leading-[1.15] text-foreground sm:text-6xl md:text-8xl"
        >
          {event.couple}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.5 }}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <span aria-hidden className="h-px w-20 bg-primary/50" />
          <p className="text-[0.58rem] uppercase tracking-editorial text-foreground/70 md:text-[0.7rem]">
            {event.dateLine}
          </p>
          <p className="text-[0.58rem] uppercase tracking-editorial text-foreground/45 md:text-[0.7rem]">
            {event.time}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[0.5rem] uppercase tracking-editorial text-foreground/40">
          Scroll to explore
        </span>
        <motion.span
          aria-hidden
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-foreground/35"
        />
      </motion.div>
    </section>
  );
}