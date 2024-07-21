// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "UX/UI designer, front-end developer, full-stack developer, portfolio",
        },
        { name: "robots", content: "index, follow" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
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
    "@nuxt/image",
    [
      "@nuxt/content",
      {
        apiPrefix: "_content",
        dir: "content",
      },
    ],
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Poppins: true,
        },
      },
    ],
    [
      "@nuxtjs/color-mode",
      {
        preference: "system", // default value of $colorMode.preference
        fallback: "light", // fallback value if not system preference found
      },
    ],
    "@nuxtjs/robots",
    "@nuxtjs/seo",
  ],

  css: ["@/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  site: {
    url: "winnerose.net",
    name: "WinneRose",
    description:
      "Welcome to my portfolio! Check out my projects and learn more about me.",
  },

  plugins: ["~/plugins/spotify.js"],
  compatibilityDate: "2024-07-21",
});