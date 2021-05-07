<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>

    <view class="search-box" v-if="searchModel">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>


    <view class="list" v-if="list.length" :class="{'default-list' : !searchModel}">
        <view class="item" :class="{'active' : item.show}" v-for="(item,index) in list">
            <view class="name" @tap="toggleInfo(index)">
              <image :src="item.product_ || proCover" mode="widthFix" class="name-l"/>
              <view class="name-r">{{item.title}}</view>
            </view>
            <view class="info-content" v-show="item.show">
              <view class="info">
                <view class="info-l" @tap="toViewPdf(item)">
                  <image :src="item.pdf_picture" mode="widthFix"/>
                </view>
                <view class="info-r">
                  <view class="txt icon-file" @tap="toViewPdf(item)">操作指南</view>
                  <view class="txt icon-download" @tap="downloadPdf(item)">下载资料</view>
                  <view class="time">更新时间：{{item.pdf_update_date}}</view>
                </view>
              </view>
              <view class="info" v-if="item.video_picture">
                <view class="info-l" @tap="toViewVideo(item)">
                  <image :src="item.video_picture" mode="widthFix"/>
                </view>
                <view class="info-r">
                  <view class="txt icon-play" @tap="toViewVideo(item)">操作视频</view>
                  <!-- <view class="txt icon-download" @tap="downloadVideo(item)">下载资料</view> -->
                  <view class="time">更新时间：{{item.video_update_date}}</view>
                </view>
              </view>
            </view>
        </view>
    </view>

    <view class="no-data" v-if="!list.length && !isFirstAjax">
      <view class="tt txt">抱歉，无法查询到相关内容。</view>
      <view class="txt">如果您想要查询技术相关内容，请点击菜单栏中的<text>“ 在线咨询 ”</text>；</view>
      <view class="txt">如果您想要购买产品，请点击菜单栏中的<text>“ 何处购买 ”</text>；</view>
      <view class="txt">如果您想要咨询其他内容，请点击菜单栏中的<text>“ 联系我们 ”</text>。</view>
    </view>

    <sidebar :server="true"/>

    <live-leads/>
    <download-leads tp="130" :tp_value="id"/>
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
        searchModel:false,
        searchVal:'',
        list:[],
        proCover:'',
        isFirstAjax:true,
        id:''
      }
    },
  components: {

  },
  onLoad(option) {
      this.$store.commit('set_category',120);
      this.id = option.id;
      if(option.id){
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_tech_detail',
                tech_id:option.id
            },
        }).then(res=>{
            this.proCover = res.picture
            if(res.list){
              for(let item of res.list){
                item.show = false;
              }
              this.list = res.list;
            }
            this.isFirstAjax = false;
        })
      }else{
        this.searchModel = true;
        this.searchVal = option.search_val;
        this.search();
      }
  },
  methods: {
    toggleInfo(index){
      this.list[index].show = !this.list[index].show;
    },
    search(){
      if(this.searchVal == ''){
          wx.showToast({
              title: '请输入要搜索的内容',
              icon: 'none',
              duration: 2000,
          })
          return false;
      }
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_tech_search',
              keywords:this.searchVal
          },
      }).then(res=>{
        if(res.list){
          for(let item of res.list){
            item.show = false;
          }
          this.list = res.list;
        }else{
          this.list = [];
        }
        this.isFirstAjax = false;
      })
    }
  }
}
</script>

<style lang="scss">
@import "./details";
</style>
