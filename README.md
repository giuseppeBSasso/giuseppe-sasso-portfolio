# giuseppe.sasso

Portfólio pessoal de Giuseppe Biazotto Sasso, criado para apresentar trajetória técnica, projetos de engenharia de software, estudos em IA aplicada e uma frente comercial para sites de negócios.

O domínio oficial do projeto é `giuseppesasso.com.br`. O deploy público está em preparação.

## Stack

- Astro 7
- TypeScript
- CSS com variáveis globais e estilos scoped por página
- Geração totalmente estática
- Google Fonts com Geist
- Sem adapter, backend, SPA ou runtime de servidor
- Sem React, Vue ou Svelte

## Páginas

O site possui seis páginas públicas:

- `/` - Home
- `/engenharia/` - Engenharia & IA
- `/projetos/` - Projetos
- `/sites/` - Sites para negócios
- `/sobre/` - Sobre
- `/falar-comigo/` - Contato

Também inclui:

- `/404.html`
- `/sitemap.xml`
- `/robots.txt`

## Decisões técnicas

- O projeto usa Astro com `output: "static"` para gerar HTML, CSS e assets prontos para hospedagem estática.
- Metadados, Open Graph, canonical, fonte, Header, Footer e script mínimo de reveal ficam centralizados em `BaseLayout`.
- Contatos, marca e navegação ficam centralizados em `src/data/site.ts`.
- A interatividade enviada ao navegador é mínima: um script inline para reveal progressivo com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- Os assets públicos ficam em `public/` e são copiados para o build final.

## Design System

O Design System usa fundo escuro, tipografia Geist, acento ciano para a frente técnica e acento dourado para a frente comercial. As regras permanentes estão documentadas em `docs/design-system.md`.

Princípios principais:

- layout responsivo com grids fluidos;
- header e footer consistentes;
- cards discretos e legíveis;
- foco visível;
- motion reduzida quando solicitado pelo usuário;
- copy objetiva, técnica e humana.

## SEO, acessibilidade e performance

O projeto foi estruturado com:

- titles e descriptions por página;
- canonical para rotas públicas;
- Open Graph com imagem padrão;
- sitemap e robots;
- HTML em `pt-BR`;
- uma heading principal por página;
- landmarks semânticos;
- alt text em imagens relevantes;
- CSS dividido por página pelo build do Astro;
- ausência de bundles JavaScript de framework.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Gere o build estático:

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
  data/         Dados de site, contato e navegação
  layouts/      Layout base e metadados
  pages/        Rotas públicas
  styles/       CSS global
public/
  brand/        Favicon
  social/       Imagem Open Graph
  uploads/      Imagens usadas pelo site
docs/
  design-system.md
```

## Desenvolvimento assistido por IA

Ferramentas de IA foram utilizadas como apoio em exploração visual, prototipação, desenvolvimento e revisão técnica. Requisitos, decisões de produto, curadoria, validação e aprovação final fazem parte do processo conduzido pelo responsável pelo projeto.

Os exports brutos e materiais intermediários de prototipação não fazem parte da documentação pública curada.

## Licença

O código-fonte está licenciado sob MIT. Consulte `LICENSE`.

A licença MIT não concede permissão de reutilização para textos pessoais, fotografia, marca `giuseppe.sasso`, identidade visual, imagem Open Graph, screenshots ou outros assets proprietários/de conteúdo. Consulte `NOTICE.md`.
