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
  addressLine2: "Goiânia - GO",
  mapsUrl: "https://maps.app.goo.gl/a8ktqw5",
  headline: "Nosso grande dia está chegando!",
  invite:
    "Mas antes, queremos comemorar com você. Venha celebrar essa nova fase com a gente.",
  giftsText: "Lista de presentes disponível — consulte com os noivos",
  closing: "Esperamos você!",
  // Data/hora do evento (horário de Brasília, UTC-3)
  targetIso: "2026-10-29T19:30:00-03:00",
  /** Preencher quando o link da lista estiver disponível. */
  giftsUrl: "",
  /** Preencher com o número no formato 5562999999999 para habilitar o RSVP por WhatsApp. */
  rsvpWhatsapp: "",
  /** Texto de "Nossa História" — a ser fornecido pelo casal. */
  story: [] as string[],
};

export const navItems = [
  { label: "Início", id: "inicio" },
  { label: "O Evento", id: "evento" },
  { label: "Nossa História", id: "historia" },
  { label: "Galeria", id: "galeria" },
  { label: "Localização", id: "localizacao" },
  { label: "Presentes", id: "presentes" },
];