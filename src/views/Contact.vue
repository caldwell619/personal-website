<template lang='pug'>
  v-container
    v-row
      v-col
        h1.title-header Contact Information
    v-row
      v-col
        v-divider
    ContactBlock(
      v-for="(contact, index) in contactInfo" 
      :contactInfo="contact"
      :key="`contact-item-${index}`"
      @copied="showCopiedConfirmation"
    )
    Snackbar(:isShown="isSnackBarShown" :color="colorOfSnackBar" :timeout="snackBarTimeout" :snackbarText="snackbarText")
</template>

<script>
import { contactInfo } from '@/data/constants'
import ContactBlock from '@/components/util/ContactBlock'
import Snackbar from '@/components/util/Snackbar'

export default {
  name: 'Contact',
  components: {
    ContactBlock,
    Snackbar
  },
  data(){
    return {
      contactInfo,
      isSnackBarShown: false,
      snackbarText: '',
      colorOfSnackBar: '',
      snackBarTimeout: 2000
    }
  },
  methods: {
    showCopiedConfirmation(wasSuccessful){
      this.isSnackBarShown = true
      if(wasSuccessful){
        this.snackbarText = 'Copied!'
        this.colorOfSnackBar = 'success'
      } else {
        this.snackbarText = 'Oops. Something went wrong'
        this.colorOfSnackBar = 'error'
      }
      setTimeout(() => {
        this.isSnackBarShown = false
        this.snackbarText = ''
      }, this.snackBarTimeout + 100)
    }
  }
}
</script>

<style lang='sass'>
.title-col
  margin-left: 3%
.contact-container
  margin-top: 15%

</style>