<template lang="pug">
  body
    main
      Intro
      About
      Projects
</template>

<script>
  import Intro from '@/components/landing/Intro.vue'
  import About from '@/components/landing/About.vue'
  import Projects from '@/components/landing/Projects.vue'
  export default {
    name: 'App',
    components: {
      Intro,
      About,
      Projects
    }
  }
</script>

<style>

</style>