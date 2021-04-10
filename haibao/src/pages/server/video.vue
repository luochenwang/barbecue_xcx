<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tt">{{videoInfo.title}}</view>
    <view class="video-box">
        <!-- <video :src="videoInfo.video_filename" :autoplay='true' :controls="true" @loadedmetadata="getLength"></video> -->
        <txv-video :vid="videoInfo.video_url" playerid="txv1" :autoplay='true' :controls="true"></txv-video>
    </view>
    <view class="btn-box">
      <!-- <view class="btn" @tap="downloadVideo(videoInfo)">下载资料</view> -->
    </view>

    <sidebar :server="true"/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'video',
  mixins: [mixin],
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
      imageUrl:this.videoInfo.share_img,
      path: '/pages/server/video?title='+this.videoInfo.title+'&video_url='+this.videoInfo.video_url+'&share_img='+this.videoInfo.share_img+'&video_picture='+this.videoInfo.video_picture + '&id='+this.videoInfo.id,
      success: (res) => {
        ajax({
            url:'xcx_request.php',
            data:{
                act:'set_File_History',
                act2:'share',
                tp:this.$store.state.category,
                tp_value:item.class_id,
                file_tp:'video',
                watch_time:0,
            },
        });
      },
    };
  },
  onLoad(option) {
    console.log(option);
    this.videoInfo = option;
    this.getLength();
  },
  methods: {
    getLength(e){
      // let time = parseInt(e.detail.duration);
      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'read',
          tp: this.$store.state.category,
          tp_value: this.videoInfo.id,
          file_tp: 'video',
          watch_time: '',
        },
      });
    }
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
