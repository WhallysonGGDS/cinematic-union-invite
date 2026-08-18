import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { event, photos } from "@/content/event";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 140]);
  const fade = useTransform(scrollY, [0, 600], [1, reduce ? 1 : 0]);

  return (
    <section
      id="inicio"
      className="grain vignette relative min-h-[100svh] w-full overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <motion.img
          src={photos.hero}
          alt="Whallyson e Emylli de rosto colado ao ar livre"
          width={1600}
          height={2400}
          decoding="async"
          fetchPriority="high"
          initial={{ scale: reduce ? 1 : 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "linear" }}
          className="h-[115%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/70 via-[#05070A]/40 to-[#05070A]/95" />
        <div className="absolute inset-0 bg-[#071321]/25 mix-blend-multiply" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-[max(6rem,env(safe-area-inset-top))] text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-[0.55rem] uppercase tracking-editorial text-primary/80 md:text-[0.65rem]"
        >
          Convite
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-serif text-4xl font-light leading-[1.05] text-foreground sm:text-5xl md:text-7xl"
        >
          {event.type}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-script text-4xl leading-[1.15] text-foreground sm:text-5xl md:text-7xl"
        >
          {event.couple}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="mt-9 flex w-full max-w-md flex-col items-center gap-5 border-y border-primary/25 bg-[#05070A]/25 px-4 py-7 backdrop-blur-[2px]"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="text-[0.58rem] uppercase tracking-editorial text-foreground/70 sm:text-[0.68rem]">
              {event.weekday}
            </span>
            <span aria-hidden className="h-8 w-px bg-primary/40" />
            <span className="font-serif text-5xl font-light leading-none text-foreground sm:text-6xl">
              {event.dayNumber}
            </span>
            <span aria-hidden className="h-8 w-px bg-primary/40" />
            <span className="text-[0.58rem] uppercase tracking-editorial text-foreground/70 sm:text-[0.68rem]">
              {event.monthYear}
            </span>
          </div>
          <p className="font-serif text-xl font-light text-primary/90 sm:text-2xl">
            {event.time}
          </p>
          <p className="text-[0.55rem] uppercase tracking-editorial text-foreground/55 sm:text-[0.62rem]">
            {event.venue} · Goiânia - GO
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[0.5rem] uppercase tracking-editorial text-foreground/40">
          Role para ver mais
        </span>
        <motion.span
          aria-hidden
          animate={reduce ? { scaleY: 1 } : { scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-foreground/35"
        />
      </motion.div>
    </section>
  );
}
