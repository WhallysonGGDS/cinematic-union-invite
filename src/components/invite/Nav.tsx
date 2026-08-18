import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/event";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav({ visible }: { visible: boolean }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-700 ${
        solid ? "bg-background/70 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => scrollToId("inicio")}
          className="font-script text-lg text-foreground/85 transition-opacity hover:opacity-70 md:text-xl"
        >
          W & E
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="group relative text-[0.6rem] uppercase tracking-editorial text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-primary/70 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="text-foreground/70 md:hidden"
        >
          <Menu className="size-5" strokeWidth={1} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-background/97 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-end px-6 py-5">
              <button aria-label="Fechar menu" onClick={() => setOpen(false)}>
                <X className="size-5 text-foreground/70" strokeWidth={1} />
              </button>
            </div>
            <nav className="flex h-[70vh] flex-col items-center justify-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.7 }}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(item.id), 260);
                  }}
                  className="font-serif text-2xl tracking-wide text-foreground/85"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}