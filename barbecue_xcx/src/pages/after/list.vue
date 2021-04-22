<template>
  <view class="container container-top">
    <view class="tab-nav">
        <view class="item" :class="{'active' : typeIndex == ''}" @click="setType('')">申请售后</view>
        <view class="item" :class="{'active' : typeIndex == 1}" @click="setType(1)">全部售后</view>
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
                    <navigator :url="'/pages/after/index?id='+item.id" class="btn">申请退款</navigator>
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

  },
  data() {
      return {
        list:[],
        typeIndex:0,
      }
  },
  mounted(){

  },
  methods: {
    setType(val){
      if(val != this.typeIndex){
        this.typeIndex = val;
      }
    },
    getdata(){
        ajax({
            url:'mxrs/wx/order/findUserOrder',
            data:{
                orderState:this.typeIndex
            }
        }).then(res=>{
          
        });
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
