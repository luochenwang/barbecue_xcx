<template>
  <view class="container">
    <view class="lodding">
        <view class="lodding-box">
            <view class="loddingImg">
                <image src="http://192.168.3.29:4942/shop-img/fire.png" mode="widthFix"/>
            </view>
            <view class="loddingText">请耐心等待您的烤串正在加工</view>
            <view class="loddingCountdown">倒计时</view>
            <view class="countdownNum">
                <view class="num">0</view>
                <view class="num">3</view>
                <view class="colon">:</view>
                <view class="num">2</view>
                <view class="num">8</view>
            </view>
        </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'making',
  components: {

  }
}
</script>

<style lang="scss">
@import "./making";
</style>
