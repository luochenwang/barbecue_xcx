<template>
  <view class="container">
    <view class="banner">
      <image src="https://campaign5.method-ad.cn/hypertherm/img/home.jpg" mode="widthFix" />
    </view>
    <view class="nav">
      <navigator class="item" url="/pages/server/index">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu1.png" />
        <text>技术服务</text>
      </navigator>
      <view class="item" @tap="service">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu2.png" />
        <text>在线咨询</text>
      </view>
      <navigator class="item" url="/pages/course/index">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu3.png" />
        <text>在线课堂</text>
      </navigator>
      <view class="item" @tap="none">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu4.png" />
        <text>产品展厅</text>
      </view>
      <view class="item" @tap="none">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu5.png" />
        <text>产品应用</text>
      </view>
      <view class="item" @tap="none">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu6.png" />
        <text>合作伙伴信息查询</text>
      </view>
    </view>
    <auth :authModel.sync="authModel" v-if="authModel"/>
  </view>
</template>
<script>
import { createCache } from "../../libs/globalData";
import { ajax,getOpenid } from "../../libs/ajax";
import webheader from "../../components/webheader";
const globalData = createCache();
globalData.set("test", 100);
var plugin = requirePlugin("ykfchat");

export default {
  name: "Index",
  data() {
    return {
      searchVal: '',
      openid: '',
    }
  },
  components: {
    webheader,
  },
  computed:{
    authModel(){
        return this.$store.state.authModel;
    },
    userInfo(){
        return this.$store.state.userInfo;
    }
  },
  mounted() {
    getOpenid().then(openid=>{
        this.openid = openid;
    });

    var that = this;
    if(!this.userInfo.nickName){
        wx.request({
            url: 'https://campaign5.method-ad.cn/hypertherm/auth.json?v='+Math.random(),
            success (res) {
                if(res.data > 0){
                    that.$store.commit('set_authModel',true);
                }
            },
            fail(e){

            }
        });
    }
  },
  methods: {
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
    service() {
      plugin.callback.on("getOpenId", this.getOpenId, this); // 传递openid，注意路径后一定要声名&getOpenIdType=2，否则传递无效
      plugin.callback.on("getSessionFrom", this.session, this); // 传递客户资料
      wx.navigateTo({
        url: 'plugin://ykfchat/chat-page?wechatapp_id=218941&channel_id=25183&scene=p86772ux3apl&getOpenIdType=2',
      });
    },
    none() {
      wx.showToast({
        title: '正在开发中，敬请期待',
        icon: 'none',
        duration: 2000,
      })
    }
  }
};

</script>
<style lang="scss">
@import "./index";

</style>
