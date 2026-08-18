import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export type Shot = { src: string; alt: string; className: string; ratio: string };

export function Gallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <div className="grid grid-cols-6 gap-4 md:gap-y-24 md:gap-x-8">
        {shots.map((shot, i) => (
          <motion.button
            key={shot.src + i}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden ${shot.className}`}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              className={`${shot.ratio} w-full object-cover transition-transform duration-[2200ms] ease-out will-change-transform group-hover:scale-[1.05]`}
            />
            <span className="pointer-events-none absolute inset-0 bg-[#05070A]/25 transition-opacity duration-700 group-hover:opacity-0" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && shots[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={close}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/97 p-4 backdrop-blur-md"
          >
            <button
              aria-label="Fechar"
              onClick={close}
              className="absolute right-5 top-5 text-foreground/60 transition-colors hover:text-foreground"
            >
              <X className="size-5" strokeWidth={1} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              src={shots[active].src}
              alt={shots[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[86vh] max-w-full object-contain"
            />
            <span className="absolute bottom-6 text-[0.58rem] uppercase tracking-editorial text-foreground/40">
              ESC para fechar
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}