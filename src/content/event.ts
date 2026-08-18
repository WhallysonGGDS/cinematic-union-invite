import p0853 from "@/assets/ADE_0853.jpg.asset.json";
import p0857 from "@/assets/ADE_0857.jpg.asset.json";
import p1021 from "@/assets/ADE_1021.jpg.asset.json";
import p1035 from "@/assets/ADE_1035.jpg.asset.json";
import p1317 from "@/assets/ADE_1317.jpg.asset.json";
import p1343 from "@/assets/ADE_1343.jpg.asset.json";
import p1394 from "@/assets/ADE_1394.jpg.asset.json";

export const photos = {
  hero: p1394.url,
  portrait: p1343.url,
  lake: p1035.url,
  flowers: p1317.url,
  forehead: p0857.url,
  skyline: p1021.url,
  close: p0853.url,
};

/** Domínio estável do projeto — usado nas metatags de compartilhamento. */
export const siteUrl =
  "https://project--534ed5a5-1d99-41c2-b649-ba70e6dce5d5.lovable.app";

/** Imagem exibida na pré-visualização do link (WhatsApp, Instagram, etc.). */
export const shareImage = `${siteUrl}${photos.hero}`;

const mapsQuery =
  "Espaço Mix Eventos, R. FN-4 - Jardim Fonte Nova, Goiânia - GO, 74594-037";

export const event = {
  type: "Chá de Panela",
  couple: "Whallyson & Emylli",
  dayNumber: "29",
  monthYear: "Outubro 2026",
  weekday: "Quinta-feira",
  dateLine: "29 de Outubro · 2026",
  time: "19h30 às 21h",
  timeRange: "19h30 — 21h",
  venue: "Espaço Mix Eventos",
  addressLine1: "Rua FN-4 — Jardim Fonte Nova",
  addressLine2: "Goiânia - GO · 74594-037",
  mapsUrl: "https://maps.app.goo.gl/rsnNengyUDcbrY3EA",
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
  mapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`,
  headline: "Nosso grande dia está chegando!",
  invite:
    "Mas antes, queremos comemorar com você. Venha celebrar essa nova fase com a gente.",
  giftsText: "Lista de presentes disponível — consulte com os noivos",
  closing: "Esperamos você!",
  // Data/hora do evento (horário de Brasília, UTC-3)
  targetIso: "2026-10-29T19:30:00-03:00",
  /** Preencher quando o link da lista estiver disponível. */
  giftsUrl: "",
  /** Texto do convite. */
  story: [
    "Um novo capítulo está prestes a começar, e queremos você ao nosso lado.",
    "Preparamos uma celebração especial para reunir quem faz parte da nossa história.",
    "Será um dia de alegria, carinho, risadas e momentos que ficarão na memória.",
    "Sua presença não é apenas um convite aceito — é parte dessa celebração.",
    "Venha compartilhar conosco a felicidade de construir um novo lar.",
    "Traga seu sorriso e o coração aberto para viver esse momento.",
    "Porque algumas memórias só fazem sentido quando compartilhadas.",
    "Esperamos por você para tornar esse dia ainda mais especial! ✨",
  ] as string[],
};

export const navItems = [
  { label: "Início", id: "inicio" },
  { label: "O Evento", id: "evento" },
  { label: "Convite", id: "convite" },
  { label: "Galeria", id: "galeria" },
  { label: "Localização", id: "localizacao" },
  { label: "Presentes", id: "presentes" },
];
