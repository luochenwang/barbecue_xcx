<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
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
      <navigator class="item" url="/pages/show/list">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu4.png" />
        <text>产品展厅</text>
      </navigator>
      <navigator class="item" url="/pages/application/index">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu5.png" />
        <text>产品应用</text>
      </navigator>
     <!--  <navigator url="/pages/video/index" class="item">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/menu6.png" />
        <text>合作伙伴信息查询</text>
      </navigator> -->
    </view>
    <auth :authModel.sync="authModel" v-if="authModel"/>

    <consult-leads/>
  </view>
</template>
<script>
import { createCache } from "../../libs/globalData";
import mixin from "../../libs/mixin";
import { ajax,getOpenid } from "../../libs/ajax";
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
  mixins: [mixin],
  components: {

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
        ajax({
            url:'xcx_request.php',
            data:{
                act:'getUserInfo'
            },
        }).then(res=>{
            this.$store.commit('set_iszixun',res.iszixun);
        })
    });

    var that = this;
    if(!this.userInfo.nickName){
        wx.request({
            url: 'https://campaign5.method-ad.cn/hypertherm/auth2.json?v='+Math.random(),
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
    service() {
      this.$store.commit('set_lastTp',2);
      this.$store.commit('set_consultLeadsModel',true);
      this.$store.commit('set_category',200);
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
