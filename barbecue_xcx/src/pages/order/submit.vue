<template>
  <view class="container container-bottom">
    <view class="main">
        <view class="select-device">
            <view class="tt">选择设备</view>
            <view class="list" v-if="false">
                <view class="item active">
                    <view class="name">
                        <text>南翔渔村店</text>
                        <text class="num">(编号：8888888888)</text>
                    </view>
                    <view class="txt">数量：辣（100串） 不辣（120串）</view>
                    <view class="txt">嘉定区杜元璐999号09室</view>
                    <view class="navigation">330m</view>
                </view>
                <view class="item">
                    <view class="name">
                        <text>南翔渔村店</text>
                        <text class="num">(编号：8888888888)</text>
                    </view>
                    <view class="txt">数量：辣（100串） 不辣（120串）</view>
                    <view class="txt">嘉定区杜元璐999号09室</view>
                    <view class="navigation">330m</view>
                </view>
            </view>
            <view class="no-data">
                <image src="http://172.16.1.142:3833/order/no_data.png" mode="widthFix"></image>
                <view class="txt">哇哦 ~ 当前没有可用设备哦~</view>
            </view>
        </view>

        <view class="select-num">
            <view class="tt">选择设备</view>
            <view class="list">
                <view class="item active">4</view>
                <view class="item">6</view>
                <view class="item">8</view>
            </view>
        </view>

        <view class="select-flavor">
            <view class="tt">选择口味</view>
            <view class="list">
                <view class="item active">微辣</view>
                <view class="item">不辣</view>
            </view>
        </view>

        <view class="submit">下一步</view>
    </view>

    <webFooter/>
  </view>
</template>

<script>
import webFooter from '../../components/webFooter.vue'

export default {
  name: 'user',
  components: {
    webFooter
  }
}
</script>

<style lang="scss">
@import "./submit";
</style>
