<template>
  <view class="container">
    <view class="tab-nav">
        <view class="item active">全部</view>
        <view class="item">待发货</view>
        <view class="item">待配送</view>
        <view class="item">待收货</view>
    </view>

    <view class="tab-content">
        <view class="list">
            <view class="item">
                <view class="order-num">
                    <text class="tag">自取</text>
                    <text>订单编号251124626121</text>
                    <view class="state">待支付</view>
                </view>
                <view class="pro-list">
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                </view>
                <view class="total">共1个 需付款：￥24.00</view>
                <view class="btn-box">
                    <view class="btn">取消</view>
                    <view class="btn active">支付</view>
                </view>
            </view>
        </view>
    </view>
  </view>
</template>

<script>
import {ajax} from '../../libs/ajax.js';

export default {
  name: 'list',
  data() {
      return {

      };
  },
  components: {

  },
  created(){
    ajax({
        url:'mxrs/wx/order/findAllUserOrder',
        data:{
            
        }
    }).then(res=>{
        console.log(res);
    });
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./list";
</style>
