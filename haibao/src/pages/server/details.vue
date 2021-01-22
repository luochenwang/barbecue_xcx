<template>
  <view class="container">
    <view class="list">
        <view class="item" :class="{'active' : item.show}" v-for="(item,index) in list">
            <view class="name" @tap="toggleInfo(index)">{{item.title}}</view>
            <view class="info-content" v-show="item.show">
              <view class="info">
                <view class="info-l">
                  <image :src="item.pdf_picture" mode="widthFix"/>
                </view>
                <view class="info-r">
                  <view class="txt icon-file" @tap="viewPdf(item)">操作指南</view>
                  <view class="txt icon-download">下载资料</view>
                  <view class="time">更新时间：2021年1月8日</view>
                </view>
              </view>
              <view class="info">
                <view class="info-l">
                  <video :src="item.video_filename"></video>
                </view>
                <view class="info-r">
                  <view class="txt icon-play">操作视频</view>
                  <view class="txt icon-download">下载资料</view>
                  <view class="time">更新时间：2021年1月8日</view>
                </view>
              </view>
            </view>
        </view>
    </view>

    <sidebar/>
  </view>
</template>

<script>
import sidebar from "../../components/sidebar";
import { ajax } from "../../libs/ajax";

export default {
  name: 'server_details',
  data() {
      return {
        searchVal:'',
        list:[]
      }
    },
  components: {
      sidebar
  },
  onLoad(option) {
      if(option.id){
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_tech_detail',
                tech_id:option.id
            },
        }).then(res=>{
            for(let item of res.list){
              item.show = false;
            }
            this.list = res.list;
        })
      }else{
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_tech_search',
                keywords:option.search_val
            },
        }).then(res=>{
            this.list = res.list;
        })
      }
  },
  methods: {
    toggleInfo(index){
      this.list[index].show = !this.list[index].show;
    },
    viewPdf(item){
      
      wx.navigateTo({url:'/pages/webview/index?src='+item.pdf_filename});
      // wx.downloadFile({
      //   // 示例 url，并非真实存在
      //   url:item.pdf_filename,
      //   success: function (res) {
      //     const filePath = res.tempFilePath
      //     wx.openDocument({
      //       filePath: filePath,
      //       success: function (res) {
      //         console.log('打开文档成功')
      //       }
      //     })
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
@import "./details";
</style>
