<template lang='pug'>
  v-col(cols='6')
    v-row(justify='center')
      v-col(align='center' cols='5')
        h3 {{ title }}
    v-row(justify='center')
      v-col(cols='10')
        v-img(
          max-height='200px'
          :alt="title"
          :src="require(`@/assets/images/${imageUrl}`)"
          )
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

<style>

</style>