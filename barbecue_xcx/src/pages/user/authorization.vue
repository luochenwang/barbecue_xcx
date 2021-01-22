<template>
  <view class="container">
    <view class="logo">
        <image src="http://192.168.241.6:2832/user/logo.png" mode="widthFix"></image>
    </view>
    
    <button class='btn wechat-login' type='default' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">授权登录</button>
    <view class="btn phone-login">手机号码验证登录</view>

  </view>
</template>

<script>

export default {
  name: 'user',
  components: {

  }
}
</script>

<style lang="scss">
@import "./authorization";
</style>
