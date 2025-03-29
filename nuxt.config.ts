// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    app: {
      supabaseKey: process.env.NUXT_SUPABASE_KEY,
    },
    public: {
      supabaseURL: process.env.NUXT_PUBLIC_SUPABASE_URL,
    }
  },
  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
  ],
  css: ['@/assets/main.css'],
})