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
        src:''
      }
    },
  components: {

  },
  onShareAppMessage: function(res) {
  // return eventHandler接收到的分享参数
    return {
      title: this.title,
      path: '/pages/webview/index?src='+this.src,
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
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
