<template lang='pug'>
  v-col
    v-card(
      class="mx-auto"
      max-width="375"
    )
      v-img(
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      )
        v-card-title {{ project.title }}
      v-card-subtitle.pb-0Number {{ project.type }}
      card-text.text--primary
        div
          v-col
            div {{ project.description }}
      v-card-actions
        v-row
          v-col(align='end')
            a(:href="project.githubUrl" target="_blank" rel="noopener")
              v-btn( text ) GitHub
            a(
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener"
              v-if="project.hasHostedVersion"
            ) 
              v-btn( text ) Hosted
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>

</style>