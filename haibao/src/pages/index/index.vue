<template>
    <view class="container">
        <!-- <webheader/> -->
        
        <view class="banner">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/banner.jpg" mode="widthFix"/>
        </view>
        <view class="search-box">
            <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal'/>
            <view class="search-btn" @tap="search()">点击搜索</view>
        </view>
        <view class="nav">
            <navigator class="item" url="/pages/server/list?id=1">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav1.png"/>
                <text>安装</text>
            </navigator>
            <navigator class="item" url="/pages/server/list?id=2">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav2.png"/>
                <text>日常维护</text>
            </navigator>
            <navigator class="item" url="/pages/server/list?id=3">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav3.png"/>
                <text>故障处理</text>
            </navigator>
            <navigator class="item" url="/pages/server/list?id=4">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav4.png"/>
                <text>切割优化</text>
            </navigator>
            <navigator class="item" url="/pages/server/list?id=5">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav5.png"/>
                <text>部件查询</text>
            </navigator>
            <navigator class="item" url="/pages/server/list?id=6">
                <image src="https://campaign5.method-ad.cn/hypertherm/img/nav6.png"/>
                <text>部件拆装</text>
            </navigator>
        </view>

        <sidebar/>
    </view>
</template>

<script>
import { createCache } from "../../libs/globalData";
import { ajax } from "../../libs/ajax";
import sidebar from "../../components/sidebar";
import webheader from "../../components/webheader";
const c = createCache();
c.set("test", 100);
console.log(c.get("test"));

export default {
  name: "Index",
  data() {
      return {
        searchVal:''
      }
    },
  components: {
      sidebar,
      webheader
  },
  mounted() {

  },
  methods: {
    search(){
        if(this.searchVal == ''){
            wx.showToast({
                title: '请输入要搜索的内容',
                icon: 'none',
                duration: 2000,
            })
            return false;
        }
        wx.navigateTo({url:'/pages/server/details?search_val='+this.searchVal});
    }
  }
};
</script>

<style lang="scss">
@import "./index";
</style>
