<template>
    <view class="container">
        <view class="tab-content">
            <view class="list">
                <view class="item" style="margin-bottom:0;">
                    <view class="order-num">
                        <text>机器编号251124626121</text>
                        <text>订单编号251124626121</text>
                    </view>
                    <view class="pro-list">
                        <image src="" class="img"></image>
                        <image src="" class="img"></image>
                        <image src="" class="img"></image>
                    </view>
                    <view class="total">数量：6串  已付款：￥24.00</view>
                </view>
                <view class="after-info">
                    <view class="tt">申请原因</view>
                    <view class="after-type">
                        <view class="item active">商品原因</view>
                        <view class="item">机器问题</view>
                        <view class="item">其他问题</view>
                    </view>
                    <view class="form-group">
                        <textarea v-mode="" placeholder="请详述您的详细问题"></textarea>
                    </view>
                    <view class="upimg-box">
                        <view class="upimg-btn"><text>上传凭证</text><text>最多3张</text></view>
                    </view>
                    <view class="submit">提交</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

export default {
  name: 'user',
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
@import "./index";
</style>
