// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Poppins: true,
        },
      },
    ],
  ],
  css: ["@/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
