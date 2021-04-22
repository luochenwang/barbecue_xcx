<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <image :src="share_picture" mode="widthFix" @tap="openPdf" class="pdf-img"/>

    <sidebar :server="server"/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'webview',
  mixins: [mixin],
  
  data() {
      return {
        title:'',
        src:'',
        share_picture:'',
        server:false,
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
  // return eventHandler接收到的分享参数
    return {
      title: this.title,
      imageUrl:this.share_picture,
      path: '/pages/pdf/index?src='+this.src+'&share_picture='+this.share_picture+'&title='+this.title,
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
    this.title = option.title;
    this.src = option.src;
    this.share_picture = option.share_picture;
    this.openPdf();
    if(this.$store.state.category == 120){
      this.server = true;
    }
  },
  methods: {
    openPdf(){
      wx.downloadFile({
        url:this.src,
        success(res){
          console.log(res)
          let data = res.tempFilePath;
          wx.openDocument({
            filePath:data,
            fileType:'pdf'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.pdf-img{
  display: block;
  margin:0 auto;
}

</style>
