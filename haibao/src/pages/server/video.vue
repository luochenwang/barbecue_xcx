<template>
  <view class="container">
    <view class="tt">{{videoInfo.title}}</view>
    <view class="video-box">
        <video :src="videoInfo.video_filename" :autoplay='true' :controls="true"></video>
    </view>
    <view class="btn-box">
      <view class="btn" @tap="downVideo(videoInfo)">下载资料</view>
    </view>

    <sidebar/>
  </view>
</template>

<script>

export default {
  name: 'video',
  data() {
      return {
        videoInfo:{}
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
    return {
      title: this.videoInfo.title,
      path: '/pages/server/video?title='+this.videoInfo.title+'&video_filename='+this.videoInfo.video_filename+'&video_picture='+this.videoInfo.video_picture
    };
  },
  onLoad(option) {
    console.log(option);
    this.videoInfo = option;
  },
  methods: {

  }
}
</script>

<style lang="scss">
.container{
  padding:30rpx 40rpx 150rpx;
  .tt{
    position: relative;
    padding-left:12px;
    font-size: 28rpx;
    margin-bottom:20rpx;
    &:after{
      content:'';
      position: absolute;
      left:0;
      top:0;
      width:6px;
      height:100%;
      background:#ed1b2e;
    }
  }
  .video-box{
    margin-bottom:20rpx;
    video{
      width:100%;
      height: 380px;
    }
  }
  .btn-box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn{
      font-size:24rpx;
      color:#fff;
      width:140rpx;
      line-height:55rpx;
      border-radius:55rpx;
      background: #77777a;
      margin-left:20rpx;
      text-align: center;
    }
  }
}
</style>
