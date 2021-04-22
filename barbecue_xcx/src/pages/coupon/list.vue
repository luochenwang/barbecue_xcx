<template>
  <view class="container">
    <view class="tab-nav">
        <view class="item active">全部</view>
        <view class="item">未使用</view>
        <view class="item">已使用</view>
    </view>

    <view class="tab-content">
        <view class="list" v-if="false">
            <view class="item">
                <view class="coupon-info">
                    <view class="info">
                        <view class="name">新人免单券</view>
                        <view class="time">有效期至2020-12-17</view>
                    </view>
                    <view class="price">￥<text>24</text></view>
                </view>
                <view class="bottom">
                    <view class="rule">使用规则</view>
                    <view class="btn">已使用</view>
                </view>
            </view>
            <view class="item item-use">
                <view class="coupon-info">
                    <view class="info">
                        <view class="name">新人免单券</view>
                        <view class="time">有效期至2020-12-17</view>
                    </view>
                    <view class="price">￥<text>24</text></view>
                </view>
                <view class="bottom">
                    <view class="rule">使用规则</view>
                    <view class="btn">已使用</view>
                </view>
            </view>
        </view>

        <view class="no-data">
            <image src="https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/user/coupon_nodata.png"/>
            <view class="txt">哇哦 ~ 您目前没有任何优惠券哦~</view>
            <navigator url="/pages/index/index" class="to-home">回首页看看</navigator>
        </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'list',
  components: {

  },
  data() {
      return {
        
      }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./list";
</style>
