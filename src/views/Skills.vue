<template lang="pug">
  v-container.about
    v-row
      v-col
        h2.title-header Areas that I can bring immediate value
    v-row
      v-col
        v-divider
    v-row
      v-col 
    v-row
      v-expansion-panels(tile flat)
        Skill(
          v-for="skill in skills" 
          :title="skill.title" 
          :imageUrl="skill.imageUrl"
        )
</template>

<script>
import { skills } from '@/data/constants'
import Skill from '@/components/skills/Skill.vue'
export default {
  name: 'About',
  components: {
    Skill
  },
  data(){
    return {
      skills
    }
  }
}
</script>

<style lang='sass'>
.about-header
  margin-top: 15%
  margin-left: 5%
.v-expansion-panel
  background-color: transparent !important
  box-shadow: none !important
  &::before
    position: relative !important
</style>