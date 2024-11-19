// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },
  app: {
    pageTransition: { name: "fade-page", mode: "out-in" },

    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/vs-favicon.ico",
        },
      ],
    },
  },
});
