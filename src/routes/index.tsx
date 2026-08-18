import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Gift, Navigation } from "lucide-react";
import { event, photos, shareImage } from "@/content/event";
import { MapEmbed } from "@/components/invite/MapEmbed";
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
          "Convite digital do Chá de Panela de Whallyson & Emylli — 29 de outubro de 2026, 19h30, Espaço Mix Eventos, Goiânia - GO.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        property: "og:title",
        content: "Chá de Panela — Whallyson & Emylli",
      },
      {
        property: "og:description",
        content:
          "29 de outubro de 2026 · 19h30 às 21h · Espaço Mix Eventos, Goiânia - GO. Venha celebrar com a gente.",
      },
      { property: "og:image", content: shareImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chá de Panela — Whallyson & Emylli" },
      {
        name: "twitter:description",
        content:
          "29 de outubro de 2026 · 19h30 às 21h · Espaço Mix Eventos, Goiânia - GO.",
      },
      { name: "twitter:image", content: shareImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

      {/* CONVITE */}
      <section id="convite" className="px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="grain relative overflow-hidden">
              <img
                src={photos.close}
                alt="Whallyson e Emylli sorrindo de rosto colado"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#05070A]/20" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-l border-border/70 pl-6 md:pl-12">
              <Eyebrow>Convite</Eyebrow>
              <div className="mt-8 space-y-5 font-serif text-lg font-light leading-relaxed text-foreground/75 md:text-xl">
                {event.story.map((p) => (
                  <p key={p}>{p}</p>
                ))}
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
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
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
              className="mt-10 inline-flex min-h-[44px] items-center gap-3 border border-border px-7 py-4 text-[0.58rem] uppercase tracking-editorial text-foreground/80 transition-colors duration-500 hover:border-primary/60 hover:text-foreground"
            >
              <MapPin className="size-3.5" strokeWidth={1.2} />
              Abrir no Google Maps
            </a>
            <a
              href={event.mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-3 border border-primary/40 px-7 py-4 text-[0.58rem] uppercase tracking-editorial text-foreground/85 transition-colors duration-500 hover:bg-primary/10 sm:ml-4 sm:mt-10"
            >
              <Navigation className="size-3.5" strokeWidth={1.2} />
              Como chegar
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <MapEmbed
              src={event.mapsEmbedUrl}
              title={`Mapa — ${event.venue}, ${event.addressLine1}`}
            />
          </Reveal>
        </div>
      </section>

      {/* PRESENTES + RSVP */}
      <section id="presentes" className="px-6 py-24 md:py-36">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
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
              } mt-10 min-h-[44px]`}
            >
              <Gift className="size-3.5" strokeWidth={1.2} />
              Consultar lista
            </a>
          </Reveal>

        </div>
      </section>

      {/* ENCERRAMENTO */}
      <footer className="relative h-[70svh] w-full overflow-hidden grain vignette">
        <img
          src={photos.forehead}
          alt="Whallyson beijando a testa de Emylli"
          width={1600}
          height={2000}
          loading="lazy"
          decoding="async"
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
