// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/vello.css"],
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxt/ui", "@vueuse/nuxt", "@formkit/auto-animate"],
  colorMode: {
    preference: "dark",
  },
});
