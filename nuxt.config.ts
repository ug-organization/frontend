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
  modules: ['@primevue/nuxt-module', 'vue-yandex-maps/nuxt', ['nuxt-mail', {
    message: {
      to: 'd.kireenkov32rus@yandex.ru',
    },
    smtp: {
      service: 'yandex.ru',
      auth: {
        user: 'd.kireenkov32rus@yandex.ru',
        pass: 'hdsolqtgpfzzpfcx',
      },
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      requireTLS: true,
      tls: {
        rejectUnauthorized: false
      }
    },
  }]],
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['InputText','Select','Button','InputMask', 'Textarea', 'InputTextarea']
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