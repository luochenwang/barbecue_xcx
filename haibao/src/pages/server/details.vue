<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="list">
        <view class="item" :class="{'active' : item.show}" v-for="(item,index) in list">
            <view class="name" @tap="toggleInfo(index)">{{item.title}}</view>
            <view class="info-content" v-show="item.show">
              <view class="info">
                <view class="info-l" @tap="toViewPdf(item)">
                  <image :src="item.pdf_picture" mode="widthFix"/>
                </view>
                <view class="info-r">
                  <view class="txt icon-file" @tap="toViewPdf(item)">操作指南</view>
                  <view class="txt icon-download" @tap="downloadPdf(item)">下载资料</view>
                  <view class="time">更新时间：2021年1月8日</view>
                </view>
              </view>
              <view class="info">
                <view class="info-l" @tap="toViewVideo(item)">
                  <image :src="item.video_picture" mode="widthFix"/>
                </view>
                <view class="info-r">
                  <view class="txt icon-play" @tap="toViewVideo(item)">操作视频</view>
                  <view class="txt icon-download" @tap="downloadVideo(item)">下载资料</view>
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
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'server_details',
  mixins: [mixin],
  data() {
      return {
        searchVal:'',
        list:[]
      }
    },
  components: {

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
            for(let item of res.list){
              item.show = false;
            }
            this.list = res.list;
        })
      }
  },
  methods: {
    toggleInfo(index){
      this.list[index].show = !this.list[index].show;
    }
  }
}
</script>

<style lang="scss">
@import "./details";
</style>
