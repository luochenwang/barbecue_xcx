<template>
  <view class="container">
    <view class="main">
        <view class="tt">您的意见</view>
        <view class="form-group">
            <textarea maxlength="500" placeholder="请提供您保贵的建议/意见"></textarea>
        </view>
        <view class="upimg-box">
            <view class="upimg-btn">
                <input type="file">
            </view>
        </view>
    </view>
    <view class="submit">立即提交</view>
  </view>
</template>

<script>

export default {
  name: 'feedback',
  components: {

  }
}
</script>

<style lang="scss">
@import "./feedback";
</style>
