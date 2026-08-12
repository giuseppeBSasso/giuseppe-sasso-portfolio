# Projeto giuseppe.sasso

## Arquitetura

- Stack: Astro com geracao estatica.
- Manter `output: "static"` em `astro.config.mjs`.
- Nao adicionar adapter, server runtime, SPA ou framework de UI sem aprovacao explicita.
- Rotas publicas finais: `/`, `/engenharia/`, `/projetos/`, `/sites/`, `/sobre/`, `/falar-comigo/`.
- Rotas auxiliares esperadas: `/404.html`, `/sitemap.xml`, `/robots.txt`.
- Dados compartilhados do site ficam em `src/data/site.ts`.
- Layout global, metadados e script minimo ficam em `src/layouts/BaseLayout.astro`.

## Comandos

- Desenvolvimento: `npm run dev`.
- Build estatico: `npm run build`.
- Preview local do build: `npm run preview`.
- CLI Astro: `npm run astro`.

## Convencoes

- Usar os padroes existentes de Astro, CSS global e CSS scoped por pagina.
- Nao alterar copy, imagens, Design System ou rotas sem motivo explicito.
- Manter contatos centralizados em `src/data/site.ts`.
- Nao publicar `docs/` em `dist/`.
- Manter assets necessarios ao site em `public/`.
- Documentacao publica curada fica em `docs/design-system.md`, `README.md`, `LICENSE` e `NOTICE.md`.
- Materiais internos de prototipacao/export nao devem ser rastreados no repositorio publico.

## Design System

- O Design System publico esta em `docs/design-system.md`.
- Preservar a direcao visual escura, tipografia Geist, acento ciano para engenharia e acento dourado para a frente comercial.
- Manter header/footer consistentes entre paginas.
- Manter foco visivel, `prefers-reduced-motion`, metadados SEO e Open Graph.

## Seguranca

- Nao commitar `.env`, secrets, tokens, credenciais, chaves privadas, dumps ou configuracoes locais sensiveis.
- Nao incluir codigo-fonte privado de Precifi3D, License Guard ou outros projetos relacionados.
- Links externos com `target="_blank"` devem usar `rel="noopener"` ou mais restritivo.
- Antes de preparacao publica, validar `git status`, `git ls-files` e varredura de secrets.

## Validacao

- Para alteracoes de producao, rodar `npm run build`.
- Para preparacao publica ou mudancas de dependencia, rodar tambem `npm audit`.
- Nao depender de browser automation para concluir validacoes neste ambiente.
- Se a ferramenta de browser estiver indisponivel, registrar o teste visual como manual e seguir com validacoes por terminal.
- Nao iniciar `npm run dev` ou `npm run preview` como processo persistente/background apenas para validacao visual, salvo pedido explicito.
