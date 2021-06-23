<template>
  <web-view :src="src"></web-view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
export default {
  name: 'user',
  data() {
      return {
        src:''
      }
    },
  components: {

  },
  onLoad(option) {
    this.src = option.src;
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
