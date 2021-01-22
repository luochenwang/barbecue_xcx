<template>
  <view class="container">
    <view class="login-form">
        <view class="form-group icon-phone">
            <input type="number" placeholder="请输入手机号">
        </view>
        <view class="form-group icon-lock">
            <input type="number" placeholder="请输入验证码">
            <view class='get-code'>获取验证码</view>
        </view>
    </view>
    <view class="submit">确定</view>
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
@import "./login";
</style>
