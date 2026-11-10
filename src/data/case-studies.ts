// Estudos de caso dos projetos exibidos em /projetos/<slug>/.
// Regra: somente informações reais e confirmadas. Nada de métricas, clientes ou resultados inventados.
// Trechos marcados com [CONFIRMAR] precisam de revisão do Giuseppe antes da publicação.

export interface CaseStudyCard {
  title: string;
  text: string;
}

export interface CaseStudySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  cards?: CaseStudyCard[];
}

export interface CaseStudyLink {
  label: string;
  href: string;
  primary?: boolean;
  // Selo oficial (ex.: Chrome Web Store) exibido no lugar do botão de texto.
  badge?: { src: string; width: number; height: number };
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  statusTone: "cyan" | "gold";
  seoTitle: string;
  seoDescription: string;
  lead: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    fit?: "cover-left" | "cover-right" | "contain";
  };
  links: CaseStudyLink[];
  facts: { label: string; value: string }[];
  stack: string[];
  sections: CaseStudySection[];
}

const aiProcessSection: CaseStudySection = {
  id: "ia-no-processo",
  eyebrow: "IA no processo",
  title: "Desenvolvimento assistido por IA, com decisões humanas",
  paragraphs: [
    "Ferramentas de IA participam de pesquisa, análise, prototipação, implementação, revisão e documentação. Requisitos, decisões de produto e arquitetura, curadoria, validação e aprovação final ficam comigo."
  ]
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "precifi3d",
    number: "01",
    title: "Precifi3D",
    category: "SaaS · Produto digital",
    status: "Em evolução",
    statusTone: "cyan",
    seoTitle: "Estudo de caso: Precifi3D — Giuseppe Sasso",
    seoDescription:
      "Estudo de caso do Precifi3D, plataforma SaaS de precificação, orçamentos e negociação para serviços de impressão 3D: problema, solução, arquitetura e decisões técnicas.",
    lead:
      "Plataforma SaaS para makers, prestadores e pequenos negócios de impressão 3D, criada para profissionalizar a precificação, a geração de orçamentos e a operação comercial do serviço.",
    image: {
      src: "/uploads/projetos/precifi3d.png",
      alt: "Painel interno do Precifi3D — tela de primeiros passos do prestador",
      width: 1438,
      height: 731,
      fit: "cover-left"
    },
    links: [{ label: "Ver projeto", href: "https://precifi3d.com/", primary: true }],
    facts: [
      { label: "Tipo", value: "SaaS web" },
      { label: "Status", value: "Em produção, em evolução contínua" },
      { label: "Público", value: "Prestadores de impressão 3D e clientes" },
      { label: "Código", value: "Repositório privado" }
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Supabase", "PostgreSQL", "Stripe", "PostHog", "Sentry", "Three.js"],
    sections: [
      {
        id: "contexto",
        eyebrow: "Contexto",
        title: "Do contato com o mercado à ideia do produto",
        paragraphs: [
          "Depois de conversar com um amigo que trabalhava com impressão 3D, comprei uma impressora para conhecer o mercado na prática. Logo ficou claro que a maior dificuldade de quem presta o serviço não era imprimir, e sim precificar e organizar o trabalho.",
          "O Precifi3D nasceu dessa observação: entender o problema primeiro e, depois, transformar a solução em produto."
        ]
      },
      {
        id: "problema",
        eyebrow: "Problema",
        title: "Preço no chute e operação dispersa",
        list: [
          "Preços definidos sem considerar todos os custos: material, energia, tempo de máquina, depreciação, falhas, pós-processamento e margem.",
          "Orçamentos enviados como um valor solto por mensagem, sem proposta estruturada.",
          "Materiais, histórico de projetos e propostas espalhados em planilhas e conversas.",
          "Dificuldade de conectar quem precisa de uma peça a prestadores confiáveis."
        ]
      },
      {
        id: "solucao",
        eyebrow: "Solução",
        title: "Três jornadas principais: precificar, orçar e negociar",
        cards: [
          {
            title: "Precificar",
            text: "Calculadora básica e avançada para impressão FDM e resina, com suporte a serviços a laser, considerando material, energia, depreciação, falha, mão de obra, pós-processamento e margem."
          },
          {
            title: "Orçar",
            text: "Cálculos viram projetos com histórico, itens de um carrinho de orçamento e PDFs profissionais, inclusive multi-item e com templates personalizados."
          },
          {
            title: "Negociar",
            text: "Clientes publicam solicitações, prestadores enviam propostas e a negociação segue com comparador de propostas, chat, acompanhamento da entrega e avaliações dos dois lados."
          }
        ],
        paragraphs: [
          "Em volta dessas jornadas existem recursos de apoio: biblioteca de materiais com histórico de preço, visualizador 3D de arquivos STL e OBJ no navegador, rede pública de prestadores, perfil comercial, equipes no plano Business com papéis de acesso, notificações, central de ajuda e suporte. A interface está disponível em português, inglês e espanhol."
        ]
      },
      {
        id: "arquitetura",
        eyebrow: "Arquitetura",
        title: "SPA em React com backend no Supabase",
        list: [
          "Frontend: React 18 e TypeScript com Vite, Tailwind CSS, shadcn/ui e Radix UI; TanStack Query para dados assíncronos e React Hook Form com Zod para formulários.",
          "Backend: Supabase com PostgreSQL, Auth (e-mail/senha e Google), Storage, Realtime e Edge Functions em Deno para pagamentos, notificações e integrações.",
          "Assinaturas: planos Free, Pro e Business para prestadores, com cobrança pelo Stripe Checkout.",
          "SEO: rotas públicas pré-renderizadas no build, com sitemap, robots e metadados por página.",
          "Observabilidade: PostHog e Sentry, ativados somente com consentimento do usuário."
        ]
      },
      {
        id: "decisoes",
        eyebrow: "Decisões técnicas",
        title: "Escolhas que guiam o desenvolvimento",
        cards: [
          {
            title: "Autorização no banco, não na interface",
            text: "A interface reflete as permissões, mas a barreira final de segurança são as políticas RLS, funções e RPCs do PostgreSQL. Contextos ambíguos falham fechados."
          },
          {
            title: "Equipes com papéis explícitos",
            text: "No plano Business, cada operação avalia a empresa envolvida e o papel do usuário (owner, admin, member ou viewer), e não apenas a identidade de quem está logado."
          },
          {
            title: "SEO em uma SPA",
            text: "As páginas públicas são pré-renderizadas no build para serem indexáveis, enquanto a área autenticada continua como aplicação React."
          },
          {
            title: "Mudanças de banco versionadas",
            text: "Alterações de schema ficam em migrations versionadas e passam por revisão e aprovação explícita antes de chegar à produção."
          }
        ]
      },
      {
        ...aiProcessSection,
        paragraphs: [
          "O Precifi3D é desenvolvido com apoio de IA dentro de um processo com regras escritas: um AGENTS.md define fluxo Git, validação por impacto, cuidados com segredos e limites para operações sensíveis.",
          "O trabalho é dividido em missões de escopo único. A IA investiga, implementa e valida dentro do que foi autorizado; commit, deploy, alterações de cobrança e escritas no banco de produção dependem de aprovação explícita minha."
        ]
      },
      {
        id: "aprendizados",
        eyebrow: "Desafios e aprendizados",
        title: "O que construir este produto tem ensinado",
        list: [
          "Segurança em produto multiempresa exige pensar em contexto, papel e falha fechada desde o modelo de dados, não só na tela.",
          "Documentação viva faz diferença: um dossiê de produto reconstruído a partir do código e um handoff de segurança mantêm o estado real do sistema claro.",
          "Testes estruturados: um plano de QA versionado, com centenas de casos organizados por módulo, acompanha a evolução das funcionalidades.",
          "Construir é só uma parte: validar o produto com usuários reais e entender aquisição são desafios tão grandes quanto a engenharia."
        ]
      },
      {
        id: "proximos-passos",
        eyebrow: "Status",
        title: "Em produção e em evolução",
        paragraphs: [
          "O Precifi3D está publicado em precifi3d.com e segue recebendo melhorias."
        ]
      }
    ]
  },
  {
    slug: "license-guard",
    number: "02",
    title: "Precifi3D License Guard",
    category: "Chrome Extension · Software",
    status: "Publicado",
    statusTone: "cyan",
    seoTitle: "Estudo de caso: Precifi3D License Guard — Giuseppe Sasso",
    seoDescription:
      "Estudo de caso do Precifi3D License Guard, extensão para Chrome que analisa e organiza licenças de modelos 3D antes do uso comercial: problema, solução, arquitetura e decisões.",
    lead:
      "Extensão para Google Chrome que ajuda a identificar, interpretar e organizar informações de licença de modelos para impressão 3D antes de utilizá-los ou comercializá-los.",
    image: {
      src: "/uploads/projetos/license-guard.png",
      alt: "Extensão Precifi3D License Guard aberta ao lado de uma página de modelo 3D, exibindo a licença Creative Commons Attribution analisada",
      width: 675,
      height: 396,
      fit: "cover-right"
    },
    links: [
      {
        label: "Ver na Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/precifi3d-license-guard/ifagoapjlbmmdjjflmknjgicnijknldf",
        primary: true,
        badge: { src: "/brand/chrome-web-store-badge.png", width: 206, height: 58 }
      }
    ],
    facts: [
      { label: "Tipo", value: "Extensão para Chrome (MV3)" },
      { label: "Status", value: "Publicado na Chrome Web Store" },
      { label: "Plataformas analisadas", value: "Thingiverse, Printables e MakerWorld" },
      { label: "Código", value: "Repositório privado" }
    ],
    stack: ["Chrome MV3", "JavaScript", "Vite", "Supabase", "PostgreSQL", "Edge Functions", "Stripe", "Resend"],
    sections: [
      {
        id: "contexto",
        eyebrow: "Contexto",
        title: "Um problema que apareceu dentro do ecossistema 3D",
        paragraphs: [
          "Quem imprime e vende peças baixa modelos de plataformas como Thingiverse, Printables e MakerWorld. Cada modelo tem a própria licença, e o que ela permite nem sempre está claro, principalmente quando a intenção é vender a peça.",
          "O License Guard nasceu como produto do ecossistema Precifi3D para tornar essa verificação mais rápida, clara e registrada."
        ]
      },
      {
        id: "problema",
        eyebrow: "Problema",
        title: "Licenças difíceis de encontrar, entender e comprovar",
        list: [
          "As informações de licença ficam em lugares diferentes em cada plataforma.",
          "Termos como atribuição, uso não comercial, obras derivadas e share-alike são fáceis de interpretar errado.",
          "Depois de decidir usar um modelo, raramente fica um registro de qual licença estava publicada naquele momento."
        ]
      },
      {
        id: "solucao",
        eyebrow: "Solução",
        title: "Análise na própria página do modelo, com histórico",
        cards: [
          {
            title: "Analisar",
            text: "Com um clique na página do modelo, a extensão lê as informações relevantes e mostra um resultado informativo: classificação, uso comercial aparente, atribuição, derivados, share-alike, condições, alertas e evidências."
          },
          {
            title: "Registrar",
            text: "Usuários autenticados salvam registros com plataforma, link de origem, criador, licença e histórico da análise, e podem organizar por projeto, cliente, tags, notas e status."
          },
          {
            title: "Usar com segurança",
            text: "A extensão permite abrir a fonte original, copiar a atribuição quando há dados suficientes e reportar problemas de análise."
          }
        ],
        paragraphs: [
          "O plano Free permite até 10 registros salvos; o Premium libera registros ilimitados, com assinatura pelo Stripe."
        ]
      },
      {
        id: "arquitetura",
        eyebrow: "Arquitetura",
        title: "Extensão leve com backend próprio",
        list: [
          "Extensão Chrome Manifest V3 em JavaScript, empacotada com Vite.",
          "Backend no Supabase: autenticação, banco PostgreSQL para os registros e Edge Functions para as operações do servidor.",
          "Assinatura Premium com Stripe Checkout e Customer Portal; a extensão nunca recebe dados de cartão.",
          "E-mails transacionais pelo Resend.",
          "Termos de Uso, Aviso de Privacidade e callbacks de autenticação hospedados no domínio do Precifi3D."
        ]
      },
      {
        id: "decisoes",
        eyebrow: "Decisões técnicas",
        title: "Privacidade, clareza e servidor como fonte da verdade",
        cards: [
          {
            title: "Só age quando o usuário pede",
            text: "A análise acontece por ação do usuário na página aberta. A extensão não monitora a navegação, não coleta geolocalização e não vende dados."
          },
          {
            title: "Informativo, não parecer jurídico",
            text: "O resultado usa linguagem cautelosa, mostra as evidências encontradas e aponta para a fonte original. Licença de modelo não resolve direitos de marca ou personagem, e o produto deixa isso explícito."
          },
          {
            title: "Plano e limites decididos no servidor",
            text: "O direito ao Premium e o limite de registros são definidos pelo backend a partir do status de cobrança, e não pela extensão."
          },
          {
            title: "Sessão e conta sob controle do usuário",
            text: "Nenhuma senha fica salva localmente, apenas o token de sessão, removido no logout. Há política de senha forte e exclusão de conta pelo próprio usuário, com cancelamento da assinatura."
          }
        ]
      },
      aiProcessSection,
      {
        id: "proximos-passos",
        eyebrow: "Status",
        title: "Publicado na Chrome Web Store",
        paragraphs: [
          "A extensão está disponível na Chrome Web Store, com Termos de Uso e Aviso de Privacidade publicados.",
          "O próximo foco é a experiência de uso: evoluir a interface para que fique mais intuitiva e amigável, deixando o resultado da análise ainda mais fácil de entender para quem não está acostumado com licenças."
        ]
      }
    ]
  },
  {
    slug: "giuseppe-sasso",
    number: "03",
    title: "giuseppe.sasso",
    category: "Portfólio · Web",
    status: "Publicado",
    statusTone: "cyan",
    seoTitle: "Estudo de caso: portfólio giuseppe.sasso — Giuseppe Sasso",
    seoDescription:
      "Estudo de caso do portfólio giuseppe.sasso: site estático em Astro com duas frentes, design system próprio, SEO técnico, acessibilidade, segurança e deploy na Hostinger.",
    lead:
      "Portfólio pessoal desenvolvido como site estático em Astro, reunindo trajetória profissional, projetos de engenharia, IA aplicada e uma frente comercial para sites de negócios.",
    image: {
      src: "/uploads/projetos/giuseppe-sasso.png",
      alt: "Captura da página inicial do portfólio giuseppe.sasso",
      width: 1145,
      height: 834,
      fit: "contain"
    },
    links: [
      { label: "Ver ao vivo", href: "https://giuseppesasso.com.br", primary: true },
      { label: "GitHub", href: "https://github.com/giuseppeBSasso/giuseppe-sasso-portfolio" }
    ],
    facts: [
      { label: "Tipo", value: "Site estático" },
      { label: "Status", value: "Publicado" },
      { label: "Hospedagem", value: "Hostinger" },
      { label: "Código", value: "Repositório público (MIT)" }
    ],
    stack: ["Astro", "TypeScript", "CSS", "Design System", "JSON-LD", "Apache .htaccess"],
    sections: [
      {
        id: "contexto",
        eyebrow: "Contexto",
        title: "Uma marca, duas frentes",
        paragraphs: [
          "Eu precisava de um lugar para apresentar minha trajetória técnica, de infraestrutura a software, produto e IA aplicada, e também uma frente comercial para criação de sites para negócios. A decisão foi não criar duas marcas: o site tem duas portas dentro da mesma identidade."
        ]
      },
      {
        id: "problema",
        eyebrow: "Problema",
        title: "Falar com públicos diferentes sem perder coerência",
        list: [
          "Recrutadores e empresas de tecnologia querem ver projetos reais, decisões técnicas e trajetória.",
          "Negócios locais querem entender, em linguagem simples, como ter uma presença digital melhor.",
          "O site precisava ser rápido, indexável, barato de hospedar e fácil de manter."
        ]
      },
      {
        id: "solucao",
        eyebrow: "Solução",
        title: "Duas portas e um design system próprio",
        paragraphs: [
          "Seis páginas públicas organizadas em duas frentes: ciano para engenharia, software e IA, e dourado para a frente comercial. A Home conecta os dois mundos. O visual é escuro, minimalista e técnico, com tipografia Geist, bastante respiro e microinterações discretas.",
          "O design foi explorado no Claude Design e depois implementado em Astro, com desenvolvimento assistido por IA, usando os exports apenas como referência visual e não como código de produção."
        ]
      },
      {
        id: "arquitetura",
        eyebrow: "Arquitetura",
        title: "HTML estático, quase sem JavaScript",
        list: [
          "Astro com geração totalmente estática: sem servidor, sem SPA e sem framework de UI no navegador.",
          "Layout base centraliza metadados, Open Graph, canonical, dados estruturados e o único script da página, um efeito de entrada que respeita prefers-reduced-motion.",
          "Contatos, marca e navegação centralizados em um único arquivo de dados.",
          "Fonte servida pelo próprio domínio, sem requisições a terceiros.",
          "Deploy estático na Hostinger, com configuração de servidor versionada no repositório."
        ]
      },
      {
        id: "decisoes",
        eyebrow: "Decisões técnicas",
        title: "Simplicidade como requisito",
        cards: [
          {
            title: "Estático em vez de SPA",
            text: "O conteúdo é institucional e precisa ser indexável. HTML gerado no build entrega performance, SEO e hospedagem simples, sem custo de runtime."
          },
          {
            title: "Repositório público e sanitizado",
            text: "O código é aberto sob MIT e publicado a partir de um snapshot limpo, sem materiais internos. Textos, fotos e marca têm aviso de uso separado."
          },
          {
            title: "Segurança também em site estático",
            text: "Headers HSTS, nosniff, X-Frame-Options, Referrer-Policy e Permissions-Policy, página 404 própria e redirecionamento 301 para o domínio canônico."
          },
          {
            title: "Fluxo de trabalho com revisão",
            text: "Desenvolvimento na branch dev, publicação na main somente por pull request, com a main protegida contra push direto e force push."
          }
        ]
      },
      {
        id: "qualidade",
        eyebrow: "Qualidade",
        title: "Uma auditoria aplicada ao próprio portfólio",
        paragraphs: [
          "Depois da primeira publicação, o site passou por uma auditoria técnica de segurança, SEO e acessibilidade. O resultado virou uma série de commits pequenos e rastreáveis:"
        ],
        list: [
          "Dependências atualizadas, sem vulnerabilidades conhecidas no npm audit.",
          "Headers de segurança, página 404 própria e redirecionamento de www.",
          "Dados estruturados para buscadores, favicon e ícone para iOS.",
          "Link para pular direto ao conteúdo na navegação por teclado.",
          "Fonte hospedada localmente, eliminando chamadas ao Google Fonts."
        ]
      },
      aiProcessSection,
      {
        id: "proximos-passos",
        eyebrow: "Próximos passos",
        title: "Um portfólio que cresce com a carreira",
        list: [
          "Content-Security-Policy completa, agora possível sem recursos de terceiros.",
          "Novos estudos de caso conforme projetos de IA aplicada forem publicados.",
          "Conteúdo voltado a SEO local para a frente de sites para negócios."
        ]
      }
    ]
  }
];

export const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);
