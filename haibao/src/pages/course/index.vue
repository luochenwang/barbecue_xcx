<template>
  <view class="container">
    <view class="banner">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/course/banner.jpg" mode="widthFix"/>
    </view>
    <view class="nav">
        <view class="item">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav1.png"/>
            <text>海宝切割学院</text>
        </view>
        <navigator class="item" url="/pages/course/list">
            <image src="https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav2.png"/>
            <text>直播课程</text>
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
                        <view class="btn active" @tap='viewVideo(item)'>查看视频</view>
                        <view class="btn" @tap="download(item)">下载资料</view>
                    </view>
                </view>
            </view>
        </view>
    </view>


    <videVideo :viewVideoSrc.sync="viewVideoSrc"/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import videVideo from "../../components/videVideo";

export default {
  name: 'course',
  data() {
      return {
        list:[],
        viewVideoSrc:''
      }
    },
  components: {
    videVideo
  },
  onLoad(option) {
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_class_hot',
              openid:'oojTs4sapi_RIJnyJe0Abn_thtYA'
          },
      }).then(res=>{
        console.log(res);
          this.list = res.list;
      })
  },
  methods: {
    viewVideo(item){
        this.viewVideoSrc = item.video_filename;
    },
    download(item){
        wx.showLoading({
            title: '加载中...',
        })
        wx.downloadFile({
         url: item.video_filename,
         success: res => {
           let filePath = res.filePath;
           wx.saveVideoToPhotosAlbum({
             filePath,
             success: file => {
               wx.showModal({
                 title: '提示',
                 content: '下载成功~',
               })
               let fileMgr = wx.getFileSystemManager();
               fileMgr.unlink({
                 filePath: item.video_filename,
                 success: function(r) {
                    
                 },
               })
               wx.hideLoading();
             },
             fail: err => {
               console.log(err)
               wx.showModal({
                 title: '提示',
                 content: '获取权限失败，将无法保存到相册哦~',
               })
               wx.hideLoading();
             }
           })
         }
       })
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
