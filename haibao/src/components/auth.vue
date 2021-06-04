<template>
  <view class="auth-float">
    <view class="auth-dialog">
      <button @tap.stop="userInfoHandler">微信登录</button>
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
      wx.getUserProfile({
        desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res);
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
  z-index:1000000;
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
