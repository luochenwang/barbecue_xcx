<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="banner">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/course/banner.jpg" mode="widthFix"/>
    </view>
    <view class="nav">
        <navigator class="item" url="/pages/course/list?title=视频课程&category_id=1">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav1.png"/>
            <text>海宝切割学院</text>
        </navigator>
        <navigator class="item" url="/pages/course/list?title=直播课程&category_id=2&no_search=1">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav2.png"/>
            <text>在线课程</text>
        </navigator>
        <navigator class="item" url="/pages/course/center">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav3.png"/>
            <text>个人中心</text>
        </navigator>
    </view>

    <view class="list-content">
        <view class="tt">热门视频</view>
        <view class="list">
            <view class="item" v-for="(item,index) in list" :key="index">
                <view class="item-l">
                    <image :src="item.picture" mode="widthFix"/>   
                </view>
                <view class="item-r">
                    <view class="name">{{item.title}}</view>
                    <view class="btn-box">
                        <view class="btn active" @tap='toViewVideo(item)'>查看视频</view>
                        <!-- <view class="btn" @tap="downloadVideo(item)">下载视频</view> -->
                    </view>
                </view>
            </view>
        </view>
    </view>

    <sidebar/>

    <live-leads/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'course',
  mixins: [mixin],
  data() {
      return {
        list:[],
        viewVideoSrc:''
      }
    },
  components: {

  },
  onLoad(option) {
    this.$store.commit('set_lastTp',3);
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_class_hot',
          },
      }).then(res=>{
          this.list = res.list;
      });
      this.$store.commit('set_category',310);
  },
  onShow(){
      this.$store.commit('set_category',310);
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
