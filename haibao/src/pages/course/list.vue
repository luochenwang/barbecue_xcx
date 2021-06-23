<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="category-nav" v-if="searchModel">
        <view class="select-box" v-if="multiArray[1].length > 1">
            <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" :range-key="'title'">
                <view class="picker">
                  当前选择：{{multiArray[0][multiIndex[0]].title}}，{{multiArray[1][multiIndex[1]].title}}
                </view>
            </picker>
        </view>

        <view class="item">{{multiArray[0][multiIndex[0]].title}}</view>
        <view class="item">{{multiArray[1][multiIndex[1]].title}}</view>
        <!-- <view class="item">{{multiArray[2][multiIndex[2]].title}}</view> -->
    </view>
    <view class="list-content">
        <view class="tt">{{title}}</view>
        <view class="list" v-if="list.length">
          <scroll-view class="list-box" :scroll-y="true" @scrolltolower="loadMore">
            <view class="item" v-for="(item,index) in list">
                <view class="item-l">
                    <image :src="item.picture" mode="widthFix"/>   
                </view>
                <view class="item-r">
                    <view class="name">{{item.title}}</view>

                    <!-- 直播课程 -->
                    <view class="btn-box" v-if="categoryId == '2'">
                        <view class="btn active" @tap="toViewVideo(item,tp)" v-if="item.is_appointment == 0">查看视频</view>
                        <!-- <view class="btn" @tap="downloadVideo(item)" v-if="item.is_appointment == 0">下载视频</view> -->
                        <view class="btn reserve" v-if="item.is_appointment != 0" @tap="reserve(item,index)">直播预约</view>
                    </view>
                    <!-- 已完成 -->
                    <view class="btn-box" v-else-if="listCat == 'get_MyFinished'">
                        <view class="btn reserve" @tap="toViewVideo(item,tp)">查看视频</view>
                    </view>
                    <!-- 其他 -->
                    <view class="btn-box" v-else>
                        <view class="btn active" @tap="toViewVideo(item,tp)">查看视频</view>
                        <!-- <view class="btn" @tap="downloadVideo(item)">下载视频</view> -->
                    </view>
                </view>
            </view>
          </scroll-view>
        </view>

        <view v-if="isFirst && !list.length" class="no-data">暂无数据</view>
    </view>

    <sidebar/>
    <live-leads/>
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'course_list',
  mixins: [mixin],
  data(){
    return {
        title:'',
        multiIndex: [0, 0],
        multiArray: [[{title:'请选择视频类型'}],[{title:'请选择产品系列'}]],
        list:[],
        viewVideoSrc:'',
        pageId:1,
        maxPage:2,
        categoryId:'',
        listCat:'',

        searchModel:true,
        isFirst:false,
        tp:''
    }
  },
  components: {

  },
  onLoad(option) {
    this.title = option.title;
    this.categoryId = option.category_id;
    this.listCat = option.cat;
    console.log(option.no_search)
    if(option.no_search){
      this.searchModel = false;
    }
    this.tp = this.$store.state.category;
    if(option.category_id == 2){
      this.tp = 320;
    }

    // ajax({
    //       url:'xcx_request.php',
    //       data:{
    //           act:'get_class_industry',
    //           product_id:0, // 产品id
    //           purpose_id:0, // 目的id
    //       },
    // }).then(res=>{
    //     this.$set(this.multiArray,0,res.list);
    //     this.getPurpose(true);
    // })
    this.getPurpose(true);
  },
    methods: {
      // 预约
      reserve(item,index){
        if(item.appointment_isform > 0){
          wx.showToast({
              title: '您已预约成功',
              icon: 'none',
              duration: 2000,
          });
          this.onLoad();
        }else{
          this.$store.commit('set_liveLeadsModel',true);
          item.appointment = true;
          item.tp = this.tp;
          this.$store.commit('set_leadsItem',item);
        }
      },
      loadMore(){
        var self = this;
        // 当前页是最后一页
        if (self.pageId > this.maxPage){
          return;
        }
        
        ++self.pageId;
        self.getData();
      },
        getData(){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:this.listCat || 'get_class_list',
                      category_id:this.categoryId || '',
                      // industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                      purpose_id:this.multiArray[0][this.multiIndex[0]].purpose_id || 0,
                      product_id:this.multiArray[1][this.multiIndex[1]].product_id || 0,
                      page:this.pageId,
                  },
            }).then(res=>{
              if(res.list){
                this.list.push(...res.list);
              }
              this.maxPage = res.list_num;
              this.isFirst = true;
            })
        },
        getPurpose(isRefresh){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_purpose',
                      product_id:0,
                      // industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                  },
            }).then(res=>{
                res.list.unshift({title:'请选择视频类型'});
                this.$set(this.multiArray,0,res.list);
                this.getProduct(isRefresh);
            })
        },
        getProduct(isRefresh){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_product',
                      purpose_id:0,
                      // industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                  },
            }).then(res=>{
                res.list.unshift({title:'请选择产品系列'});
                this.$set(this.multiArray,1,res.list);
                if(isRefresh){
                    this.getData();
                }
            })
        },
        bindMultiPickerChange: function (e) {
            console.log('picker发送选择改变，携带值为', e.detail.value);
            this.multiIndex = e.detail.value;
            this.pageId = 1;
            this.list = [];
            this.getData();
        },
        bindMultiPickerColumnChange: function (e) {
            console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
            if(e.detail.column == 0 || e.detail.column == 1){
                if(this.multiIndex[e.detail.column] != e.detail.value){
                    this.$set(this.multiIndex,e.detail.column,e.detail.value);
                    this.getPurpose();
                }
            }
        },
    }
}
</script>

<style lang="scss">
@import "./index";
</style>
