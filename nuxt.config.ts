// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': '../app',
    '~': '../'
  },
  modules: ['@primevue/nuxt-module', 'vue-yandex-maps/nuxt'],
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['InputText','Select','Button','InputMask', 'Textarea']
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
  yandexMaps: {
    apikey: '2fdf8b95-45b7-4493-9c89-f428d3b39d7a',
  },
})
