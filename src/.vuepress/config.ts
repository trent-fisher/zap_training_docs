import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/zap_training_docs/",

  lang: "en-US",
  title: "",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
