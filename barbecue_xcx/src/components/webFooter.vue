<!--页面底部-->
<template>
  <view class="footer">
      <view class="item" :class="{'active' : type == 'home'}" @tap="toview('home','/pages/index/index')">
          <text class="icon-home"></text>
          <view class="txt">首页</view>
      </view>
      <view class="item" :class="{'active' : type == 'device'}" @tap="toview('device','/pages/map/index')">
          <text class="icon-device"></text>
          <view class="txt">附近设备</view>
      </view>
      <view class="item">
          <text class="icon-order"></text>
      </view>
      <view class="item" :class="{'active' : type == 'scan'}" @tap="toview('scan','/pages/index/index')">
          <text class="icon-scan"></text>
          <view class="txt">扫码付款</view>
      </view>
      <view class="item" :class="{'active' : type == 'my'}" @tap="toview('my','/pages/user/index')">
          <text class="icon-my"></text>
          <view class="txt">我的</view>
      </view>
  </view>
</template>

<script>
  export default {
      name: 'webFooter',
      props:['type'],
      data() {
          return {
            
          }
      },
      mounted(){

      },
      methods: {
        toview(type,url){
          console.log(type);
          if(type != this.type){
              wx.navigateTo({ url: url });
          }
        }
      }
  }
</script>

<style lang="scss">
  .footer{
      position: fixed;
      bottom:0;
      left:0;
      width:100%;
      height:100rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background:#fff;
      box-shadow:0 0 10rpx #ebebeb;
      z-index:10;
    .item{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        &.active{
            .icon-home{
                background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_home2.png) no-repeat top center/100% auto;
            }
            .icon-device{
                background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_device2.png) no-repeat top center/100% auto;
            }
            .icon-scan{
                background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_scan2.png) no-repeat top center/100% auto;
            }
            .icon-my{
                background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_user2.png) no-repeat top center/100% auto;
            }
            .txt{
                color:#ec8f26;
            }
        }
        .icon-order{
            width:103rpx;
            height:107rpx;
            background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_order.png) no-repeat top center/100% auto;
            margin-top:-40rpx;
        }
        text{
            width:50rpx;
            height:50rpx;
            margin-bottom:5rpx;
        }
        .txt{
            font-size:23rpx;
            color:#888888;
        }
        .icon-home{
            background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_home1.png) no-repeat top center/100% auto;
        }
        .icon-device{
            background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_device1.png) no-repeat top center/100% auto;
        }
        .icon-scan{
            background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_scan1.png) no-repeat top center/100% auto;
        }
        .icon-my{
            background: url(https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/icon_footer_user1.png) no-repeat top center/100% auto;
        }
    }
  }
</style>
