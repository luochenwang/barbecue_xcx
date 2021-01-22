<!--页面底部-->
<template>
  <view class="full-screen-float" v-if="viewVideoSrc">
    <video :src="viewVideoSrc" :autoplay='true' :controls="true"></video>
    <image src="https://campaign5.method-ad.cn/hypertherm/img/icon_close.png" class="close" @tap="close"></image>
  </view>
</template>
<script>
export default {
  name: 'sidebar',
  props: ['viewVideoSrc'],
  mounted() {

  },
  methods: {
    close(){
        this.$emit('update:viewVideoSrc','');
    }
  }
}

</script>
<style lang="scss">
.full-screen-float {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  video {
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
  }
}

</style>
