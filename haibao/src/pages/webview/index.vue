<template>
  <web-view :src="src"></web-view>
</template>

<script>

export default {
  name: 'webview',
  data() {
      return {
        title:'',
        src:''
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
  // return eventHandler接收到的分享参数
    return {
      title: this.title,
      path: '/pages/webview/index?src='+this.src
    };
  },
  onLoad(option) {
    this.title = option.title;
    this.src = option.src;
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
