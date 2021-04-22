<template>
  <view class="container">
    <view class="tab-nav">
        <view class="item" :class="{'active' : typeIndex == ''}" @click="setType('')">全部</view>
        <view class="item" :class="{'active' : typeIndex == 1}" @click="setType(1)">待发货</view>
        <view class="item" :class="{'active' : typeIndex == 2}" @click="setType(2)">待配送</view>
        <view class="item" :class="{'active' : typeIndex == 3}" @click="setType(3)">待收货</view>
    </view>

    <view class="tab-content">
        <view class="list">
            <view class="item" v-for="(item,index) in list">
                <view class="order-num">
                    <text class="tag">自取</text>
                    <text>订单编号：{{item.orderId}}</text>
                    <view class="state">{{item.orderStateStr}}</view>
                </view>
                <view class="pro-list">
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                    <image src="" class="img"></image>
                </view>
                <view class="total">共{{item.roductNum}}个 需付款：￥{{item.payment}}</view>
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
        list:[],
        typeIndex:0,
      };
  },
  components: {

  },
  created(){
    ajax({
        url:'mxrs/wx/order/paymentNo',
        data:{
            orderState:this.typeIndex
        }
    }).then(res=>{
      
    });
  },
  methods: {
    setType(val){
      if(val != this.typeIndex){
        this.typeIndex = val;
      }
    }
  }
}
</script>

<style lang="scss">
@import "./list";
</style>
