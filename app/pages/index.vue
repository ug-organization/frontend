<template>
  <div>
    <HomeHero />
    <HomeAboutVideo />
    <HomeCatalog />
    <HomeAdvantages />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Юг-НС - инжиниринговая организация',
  meta: [
    {
      name: 'description',
      content:
        'Компания «ЮГ» была основана в 2008 году, как инжиниринговая организация со сферой деятельности, заключающейся в реализации проектов по тепло и водоснабжению, водоподготовке и водоотведению, пожаротушению и вентиляции.',
    },
    {
      property: 'og:title',
      content: 'Юг-НС - инжиниринговая организация',
    },
    {
      property: 'og:description',
      content:
        'Компания «ЮГ» была основана в 2008 году, как инжиниринговая организация со сферой деятельности, заключающейся в реализации проектов по тепло и водоснабжению, водоподготовке и водоотведению, пожаротушению и вентиляции.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yug-ns.ru/' },
    { property: 'og:site_name', content: 'Юг-НС' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style scoped lang="scss"></style>
