<template>
  <view class="header" :style="{
    height:(menuButtonObject.height+menuButtonObject.top+10)+'px',
    paddingTop:menuButtonObject.top+'px'
  }">
    <image src="https://campaign5.method-ad.cn/hypertherm/img/logo.png" mode="widthFix" />
  </view>
</template>
<script>
export default {
  name: 'webheader',
  data() {
    return {
      menuButtonObject: {}
    }
  },
  created() {
    this.menuButtonObject = wx.getMenuButtonBoundingClientRect();
    console.log(this.menuButtonObject);
  },
  methods: {

  }
}

</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  padding: 0 30rpx;
  background: #fff;
  z-index: 20;
  display: flex;
  align-items: center;

  image {
    width: 191rpx;
    vertical-align: middle;
    margin-top:-5px;
  }
}

</style>
