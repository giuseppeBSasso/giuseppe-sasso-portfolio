# Design System - giuseppe.sasso

Este documento registra as regras permanentes do Design System do portfolio pessoal `giuseppe.sasso`. O site e implementado em Astro estatico, com componentes compartilhados para marca, navegacao, layout base e rodape.

## Base

- Fundo principal: `#0B0C0F`.
- Superficies elevadas: variacoes sutis de branco translucido entre `.02` e `.05`.
- Fonte: Geist via Google Fonts, pesos 400, 500, 600 e 700.
- Fallback: `system-ui, -apple-system, sans-serif`.
- Container principal: `max-width: 1100px`.
- Gutter padrao: `24px`, reduzido em telas menores.
- Cantos: botoes `10px`, cards entre `14px` e `22px`, foto principal `24px`.

## Cores

- Texto principal: `#EDEFF2`.
- Texto secundario: `#9AA1A9`.
- Texto terciario: `#6E747C`.
- Texto elevado em superficies: `#B9C0C8`.
- Ciano tecnico: `oklch(0.82 0.11 210)`.
- Ciano hover: `#8ED8E6`.
- Dourado comercial: `oklch(0.84 0.1 80)`.
- Texto sobre botoes dourados: `#1C1A16`.

## Acentos

- Ciano identifica engenharia, software, IA e projetos tecnicos.
- Dourado identifica a frente comercial de sites para negocios.
- Home, Sobre e Falar comigo equilibram os dois acentos.
- Cada pagina deve usar no maximo os acentos necessarios para manter leitura clara.

## Tipografia

- H1 hero: `clamp(30px, 4.6vw, 50px)` na maioria das paginas; Home usa escala propria maior.
- H2 de secao: `clamp(24px, 3vw, 34px)`.
- Eyebrow: `13px`, uppercase, peso 500 ou 600, letter spacing positivo.
- Corpo: 15px a 18px, `line-height` entre `1.6` e `1.7`.
- Numeros e marcadores tecnicos podem usar `ui-monospace, SFMono-Regular, Menlo, monospace`.
- Titulos e paragrafos longos usam `text-wrap: pretty` quando apropriado.

## Componentes

- Header sticky com fundo translucido, blur e item ativo marcado por ponto luminoso.
- Footer compartilhado com marca, navegacao, contato e redes.
- Botao primario usa o acento da pagina, texto escuro e hover com leve elevacao.
- Botao secundario usa borda sutil, fundo discreto no hover e borda no acento.
- Cards usam superficies discretas, borda clara, raio moderado e hover leve quando interativos.
- Badges usam fundo translucido do acento e borda correspondente.
- Tags de stack usam superficie discreta, borda sutil e texto elevado.
- SVGs decorativos devem usar `aria-hidden="true"`.

## Layout

- Secoes sao separadas por `border-top` e padding vertical fluido.
- Grids usam `repeat(auto-fit, minmax(..., 1fr))`.
- Elementos flex/grid relevantes devem usar `min-width: 0` quando necessario para evitar overflow.
- Ancoras com header sticky devem usar `scroll-margin-top`.
- A pagina de projetos alterna imagem e texto em cases destacados.
- A Home apresenta duas portas: engenharia/projetos e sites para negocios.

## Motion e acessibilidade

- Animacoes de entrada usam `fadeUp`.
- O reveal em scroll usa `IntersectionObserver` apenas em elementos `[data-reveal]`.
- `prefers-reduced-motion: reduce` desativa animacoes, transicoes e smooth scroll.
- Links devem ter foco visivel.
- Paginas devem manter um H1 principal.
- Secoes principais devem usar `aria-labelledby` quando houver titulo visivel.
- Links externos que abrem nova aba devem usar `rel="noopener"`.

## SEO e metadados

- Metadados ficam centralizados em `src/layouts/BaseLayout.astro`.
- Todas as paginas publicas devem ter title, description, canonical e Open Graph.
- A 404 deve usar `noindex, follow`, sem canonical e sem `og:url`.
- A imagem social padrao fica em `public/social/og-default.png`.
- Favicon fica em `public/brand/favicon.svg`.
- O dominio canonico e `https://giuseppesasso.com.br`.

## Paginas

- `/` - Home com apresentacao e duas portas.
- `/engenharia/` - trajetoria tecnica, engenharia de software e IA.
- `/projetos/` - estudos de caso e projetos em destaque.
- `/sites/` - frente comercial de sites para negocios.
- `/sobre/` - trajetoria pessoal e profissional.
- `/falar-comigo/` - caminhos de contato.

## Tom

- Tecnico, maduro, objetivo e humano.
- Evitar promessas exageradas, numeros inventados ou claims de marketing sem base.
- Explicar IA como ferramenta de apoio, sem exagerar nem esconder o processo.
- Manter separacao clara entre projetos publicados, projetos em evolucao e itens futuros.
