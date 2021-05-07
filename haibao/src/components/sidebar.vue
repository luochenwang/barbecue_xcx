<!--页面底部-->
<template>
    <view>
      <movable-area class="sidebar">
        <movable-view :direction="'vertical'" :y="y" @change="moveEnd">
          <view>
              <view class="item icon-consult" @tap="service" v-if="server">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/side1.png"/>
              </view>
              <view class="item icon-back" @tap="back">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/side2.png"/>
              </view>
          </view>
        </movable-view>
      </movable-area>
      <consult-leads :tp_value="tp_value"/>
    </view>
</template>

<script>
var plugin = requirePlugin("ykfchat");
import { createCache } from "./../libs/globalData";
const globalData = createCache();
var timr = null;
  export default {
    props: {
      tp_value:{
        type:String,
        default:''
      },
      server:{
        type: Boolean,
        default: false
      }
    },
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
        wx.navigateBack({
          fail:function(){
            wx.reLaunch({
              url: '/pages/index/index'
            })
          }
        });
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
        this.$store.commit('set_consultLeadsModel',true);
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
      /*.icon-consult:before{
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
      }*/
      .item{
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          /*width:165rpx;
          line-height:70rpx;
          border-top-right-radius:20rpx;
          border-bottom-right-radius:20rpx;
          border:1px solid #ca8989;
          background-color:rgba(255,255,255,0.5);
          font-size:22rpx;
          color:#ca8989;*/
          margin-bottom:20rpx;
          width:156rpx;
          image{
            width:100%;
            height:70rpx;
          }
      }
  }
</style>
