<template>
  <view class="auth-float">
    <view class="auth-dialog">
      <button open-type="getUserInfo" @getuserinfo.stop="userInfoHandler">微信登录</button>
    </view>
  </view>
</template>

<script>
import { ajax } from "../libs/ajax";
import { createCache } from "../libs/globalData";
const globalData = createCache();
export default {
  name: 'user',
  props:['authModel'],
  data() {
      return {

      }
    },
  components: {

  },
  onLoad(option) {

  },
  methods: {
    userInfoHandler() {
      var that = this;
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                globalData.set("userInfo", res.userInfo);
                that.$store.commit('set_authModel',false);
                that.$store.commit('set_useriNfo',res.userInfo);
                ajax({
                    url:'xcx_request.php',
                    data:{
                        act:'editUserInfo',
                        nickname: res.userInfo.nickName,
                        headimgurl: res.userInfo.avatarUrl,
                        gender:res.userInfo.gender,
                        city:res.userInfo.city,
                        country:res.userInfo.country,
                    },
                })
              }
            })
          } else {

          }
        }
      })
    },
  }
}
</script>

<style lang="scss">
.auth-float{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.5);
  z-index:1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .auth-dialog{
    width:500rpx;
    padding:30rpx;
    background:#fff;
    border-radius:20px;
  }
}
</style>
