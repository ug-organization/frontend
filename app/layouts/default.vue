<script lang="ts" setup>
// ID вашего счетчика Яндекс.Метрики
const metrikaId = 'YOUR_YANDEX_METRIKA_ID' // Замените на ваш ID счетчика
</script>

<template>
  <div>
    <CommonHeader />
    <slot />
    <CommonFooter />
    <CommonYandexMetrika :metrika-id="metrikaId" />
  </div>
</template>

<style lang="scss" scoped></style>
