import { useEffect, useRef, useState } from "react";

/**
 * Mapa do Google carregado apenas quando entra na tela,
 * para não pesar no carregamento inicial no celular.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden border border-border/70 bg-muted/20 md:aspect-[16/10]"
    >
      {load ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] contrast-[1.05]"
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-[0.55rem] uppercase tracking-editorial text-foreground/40">
          Carregando mapa…
        </span>
      )}
    </div>
  );
}
