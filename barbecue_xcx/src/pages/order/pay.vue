<template>
  <view class="container">
    <view class="tips">亲爱的顾客，您前面还有8串，约<text>10分钟</text>后可取</view>
    <view class="order-info">
        <view class="store-name">
            <text class="tag">自取</text>
            <text>南翔渔村店</text>
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
        <view class="total">合计 <text>￥48</text></view>
    </view>
    <view class="pay-info">
        <view class="item icon-arrow">
            <view class="key">使用优惠券</view>
            <view class="val yellow-txt">24元新人免单券</view>
        </view>
        <view class="item">
            <view class="key">微信支付</view>
            <image src="https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/order/icon_wechat.png" mode="widthFix" class="icon-pay"/>
        </view>
    </view>
    <view class="footer-btn">
        <view class="txt">共2件，合计: <text>￥48</text></view>
        <view class="btn" @tap="pay">去支付</view>
    </view>
  </view>
</template>

<script>
import {ajax} from '../../libs/ajax.js';

export default {
  name: 'pay',
  components: {

  },
  data() {
      return {
        
      }
  },
  mounted(){
    wx.showModal({
        title: '提示',
        content: '为了不影响其他用户下单，请您于20分钟内到达指定地点机器取串。如您超时未取，将由我们工作人员代为处理。由此产生的损失上海玺农科技将不承担相关责任！',
        cancelText:'不同意',
        confirmText:'同意',
        confirmColor: '#ec8f26',
        success: res => {
            if (res.confirm) {

            }
        }
    });
  },
  methods: {
    pay(){
        ajax({
            url:'mxrs/mac/pay/wePayPrecreate/v2.0',
            data:{
              deviceId:'#ID-C8AE9CD01602C',
              precreateTime:'2021-04-16 18:12',
              productId:'p44832633',
              productNum:1,
              productFlavor:1,
              openId:'o8FV85ctN8oeOa6eyNsbPueQvKAM',
              companyId:'cid2416065219'
            }
        }).then(res=>{
            wx.requestPayment(
            {
            ...res.data,
            paySign:res.data.sign,
            timeStamp:Date.parse(new Date())+'',
            'success':function(res){
                console.log(res);
            },
            'fail':function(res){
                console.log(res);

            },
            'complete':function(res){}
            })
        });
    }
  }
}
</script>

<style lang="scss">
@import "./pay";
</style>
