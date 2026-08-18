# Ajustes finais — foto do link, presentes e legibilidade

## O que muda

**1. Foto do link personalizado**
A foto enviada (vocês dois no parque, com as flores em primeiro plano) passa a ser a imagem que aparece quando o link é compartilhado no WhatsApp, Instagram, etc. Ela já está no site — vou apenas apontar a prévia para essa foto no lugar da atual.

**2. Lista de presentes ativa**
O botão "Ver lista de presentes" passa a abrir https://ch-de-panela-whallyson-e-emyll.lovable.app/presentes em nova aba, deixando de ficar inativo.

**3. Textos da página principal mais legíveis (efeito 3D)**
Sem mudar o estilo do site — mesmas cores, mesmas fontes:
- Os textos sobre a foto de capa ganham relevo: leve sombra projetada + realce claro em cima, criando profundidade e recorte contra a imagem.
- As linhas pequenas em maiúsculas (dia da semana, mês, local, "Role para ver mais", "Convite") ficam com contraste maior — hoje estão bem apagadas.
- O bloco de data/hora ganha um fundo um pouco mais fechado e borda mais definida, para o texto nunca competir com a foto.
- O mesmo relevo, mais sutil, é aplicado aos títulos das demais seções.

**4. Texto do convite no tema do site**
Reescrita dos parágrafos do "Convite" para falar diretamente do Chá de Panela (montar o lar, a nova casa, a fase que começa) mantendo o tom romântico e o ritmo atual — mesma quantidade de frases curtas, terminando no convite para a data.

## Detalhes técnicos

- `src/content/event.ts`: `shareImage` passa a usar `photos.flowers` (ADE_1317, a foto enviada); `giftsUrl` preenchido; `story` reescrito.
- `src/styles.css`: novas utilities `text-emboss` (sombra + realce para texto sobre foto) e `text-emboss-soft`, com valores derivados dos tokens existentes — nenhuma cor nova hardcoded em componentes.
- `src/components/invite/Hero.tsx`: aplica as utilities e sobe a opacidade das linhas em `tracking-editorial` (de ~45–70% para ~80–90%); bloco de data/hora com fundo/borda reforçados.
- `src/routes/index.tsx`: relevo suave nos títulos de seção; botão de presentes com `href` real, `target="_blank"` e sem o estado desabilitado.
