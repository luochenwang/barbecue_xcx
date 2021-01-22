<template>
  <view class="container">
    <view class='wait-time'>
        <image src="http://192.168.241.6:2832/order/dfk.png" mode="widthFix"></image>
        <text>待付款</text>
        <text class="time">还剩22分29秒</text>
    </view>
    <view class="order-num">
        <text>订单号: 202012200945895</text>
        <text>2020-12-20  08:41</text>
    </view>
    <view class="pro-list">
        <view class="item">
            <view class="item-l">
                <view class="name">草原羊肉肉串</view>
                <view class="flavor">微辣</view>
            </view>
            <view class="item-r">
                <view class="num">x1</view>
                <view class="price">￥24</view>
            </view>
        </view>
    </view>
    <view class="activity">
        <view class="item">
            <view class="key">24元新人免单券</view>
            <view class="money">-￥24</view>
        </view>
    </view>
    <view class="total">
        <view class="txt">共1件商品</view>
        <view class="txt">实付 <text>￥0</text></view>
    </view>
    <view class="address-box">
        <view class="name"><text>自取</text>姓名 138****9282</view>
        <view class="address">上海市嘉定区德园路999号901-1室</view>
    </view>

    <view class="footer-btn">
        <view class="btn">取消订单</view>
        <view class="btn active">去支付</view>
    </view>
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
@import "./wait_pay";
</style>
