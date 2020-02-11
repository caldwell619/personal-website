<template lang='pug'>
  v-col(cols='6')
    v-expansion-panel
      v-expansion-panel-header(expand-icon="")
        template(v-slot:default="{ open }")
          v-col
            v-row(justify='center')
              v-col(align='center')
                h3 {{ title }}
            v-row(justify='center')
              v-col(cols='10')
                v-img(
                  :id="`${title.toLowerCase()}-img`"
                  max-height='400px'
                  :alt="title"
                  :src="require(`@/assets/images/${imageUrl}`)"
                  )
      v-expansion-panel-content
        v-container 
          v-row
            v-col Hey
</template>

<script>
export default {
  name: 'Skill',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='sass'>
</style>