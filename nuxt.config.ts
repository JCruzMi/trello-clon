// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/trello-clon/",
    buildAssetsDir: "assets/",
  },
  ssr: false,
  css: ["~/assets/css/vello.css"],
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxt/ui", "@vueuse/nuxt", "@formkit/auto-animate"],
  colorMode: {
    preference: "dark",
  },
});
