<!--页面底部-->
<template>
    <view class="sidebar">
        <view class="item icon-consult">在线咨询</view>
        <view class="item icon-back">返回上级</view>
    </view>
</template>

<script>
  export default {
        name: 'sidebar'
  }
</script>

<style lang="scss">
  .sidebar{
      position: fixed;
      left:-1px;
      bottom:30rpx;
      z-index:10;
      .icon-consult:before{
          content:'';
          width:50rpx;
          height:50rpx;
          display: block;
          background:url(https://campaign5.method-ad.cn/hypertherm/img/sidebar1.png) no-repeat 0 0/100% auto;
          margin-right:5rpx;
      }
      .icon-back:before{
          content:'';
          width:50rpx;
          height:50rpx;
          display: block;
          background:url(https://campaign5.method-ad.cn/hypertherm/img/sidebar2.png) no-repeat 0 0/100% auto;
          margin-right:5rpx;
      }
      .item{
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          width:165rpx;
          line-height:70rpx;
          border-top-right-radius:20rpx;
          border-bottom-right-radius:20rpx;
          border:1px solid #ca8989;
          background-color:rgba(255,255,255,0.5);
          font-size:22rpx;
          color:#ca8989;
          margin-bottom:20rpx;
      }
  }
</style>
