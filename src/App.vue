<template lang="pug">
  v-app
    Header
    body
      main
        About
        Projects
</template>

<script>
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
export default {
  name: 'App',
  components: {
    Intro,
    About,
    Projects
  },
  data(){

  }
}
</script>

<style lang="sass" scoped>
@import './sass/main'
</style>
