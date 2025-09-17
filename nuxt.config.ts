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
      to: process.env.MAIL_TO || 'zakaz@yug-ns.ru',
    },
    smtp: {
      service: process.env.MAIL_SERVICE || 'timeweb',
      auth: {
        user: process.env.MAIL_USER || 'zakaz@yug-ns.ru',
        pass: process.env.MAIL_PASS || 'YugNs565620)',
      },
      host: process.env.MAIL_HOST || "smtp.timeweb.ru",
      port: parseInt(process.env.MAIL_PORT || '465'),
      secure: process.env.MAIL_SECURE === 'true' || true,
      requireTLS: process.env.MAIL_REQUIRE_TLS === 'true' || true,
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