<template lang="pug">
  v-container
    v-row
      v-col
        h2.title-header Projects
    v-row
      v-col
        v-divider
    v-row
      Project(
        v-for="(project, index) in projects" 
        :key="`${project.id}-${index}-id`"
        :project="project"
      )


</template>

<script>
import Project from '@/components/projects/Project.vue'
import { projects } from '@/data/constants'
export default {
  name: 'Projects',
  components: {
    Project
  },
  data(){
    return {
      projects
    }
  }
}
</script>

<style lang='sass'>
#projects-header
  margin-top: 15%
</style>