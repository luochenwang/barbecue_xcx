<template>
    <view class="container container-bottom">
        <!-- banner -->
        <view class="banner">
        <swiper :autoplay="true">
            <swiper-item>
                <view class="swiper-item">
                    <image
                    src="http://192.168.241.6:2832/banner.jpg"
                    mode="widthFix"
                    ></image>
                </view>
            </swiper-item>
            <swiper-item>
            <view class="swiper-item">
                <image
                src="http://192.168.241.6:2832/banner.jpg"
                mode="widthFix"
                ></image>
            </view>
            </swiper-item>
        </swiper>
        </view>
        <!-- 导航 -->
        <view class="nav-box">
        <view class="user-info">
            <view class="info">
                <image src="" alt="" class="headimg"/>
                <view class="name">超人不会飞</view>
            </view>
            <view class="my-news">我的消息</view>
        </view>
        <view class="nav">
            <view class="item">
                <image src="http://192.168.241.6:2832/home_nav1.png" mode="widthFix" />
                <text>个人信息</text>
            </view>
            <view class="item">
                <image src="http://192.168.241.6:2832/home_nav2.png" mode="widthFix" />
                <text>我的福利</text>
            </view>
            <view class="item">
                <image src="http://192.168.241.6:2832/home_nav3.png" mode="widthFix" />
                <text>购物车</text>
            </view>
            <view class="item">
                <image src="http://192.168.241.6:2832/home_nav4.png" mode="widthFix" />
                <text>我的待领串</text>
            </view>
        </view>
        </view>
        <!-- 商场 -->
        <view class="store">
            <view class="store-l">
                <view class="pro-box">
                    <image src="" mode="widthFix" class="pro-img"/>
                    <view class="name">羊肉大礼包</view>
                    <view class="price">398元6斤</view>
                </view>
            </view>
            <view class="store-r">
                <view class="pro-box">
                    <image src="" mode="widthFix" class="pro-img"/>
                    <view class="name">羊肉大礼包</view>
                    <view class="price">398元6斤</view>
                </view>
                <view class="pro-box">
                    <image src="" mode="widthFix" class="pro-img"/>
                    <view class="name">羊肉大礼包</view>
                    <view class="price">398元6斤</view>
                </view>
            </view>
        </view>
        <!-- 加盟 -->
        <view class="join-box">
            <view class="item">
                <view class="name">合作加盟</view>
                <view class="tel">400-666-666</view>
            </view>
            <view class="item">
                <view class="name">商品加盟</view>
                <view class="tel">400-666-666</view>
            </view>
        </view>
        <!-- 公告 -->
        <view class="notice-box">
            <swiper :autoplay="true" :indicator-dots="true" :indicator-color="'rgba(255, 255, 255, .3)'" :indicator-active-color="'#ffffff'">
                <swiper-item>
                <view class="swiper-item">
                    <image
                    src="http://192.168.241.6:2832/banner.jpg"
                    mode="widthFix"
                    ></image>
                </view>
                </swiper-item>
                <swiper-item>
                <view class="swiper-item">
                    <image
                    src="http://192.168.241.6:2832/banner.jpg"
                    mode="widthFix"
                    ></image>
                </view>
                </swiper-item>
            </swiper>
        </view>

        <webFooter :type="'home'"/>
    </view>
</template>

<script>
import { createCache } from "../../libs/globalData";
import webFooter from '../../components/webFooter.vue'
const c = createCache();
c.set("test", 100);
console.log(c.get("test"));

export default {
  name: "Index",
  components: {
      webFooter
  },
};
</script>

<style lang="scss">
@import "./index";
</style>
