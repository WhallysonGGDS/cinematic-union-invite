# Remover caixa do bloco de data/hora e padronizar o relevo 3D

## Objetivo
Na primeira página (Hero), retirar o "quadrado" (fundo, bordas e desfoque) que fica atrás do bloco de data/hora/local, deixando apenas as letras sobre a foto. Manter o mesmo destaque 3D das palavras "Whallyson", "Emylli" e "Chá de Panela" em todos os textos desse bloco.

## Arquivo a editar
- `src/components/invite/Hero.tsx` — bloco de data/hora (linhas 63–88)

## Mudanças
1. **Remover a caixa**: no `<motion.div>` do bloco de data/hora, trocar
   `border-y border-primary/50 bg-background/55 px-4 py-7 backdrop-blur-[3px]`
   por espaçamento simples (`py-6`) sem fundo, borda ou desfoque.

2. **Padronizar o relevo 3D**: substituir `text-emboss-soft` por `text-emboss` (o mesmo usado nos nomes e no título "Chá de Panela") em:
   - dia da semana (`event.weekday`)
   - mês/ano (`event.monthYear`)
   - local (`event.venue · Goiânia - GO`)
   - texto "Role para ver mais" (rodapé)

   O número do dia e o horário já usam `text-emboss` — permanecem iguais.

## Resultado
Apenas letras sobre a foto, sem nenhum quadrado por baixo, com o mesmo relevo e contraste em todo o bloco de data/hora — igual ao destaque dos nomes e do título.
