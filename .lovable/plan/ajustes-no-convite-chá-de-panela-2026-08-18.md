# Ajustes no convite — Chá de Panela

## O que muda

**1. Primeira página (capa) com mais destaque**
- "Chá de Panela" passa a ser bem maior e mais visível no topo (hoje é uma linha pequena em maiúsculas).
- Data, dia da semana e horário ganham um bloco próprio em destaque na capa, logo abaixo dos nomes — legível de imediato no celular, sem precisar rolar.

**2. Sai "Confirmar presença"**
- Remoção completa do botão de WhatsApp e de toda a seção "Confirmação".
- O item correspondente também sai da navegação.

**3. "Nossa História" vira o texto novo**
- A seção passa a se chamar apenas "Convite" (sem o título "Dois caminhos que viraram um só").
- Entra o texto enviado, com cada frase como um parágrafo, em tipografia maior e mais respirada, ao lado da foto.
- O link "Nossa História" no menu vira "Convite".

**4. Localização funcionando**
- O botão passa a usar o link real: https://maps.app.goo.gl/rsnNengyUDcbrY3EA
- Além do botão, um mapa incorporado (Google Maps) aparece na seção, carregado só quando o usuário chega nela — assim não pesa no carregamento inicial.
- Botão extra "Como chegar" abrindo direto a rota no app de mapas (funciona no Android e iOS).

**5. Link personalizado (preview ao compartilhar)**
- Título, descrição e imagem definidos para quando o link for enviado por WhatsApp, Instagram, etc.
- Descrição: convite curto com data, hora e local.
- Imagem: por enquanto uso a foto do casal já presente no site como capa do preview. Quando você me mandar a foto que prefere, eu troco — é só enviar.

**6. Leve, rápido e focado em mobile**
- Fotos servidas em tamanhos responsivos, com carregamento preguiçoso e dimensões fixas (evita a página "pular" enquanto carrega).
- Só a foto da capa carrega com prioridade; as demais entram conforme a rolagem.
- Animações reduzidas/desligadas automaticamente para quem tem "reduzir movimento" ativado, e mais leves no celular.
- Revisão de todos os blocos em telas estreitas (grid com colunas seguras, textos que não estouram), com áreas de toque ≥44px, respeito à faixa segura do iPhone (notch) e comportamento correto da barra do navegador móvel.

## Detalhes técnicos

- `src/content/event.ts`: `mapsUrl` atualizado, `rsvpWhatsapp` removido, `story` preenchido com os 8 parágrafos, `navItems` sem "Nossa História"/"Confirmação" (entra "Convite").
- `src/routes/index.tsx`: remoção do bloco RSVP e do import de `MessageCircle`; seção história reescrita; seção localização recebe iframe do Google Maps montado via IntersectionObserver; `head()` ganha `og:image`/`twitter:image` com URL absoluta (domínio estável `project--534ed5a5-...lovable.app` + caminho do asset) e og/twitter description atualizados.
- `src/components/invite/Hero.tsx`: hierarquia tipográfica nova (tipo do evento em destaque + bloco de data/hora), `fetchpriority="high"` e `decoding="async"` na imagem de capa.
- Imagens: `width`/`height` explícitos e `loading="lazy"` em todas menos a capa.
- `Reveal`/`Intro`/parallax: respeitar `prefers-reduced-motion`.
