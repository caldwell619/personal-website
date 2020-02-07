<template lang="pug">
  v-container.intro
    v-container
      v-row
        h1.light-text Establish Your Virtual Identity
      v-row
        p.light-text.
          Hello! I'm Christopher Caldwell, a Software Developer based in San
          Antonio, TX.
          #[br] 
          My passion is to bring your ideas to life online. Let's make it happen
      v-row
        v-col
          v-btn(text dark).
            #[a(href="https://drive.google.com/open?id=1FsCgfEbrV9FObTWRe6yTlhVo8sbLc-dr")] Find out more
        v-col
          v-btn.primary(dark).
            #[a(href="https://drive.google.com/open?id=1FsCgfEbrV9FObTWRe6yTlhVo8sbLc-dr")] Resume
</template>

<script>
export default {

}
</script>

<style lang="sass">
.intro 
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url("../../assets/images/matrix.jpg")
  background-size: cover
  height: 95vh
  display: flex
  align-items: center
  justify-content: center
</style>