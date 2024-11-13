import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { BASE_URL } from "./src/constants/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mnkndn.github.io",
  base: BASE_URL,
  integrations: [tailwind(), react()],
});
