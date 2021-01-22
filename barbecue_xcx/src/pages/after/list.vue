<template>
  <view class="container container-top">
    <view class="tab-nav">
        <view class="item active">申请售后</view>
        <view class="item">全部售后</view>
    </view>

    <view class="tab-content">
        <view class="list">
            <view class="item">
                <view class="order-num">
                    <text>机器编号251124626121</text>
                    <text>订单编号251124626121</text>
                </view>
                <view class="pro-list">
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                </view>
                <view class="total-box">
                    <view class="total">数量：6串  已付款：￥24.00<text>退款中</text></view>
                    <view class="time">2018.1.1</view>
                </view>
                <view class="btn-box">
                    <view class="btn">申请退款</view>
                </view>
            </view>
        </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'list',
  components: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
