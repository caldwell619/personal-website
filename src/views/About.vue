<template lang="pug">
  v-container.about
    v-row
      v-col
        h2 Just like every other developer, I know the basics well.
    v-row
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
.about
  background-color: #343434
  color: rgb(210, 230, 210)
  padding-bottom: 5vh
</style>