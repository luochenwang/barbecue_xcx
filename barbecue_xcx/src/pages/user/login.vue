<template>
  <view class="container">
    <view class="login-form">
        <view class="form-group icon-phone">
            <view class="placeholder">请输入手机号</view>
            <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
        </view>
        <view class="form-group icon-lock">
            <input type="number" placeholder="请输入验证码"/>
            <view class='get-code'>获取验证码</view>
        </view>
    </view>
    <view class="submit">确定</view>
  </view>
</template>

<script>
import {ajax} from '../../libs/ajax.js';
export default {
  name: 'user',
  data() {
      return {

      };
  },
  components: {

  },
  methods: {
    getPhoneNumber(e){
      wx.login({
         success: function (loginInfo) {
          ajax({
            url:'mxrs/wxapp/user/loginAuth',
            data:{
              encrypdata: e.detail.encryptedData,
             ivdata: e.detail.iv,
             code: loginInfo.code
            }
          }).then(res=>{
            console.log(res);
          });
         }
      })
    }
  }
}
</script>

<style lang="scss">
@import "./login";
</style>
