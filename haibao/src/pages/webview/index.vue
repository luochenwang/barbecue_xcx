<template>
  <web-view :src="src"></web-view>
</template>

<script>

export default {
  name: 'webview',
  data() {
      return {
        src:''
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
  // return eventHandler接收到的分享参数
    return {
      title: '自定义转发标题',
      path: '/pages/webview/index?src='+this.src
    };
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
