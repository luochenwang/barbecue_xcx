<template>
  <web-view :src="src"></web-view>
</template>

<script>
import { ajax } from "../../libs/ajax";

export default {
  name: 'webview',
  data() {
      return {
        title:'',
        src:'',
        share_picture:''
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
  // return eventHandler接收到的分享参数
    return {
      title: this.title,
      imageUrl:this.share_picture,
      path: '/pages/webview/index?src='+this.src+'&share_picture='+this.share_picture+'&title='+this.title,
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
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
