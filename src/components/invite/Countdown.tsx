import { useEffect, useState } from "react";
import { event } from "@/content/event";

function diff(target: number) {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  return {
    dias: Math.floor(ms / 86400000),
    horas: Math.floor(ms / 3600000) % 24,
    minutos: Math.floor(ms / 60000) % 60,
    segundos: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const target = new Date(event.targetIso).getTime();
  const [left, setLeft] = useState<ReturnType<typeof diff>>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLeft(diff(target));
    setReady(true);
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!ready) return <div className="h-24" />;

  if (!left) {
    return (
      <p className="font-serif text-5xl tracking-wide text-foreground md:text-7xl">
        É hoje.
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-3xl items-start justify-center gap-8 md:gap-20">
      {Object.entries(left).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <span className="font-serif text-4xl font-light tabular-nums text-foreground md:text-7xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[0.52rem] uppercase tracking-editorial text-foreground/45 md:text-[0.6rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}