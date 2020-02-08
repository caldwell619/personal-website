<template lang='pug'>
  v-row(align='center')
    v-col(cols='2').title-col
      v-icon.icon {{ contactInfo.icon }}
    v-col(cols='7')
      div(:id="idOfContent" v-if="!contactInfo.isLink") {{ contactInfo.content }}
      div(v-else)
        a(:id="idOfContent" :href="contactInfo.linkUrl" target="_blank") {{ contactInfo.linkText }}
    v-col(cols='1')
      v-btn(icon @click="copyToClipBoard")
        v-icon mdi-content-copy
</template>

<script>
import { copyToClipBoard } from '@/helpers/'
export default {
  name: 'ContactBlock',
  props: {
    contactInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    idOfContent(){
      return `${this.contactInfo.type}-text`
    }
  },
  methods: {
    copyToClipBoard(){
      try {
        copyToClipBoard(this.idOfContent)
        this.$emit('copied', true)
      } catch(error){
        this.$emit('copied', false)
      }
    }
  }
}
</script>

<style lang='sass'>
.icon
  font-size: 2em
.title-col
  margin-left: 3%
  
</style>