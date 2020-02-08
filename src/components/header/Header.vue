<template lang="pug">
  span
    header(v-if="isMobile")
      div.row.mobile-menu-icon
        div.ion-navicon-round.menu-toggle
      div.collapsible-nav-links
        ul.mobile-navigation-links
          li
            a(href="#top") Home
          li
            a(href="#about-me") About
          li
            a(href="#projects") Projects
          li
            a(href="mailto:caldwell8814@gmail.com") Connect
    header(v-else)
      //- v-row
      //-   v-col.navigation-links-container
      //-     ul.navigation-links
      //-       li
      //-         a(href="#about-me") About
      //-       li
      //-         a(href="#about-me") About
      //-       li
      //-         a(href="#projects") Projects
      //-       li
      //-         a(href="mailto:caldwell8814@gmail.com") Connect
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isMobile(){
      return window.innerWidth > 786
    }
  }
}
</script>