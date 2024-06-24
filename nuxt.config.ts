// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
app:{
 head: {
    title: 'WinneRose',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to my portfolio! Check out my projects and learn more about me.' },
      { name: 'keywords', content: 'UX/UI designer, front-end developer, full-stack developer, portfolio' },
      { name: 'robots', content: 'index, follow' }, 
    
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
},
  

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
    "@nuxt/image",
    "@nuxt/content",
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
        preference: "dark",
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

  plugins: ["~/plugins/spotify.js"],
});
