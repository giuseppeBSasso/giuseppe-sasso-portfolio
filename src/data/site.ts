export const site = {
  name: "Giuseppe Biazotto Sasso",
  brandBase: "giuseppe",
  brandAccent: ".sasso",
  description: "Engenharia de software, IA aplicada e soluções digitais.",
  location: "Lages/SC",
  contacts: {
    whatsappLabel: "WhatsApp — (49) 99953-3419",
    whatsappHref: "https://wa.me/5549999533419",
    emailLabel: "contato@giuseppesasso.com.br",
    emailHref: "mailto:contato@giuseppesasso.com.br",
    commercialEmailLabel: "comercial@giuseppesasso.com.br",
    commercialEmailHref: "mailto:comercial@giuseppesasso.com.br"
  },
  socials: {
    github: "https://github.com/giuseppeBSasso",
    linkedin: "https://www.linkedin.com/in/giuseppe-biazotto-sasso-241941180/"
  }
};

export const mainNav = [
  { label: "Engenharia & IA", href: "/engenharia/" },
  { label: "Projetos", href: "/projetos/" },
  { label: "Sites para negócios", href: "/sites/" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Falar comigo", href: "/falar-comigo/" }
];

export const footerNav = mainNav.filter((item) => item.href !== "/falar-comigo/");
