import type { APIRoute } from "astro";
import { caseStudies } from "../data/case-studies";

export const prerender = true;

const publicRoutes = [
  "/",
  "/engenharia/",
  "/projetos/",
  ...caseStudies.map((study) => `/projetos/${study.slug}/`),
  "/sites/",
  "/sobre/",
  "/falar-comigo/"
];

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL("https://giuseppesasso.com.br");
  const urls = publicRoutes
    .map((route) => `  <url><loc>${new URL(route, siteUrl).toString()}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
