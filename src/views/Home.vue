<template lang="pug">
  v-container.intro
    v-container
      v-row
        h1.light-text.headliner Establish Your Virtual Identity
      v-row.intro-text
        p.light-text.
          Hello! I'm Christopher Caldwell, a Software Developer based in San
          Antonio, TX.
        p.light-text My passion is to bring your ideas to life online. Let's make it happen.
         
      v-row
        v-col
          v-btn(text dark) Find out more
        v-col
          v-btn.primary-button(dark)
            a(href='/christopher-caldwell-resume.pdf' target="_blank").light-text Resume
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang='sass'>
.intro 
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url("../assets/images/matrix.jpg")
  background-size: cover
  height: 95vh
.headliner
  margin-top: 30%
  margin-bottom: 30%
.intro-text
  margin-top: 15%
</style>