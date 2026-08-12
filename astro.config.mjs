import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://giuseppesasso.com.br",
  output: "static",
  compressHTML: true,
  devToolbar: {
    enabled: false
  }
});
