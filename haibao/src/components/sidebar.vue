<!--页面底部-->
<template>
    <movable-area class="sidebar">
      <movable-view :direction="'vertical'" :y="y" @change="moveEnd">
        <view>
            <view class="item icon-consult" @tap="service">在线咨询</view>
            <view class="item icon-back" @tap="back">返回上级</view>
        </view>
      </movable-view>
    </movable-area>
</template>

<script>
var plugin = requirePlugin("ykfchat");
import { createCache } from "./../libs/globalData";
const globalData = createCache();
var timr = null;
  export default {
    name: 'sidebar',
    data() {
        return {
          openid:'',
        }
      },
    computed:{
      authModel(){
          return this.$store.state.authModel;
      },
      userInfo(){
          return this.$store.state.userInfo;
      },
      y(){
          return this.$store.state.sidebarY;
      }
    },
    created(){
      this.openid = globalData.get('openid');
      if(!this.y){
        this.$store.commit('set_sidebarY',wx.getSystemInfoSync().windowHeight - 130);
      }
    },
    methods: {
      back(){
        wx.navigateBack();
      },
      getOpenId(callback) {
          let data = {
            openid: this.openid
          }
          callback(data)
      },
      session(callback) {
          let data = {
            sessionFrom: this.userInfo
          }
          callback(data)
      },
      service(){
        plugin.callback.on("getOpenId", this.getOpenId, this); // 传递openid，注意路径后一定要声名&getOpenIdType=2，否则传递无效
        plugin.callback.on("getSessionFrom", this.session, this); // 传递客户资料
        wx.navigateTo({
            url: 'plugin://ykfchat/chat-page?wechatapp_id=219196&channel_id=25200&scene=p86776wmyjpl&getOpenIdType=2',
        });
      },
      moveEnd(e){
        clearTimeout(timr);
        timr = setTimeout(()=>{
          this.$store.commit('set_sidebarY',e.detail.y);
        },500);
      }
    }
  }
</script>

<style lang="scss">
  .sidebar{
      position: fixed;
      left:-1px;
      height:100%;
      top:0;
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
