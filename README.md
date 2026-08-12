# giuseppe.sasso

Portfolio pessoal de Giuseppe Biazotto Sasso, criado para apresentar trajetoria tecnica, projetos de engenharia de software, estudos em IA aplicada e uma frente comercial para sites de negocios.

O dominio oficial do projeto e `giuseppesasso.com.br`. O deploy publico esta em preparacao.

## Stack

- Astro 7
- TypeScript
- CSS com variaveis globais e estilos scoped por pagina
- Geracao totalmente estatica
- Google Fonts com Geist
- Sem adapter, backend, SPA ou runtime de servidor
- Sem React, Vue ou Svelte

## Paginas

O site possui seis paginas publicas:

- `/` - Home
- `/engenharia/` - Engenharia & IA
- `/projetos/` - Projetos
- `/sites/` - Sites para negocios
- `/sobre/` - Sobre
- `/falar-comigo/` - Contato

Tambem inclui:

- `/404.html`
- `/sitemap.xml`
- `/robots.txt`

## Decisoes tecnicas

- O projeto usa Astro com `output: "static"` para gerar HTML, CSS e assets prontos para hospedagem estatica.
- Metadados, Open Graph, canonical, fonte, Header, Footer e script minimo de reveal ficam centralizados em `BaseLayout`.
- Contatos, marca e navegacao ficam centralizados em `src/data/site.ts`.
- A interatividade enviada ao navegador e minima: um script inline para reveal progressivo com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- Os assets publicos ficam em `public/` e sao copiados para o build final.

## Design System

O Design System usa fundo escuro, tipografia Geist, acento ciano para a frente tecnica e acento dourado para a frente comercial. As regras permanentes estao documentadas em `docs/design-system.md`.

Principios principais:

- layout responsivo com grids fluidos;
- header e footer consistentes;
- cards discretos e legiveis;
- foco visivel;
- motion reduzida quando solicitado pelo usuario;
- copy objetiva, tecnica e humana.

## SEO, acessibilidade e performance

O projeto foi estruturado com:

- titles e descriptions por pagina;
- canonical para rotas publicas;
- Open Graph com imagem padrao;
- sitemap e robots;
- HTML em `pt-BR`;
- uma heading principal por pagina;
- landmarks semanticos;
- alt text em imagens relevantes;
- CSS dividido por pagina pelo build do Astro;
- ausencia de bundles JavaScript de framework.

## Como executar

Instale as dependencias:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Gere o build estatico:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

Outros comandos:

```bash
npm run astro
```

## Estrutura principal

```text
src/
  components/   Componentes compartilhados
  data/         Dados de site, contato e navegacao
  layouts/      Layout base e metadados
  pages/        Rotas publicas
  styles/       CSS global
public/
  brand/        Favicon
  social/       Imagem Open Graph
  uploads/      Imagens usadas pelo site
docs/
  design-system.md
```

## Desenvolvimento assistido por IA

Ferramentas de IA foram utilizadas como apoio em exploracao visual, prototipacao, desenvolvimento e revisao tecnica. Requisitos, decisoes de produto, curadoria, validacao e aprovacao final fazem parte do processo conduzido pelo responsavel pelo projeto.

Os exports brutos e materiais intermediarios de prototipacao nao fazem parte da documentacao publica curada.

## Licenca

O codigo-fonte esta licenciado sob MIT. Consulte `LICENSE`.

A licenca MIT nao concede permissao de reutilizacao para textos pessoais, fotografia, marca `giuseppe.sasso`, identidade visual, imagem Open Graph, screenshots ou outros assets proprietarios/de conteudo. Consulte `NOTICE.md`.
