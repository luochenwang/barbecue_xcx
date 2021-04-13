<template>
  <view class="container container-bottom">
    <!-- 用户头部 -->
    <view class="user-top">
      <view class="user-info">
        <image src="" mode='widthFix' class="headimg"></image>
        <view class="name">我的待取串</view>
      </view>
      <view class="info">
        <view class="item">
          <view class="val">2</view>
          <view class="key">可提现额</view>
        </view>
        <view class="item">
          <view class="val">2</view>
          <view class="key">我的福利</view>
        </view>
        <view class="item">
          <view class="val">2</view>
          <view class="key">我的待取串</view>
        </view>
      </view>
    </view>
    <!-- 订单导航 -->
    <view class="order-nav">
      <view class="my-order">
        <view class="txt">我的订单</view>
        <view class="all-order">全部订单</view>
      </view>
      <view class="nav">
        <view class="item">
          <image src="http://192.168.3.29:4942/user/icon_dfk.png" mode="widthFix"></image>
          <view class="txt">待付款</view>
        </view>
        <view class="item">
          <image src="http://192.168.3.29:4942/user/icon_dfh.png" mode="widthFix"></image>
          <view class="txt">代配送</view>
        </view>
        <view class="item">
          <image src="http://192.168.3.29:4942/user/icon_dsh.png" mode="widthFix"></image>
          <view class="txt">待收货</view>
        </view>
        <view class="item">
          <image src="http://192.168.3.29:4942/user/icon_sh.png" mode="widthFix"></image>
          <view class="txt">售后/退款</view>
        </view>
        <view class="item">
          <image src="http://192.168.3.29:4942/user/icon_pt.png" mode="widthFix"></image>
          <view class="txt">拼团</view>
        </view>
      </view>
    </view>
    <!-- 导航 -->
    <view class="nav-list">
      <navigator url="" class="item icon-address">收货地址管理</navigator>
      <navigator url="" class="item icon-setting">设置</navigator>
      <navigator url="" class="item icon-contact">联系我们</navigator>
      <navigator url="" class="item icon-feedback">意见反馈</navigator>
      <navigator url="" class="item icon-about">关于玺农</navigator>
    </view>


    <webFooter :type="'my'"/>
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
@import "./index";
</style>
