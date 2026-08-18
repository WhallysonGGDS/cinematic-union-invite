import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Gift, MessageCircle } from "lucide-react";
import { event, photos } from "@/content/event";
import { Nav } from "@/components/invite/Nav";
import { Intro } from "@/components/invite/Intro";
import { Hero } from "@/components/invite/Hero";
import { Countdown } from "@/components/invite/Countdown";
import { Gallery, type Shot } from "@/components/invite/Gallery";
import { Reveal, Eyebrow } from "@/components/invite/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chá de Panela — Whallyson & Emylli · 29.10.2026" },
      {
        name: "description",
        content:
          "Convite digital do Chá de Panela de Whallyson & Emylli — 29 de outubro de 2026, 19h30, Espaço Mix Eventos, Goiânia.",
      },
      { property: "og:title", content: "Chá de Panela — Whallyson & Emylli" },
      {
        property: "og:description",
        content:
          "29 de outubro de 2026 · 19h30 às 21h · Espaço Mix Eventos, Goiânia - GO. Venha celebrar com a gente.",
      },
    ],
  }),
  component: Index,
});

const shots: Shot[] = [
  {
    src: photos.portrait,
    alt: "Whallyson abraçando Emylli por trás, sorrindo",
    className: "col-span-6 md:col-span-3 md:col-start-1",
    ratio: "aspect-[4/5]",
  },
  {
    src: photos.flowers,
    alt: "O casal caminhando por uma alameda do parque",
    className: "col-span-6 md:col-span-2 md:col-start-5 md:mt-32",
    ratio: "aspect-[3/4]",
  },
  {
    src: photos.lake,
    alt: "O casal abraçado observando o lago",
    className: "col-span-6 md:col-span-4 md:col-start-3",
    ratio: "aspect-[16/10]",
  },
  {
    src: photos.forehead,
    alt: "Whallyson beijando a testa de Emylli",
    className: "col-span-3 md:col-span-2 md:col-start-1 md:-mt-16",
    ratio: "aspect-[4/5]",
  },
  {
    src: photos.skyline,
    alt: "O casal de mãos dadas à beira do lago com prédios ao fundo",
    className: "col-span-3 md:col-span-3 md:col-start-4 md:mt-24",
    ratio: "aspect-[4/5]",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Eyebrow>{children}</Eyebrow>
      <span aria-hidden className="h-8 w-px bg-primary/40" />
    </div>
  );
}

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="bg-background">
      <Intro onDone={() => setIntroDone(true)} />
      <Nav visible={introDone} />

      <Hero />

      {/* NOSSO GRANDE DIA */}
      <section id="evento" className="px-6 py-28 md:py-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <SectionLabel>O evento</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-3xl font-light leading-tight text-foreground md:text-5xl">
              {event.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/55">
              {event.invite}
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-16 w-full">
            <div className="flex flex-col items-center gap-6 border-y border-border/70 py-12">
              <span className="font-serif text-7xl font-light leading-none text-foreground md:text-9xl">
                {event.dayNumber}
              </span>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[0.6rem] uppercase tracking-editorial text-foreground/70">
                  {event.monthYear}
                </span>
                <span className="text-[0.6rem] uppercase tracking-editorial text-primary/80">
                  {event.weekday}
                </span>
                <span className="text-[0.6rem] uppercase tracking-editorial text-foreground/45">
                  {event.timeRange}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTAGEM */}
      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <Reveal>
            <Eyebrow>Contagem regressiva</Eyebrow>
          </Reveal>
          <Reveal delay={0.15} className="mt-12 flex w-full justify-center">
            <Countdown />
          </Reveal>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section id="historia" className="px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative overflow-hidden grain">
              <img
                src={photos.close}
                alt="Whallyson e Emylli sorrindo de rosto colado"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#05070A]/20" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-l border-border/70 pl-8 md:pl-12">
              <Eyebrow>Nossa história</Eyebrow>
              <h3 className="mt-6 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                Dois caminhos que viraram um só.
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/55">
                {event.story.length > 0 ? (
                  event.story.map((p) => <p key={p}>{p}</p>)
                ) : (
                  <p className="italic text-foreground/35">
                    Em breve, o casal compartilha aqui o começo dessa história.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col items-center text-center">
            <SectionLabel>Galeria</SectionLabel>
          </Reveal>
          <div className="mt-16 md:mt-28">
            <Gallery shots={shots} />
          </div>
        </div>
      </section>

      {/* MOMENTOS */}
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-10 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="relative overflow-hidden grain vignette">
              <img
                src={photos.lake}
                alt="O casal contemplando o lago ao entardecer"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-3">
            <p className="font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
              Um momento.
              <br />
              Uma memória.
              <br />
              <span className="text-primary/85">Uma nova fase.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <Eyebrow>Onde vamos celebrar</Eyebrow>
            <h3 className="mt-6 font-serif text-3xl font-light text-foreground md:text-5xl">
              {event.venue}
            </h3>
            <p className="mt-6 text-[0.62rem] uppercase tracking-editorial text-foreground/55">
              {event.addressLine1}
            </p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-editorial text-foreground/55">
              {event.addressLine2}
            </p>
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-border px-7 py-4 text-[0.58rem] uppercase tracking-editorial text-foreground/80 transition-colors duration-500 hover:border-primary/60 hover:text-foreground"
            >
              <MapPin className="size-3.5" strokeWidth={1.2} />
              Abrir localização
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden grain">
              <img
                src={photos.skyline}
                alt="Whallyson e Emylli de mãos dadas à beira do lago"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover md:aspect-square"
              />
              <div className="absolute inset-0 bg-[#071321]/30 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRESENTES + RSVP */}
      <section id="presentes" className="px-6 py-24 md:py-36">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-20 text-center">
          <Reveal className="flex flex-col items-center">
            <Eyebrow>Lista de presentes</Eyebrow>
            <p className="mt-6 font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
              {event.giftsText}
            </p>
            <a
              href={event.giftsUrl || event.mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!event.giftsUrl}
              onClick={(e) => {
                if (!event.giftsUrl) e.preventDefault();
              }}
              className={`mt-10 inline-flex items-center gap-3 border border-border px-7 py-4 text-[0.58rem] uppercase tracking-editorial transition-colors duration-500 ${
                event.giftsUrl
                  ? "text-foreground/80 hover:border-primary/60 hover:text-foreground"
                  : "cursor-not-allowed text-foreground/35"
              }`}
            >
              <Gift className="size-3.5" strokeWidth={1.2} />
              Consultar lista
            </a>
          </Reveal>

          <Reveal delay={0.1} className="flex w-full flex-col items-center border-t border-border/70 pt-20">
            <Eyebrow>Confirmação</Eyebrow>
            <p className="mt-6 font-serif text-3xl font-light leading-snug text-foreground md:text-4xl">
              Você vem celebrar com a gente?
            </p>
            <a
              href={
                event.rsvpWhatsapp
                  ? `https://wa.me/${event.rsvpWhatsapp}?text=${encodeURIComponent(
                      "Olá! Confirmo presença no Chá de Panela de Whallyson & Emylli.",
                    )}`
                  : "#presentes"
              }
              target={event.rsvpWhatsapp ? "_blank" : undefined}
              rel="noreferrer"
              onClick={(e) => {
                if (!event.rsvpWhatsapp) e.preventDefault();
              }}
              className={`mt-10 inline-flex items-center gap-3 border px-9 py-4 text-[0.58rem] uppercase tracking-editorial transition-colors duration-500 ${
                event.rsvpWhatsapp
                  ? "border-primary/50 text-foreground hover:bg-primary/10"
                  : "cursor-not-allowed border-border text-foreground/35"
              }`}
            >
              <MessageCircle className="size-3.5" strokeWidth={1.2} />
              Confirmar presença
            </a>
          </Reveal>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <footer className="relative h-[70svh] w-full overflow-hidden grain vignette">
        <img
          src={photos.forehead}
          alt="Whallyson beijando a testa de Emylli"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#05070A]/75" />
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <Reveal>
            <p className="font-script text-4xl text-foreground md:text-6xl">{event.couple}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <span aria-hidden className="mx-auto block h-px w-16 bg-primary/50" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-[0.58rem] uppercase tracking-editorial text-foreground/60">
              {event.closing}
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
