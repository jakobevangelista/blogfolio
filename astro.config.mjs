import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    // applyBaseStyles: false,
    configFile: "./tailwind.config.js"
  }), prefetch()],
  output: "server",
  adapter: vercel()
});