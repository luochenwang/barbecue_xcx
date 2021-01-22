<template>
  <view class="container">
    <view class="user-info">
        <view class="headimg">
            <image :src="userInfo.avatarUrl" mode=""/>
        </view>
        <view v-if="userInfo.nickName">
          <view class="name">昵称：{{userInfo.nickName}}</view>
          <view class="time">2020-12-31</view>
        </view>
        <button open-type="getUserInfo" @getuserinfo="userInfoHandler" v-else>微信登录</button>
    </view>
    <view class="nav">
        <view class="item icon-center1">已完成课程</view>
        <view class="item icon-center2">已预约课程</view>
    </view>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import { createCache } from "../../libs/globalData";
const globalData = createCache();

export default {
  name: 'center',
  data() {
      return {
        userInfo:{}
      }
    },
  components: {
      
  },
  onLoad(option) {
      this.userInfo = globalData.get("userInfo") || {};
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_tech_list',
              category_id:option.id
          },
      }).then(res=>{
          this.list = res.list;
      })
  },
  methods: {
    userInfoHandler(){
      var that = this;
      wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
             success: res => {
                globalData.set("userInfo", res.userInfo);
                that.userInfo = res.userInfo;
             }
           })
        } else {

        }
      }
    })
    }
  }
}
</script>

<style lang="scss">
@import "./center";
</style>
