<template>
  <view class="container">
    <view class="leads">
        <view class="form-group">
            <view class="label">联系人</view>
            <input type="text" placeholder="用于收货时对您的称呼">
        </view>
        <view class="form-group">
            <view class="label">性别</view>
            <view class="gender">
                <view class="item active">男</view>
                <view class="item">女</view>
            </view>
        </view>
        <view class="form-group">
            <view class="label">手机号</view>
            <input type="text" placeholder="输入收货人手机号">
        </view>
        <view class="form-group">
            <view class="label">地址</view>
            <input type="text" placeholder="输入收货地址">
        </view>
        <view class="form-group">
            <view class="label">标签</view>
            <view class="tag-list">
                <text class="active">公司</text>
                <text>家</text>
                <text>学校</text>
            </view>
        </view>
    </view>
    <view class="set-default">设为默认地址</view>

    <view class="submit">保存地址</view>
  </view>
</template>

<script>

export default {
  name: 'index',
  components: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
