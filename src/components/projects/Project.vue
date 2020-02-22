<template lang='pug'>
  v-col
    v-card(
      class="mx-auto"
      max-width="345"
    )
      v-img(
        height="120px"
        :src="require(`@/assets/images/${project.imageUrl}`)"
        position='top'
        @load="finishLoading"
      )
        template(name='placeholder')
          v-skeleton-loader(
            v-if="!imageDoneLoading"
            class="mx-auto"
            width="345"
            max-height='130px'
            type="image"
          )
      v-container
        v-row
          v-col
            h3.card-header {{ project.title }}
        v-row(align='center')
          v-col.card-header-left {{ project.type }}
          v-col(v-if="project.hostedUrl" cols=2 align='center')
            a(:href="project.hostedUrl" target="_blank" rel="noopener")
              v-icon(:color="greenColor") {{ project.icon || 'mdi-earth' }}
          v-col(cols=2 align='center')
            a(:href="project.githubUrl" target="_blank" rel="noopener")
              v-icon(:color="greenColor") mdi-github-circle
        v-row(justify='center')
          v-col.text--primary {{ project.description }}
</template>

<script>
import { greenColor } from '@/data/constants'
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      greenColor,
      imageDoneLoading: false
    }
  },
  methods: {
    finishLoading(){
      this.imageDoneLoading = true
    }
  }
}
</script>

<style lang='sass'>
.card-header
  margin-top: 6%
</style>