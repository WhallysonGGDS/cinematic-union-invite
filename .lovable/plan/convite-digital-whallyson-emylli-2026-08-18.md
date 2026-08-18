# Convite Digital — Whallyson & Emylli

Site de convite premium, dark e cinematográfico para o Chá de Panela, com as 6 fotos do casal como protagonistas e o template escuro enviado como referência de direção de arte (não copiado).

## Identidade visual
- Paleta: #05070A (preto profundo), #071321 (marinho), #0D1E32 (azul profundo), #6E9BC7 (acento azul, usado com parcimônia), #F2F0EA (off-white).
- Tipografia: Cormorant Garamond (serifada editorial), Manrope (sans para dados/labels em caixa alta com tracking largo), fonte script elegante para "Whallyson & Emylli".
- Tratamento fotográfico: overlay preto/azul, granulação sutil, vinheta discreta, alguns recortes em preto e branco. Sem filtros que alterem os rostos.

## Seções (página única com rotas de âncora suave)
1. Intro/loading — tela preta, "WHALLYSON & EMYLLI" surge lentamente, depois fade+blur para o Hero.
2. Hero fullscreen — foto do casal, nav discreta (INÍCIO, O EVENTO, NOSSA HISTÓRIA, GALERIA, LOCALIZAÇÃO, PRESENTES), "CHÁ DE PANELA", nomes em script, 29 DE OUTUBRO · 2026, 19H30 ÀS 21H, indicador SCROLL TO EXPLORE. Zoom lentíssimo na imagem.
3. Nosso grande dia — fundo quase preto, "NOSSO GRANDE DIA ESTÁ CHEGANDO!", texto de convite, data em bloco tipográfico grande (29 / OUTUBRO 2026 / QUINTA-FEIRA / 19H30 — 21H) com filetes decorativos.
4. Contagem regressiva — dias/horas/minutos/segundos em números grandes, sem cards; vira "É HOJE." na data.
5. Nossa história — imagem + texto em duas colunas (empilhado no mobile), com filete vertical. Texto fica como placeholder discreto até você enviar o conteúdo.
6. Galeria / Momentos — composição editorial assimétrica (tamanhos e proporções variadas, muito preto entre as fotos), fade-in ao entrar na viewport, zoom suave no hover, parallax discreto. Clique abre lightbox fullscreen, fecha com ESC ou botão discreto. Bloco "Momentos" com imagem ~70% e texto lateral "UM MOMENTO. UMA MEMÓRIA. UMA NOVA FASE."
7. O evento — resumo dos dados oficiais.
8. Localização — "ONDE VAMOS CELEBRAR", ESPAÇO MIX EVENTOS, RUA FN-4 — JARDIM FONTE NOVA, GOIÂNIA - GO, botão ABRIR LOCALIZAÇÃO abrindo https://maps.app.goo.gl/a8ktqw5, mapa pequeno + elemento fotográfico.
9. Lista de presentes — "Lista de presentes disponível — consulte com os noivos" + botão CONSULTAR LISTA (link configurável em um único arquivo de conteúdo).
10. RSVP — "VOCÊ VEM CELEBRAR COM A GENTE?" + CONFIRMAR PRESENÇA, preparado para WhatsApp (número em constante, ainda vazio).
11. Encerramento — foto escurecida, WHALLYSON & EMYLLI / ESPERAMOS VOCÊ!

## Microinterações
Fade-in/fade-up, blur-in, parallax leve, zoom lento, underline animado nos links, scroll suave, cursor customizado discreto apenas no desktop. Contidas, nunca simultâneas.

## Mobile primeiro
Hero fullscreen com textos centrados, menu em overlay elegante, imagens em proporção vertical, tipografia legível, áreas de toque confortáveis. Desktop usa composição editorial larga.

## Detalhes técnicos
- TanStack Start + React + TypeScript + Tailwind v4; tokens de cor e fontes definidos em `src/styles.css`; fontes via `<link>` no `__root.tsx`.
- Fotos enviadas publicadas como assets em CDN (Lovable Assets) e importadas por ponteiro, com `loading="lazy"` exceto a do Hero.
- Animações com Framer Motion (transform/opacity, aceleradas por GPU) + IntersectionObserver.
- Todo o conteúdo textual, link do mapa, link de presentes e número de WhatsApp centralizados em `src/content/event.ts`, fácil de atualizar quando você mandar história, legendas e links.
- SEO: head() próprio na rota com título e descrição do evento.

## Pendências suas (o site já fica pronto para receber)
Texto de "Nossa História", legendas de "Momentos", link da lista de presentes, número de WhatsApp do RSVP.

Observação: você citou "29 DE OUTUBRO" e "2026 / QUINTA-FEIRA". Em 2026, 29 de outubro cai numa quinta-feira — mantive 29/10/2026, quinta-feira.
