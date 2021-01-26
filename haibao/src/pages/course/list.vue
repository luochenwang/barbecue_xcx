<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="category-nav">
        <view class="select-box" v-if="multiArray[2].length > 1">
            <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" :range-key="'title'">
                <view class="picker">
                  当前选择：{{multiArray[0][multiIndex[0]].title}}，{{multiArray[1][multiIndex[1]].title}}，{{multiArray[2][multiIndex[2]].title}}
                </view>
            </picker>
        </view>

        <view class="item">{{multiArray[0][multiIndex[0]].title}}</view>
        <view class="item">{{multiArray[1][multiIndex[1]].title}}</view>
        <view class="item">{{multiArray[2][multiIndex[2]].title}}</view>
    </view>
    <view class="list-content">
        <view class="tt">{{title}}</view>
        <view class="list">
          <scroll-view class="list-box" :scroll-y="true" @scrolltolower="loadMore">
            <view class="item" v-for="(item,index) in list">
                <view class="item-l">
                    <image :src="item.picture" mode="widthFix"/>   
                </view>
                <view class="item-r">
                    <view class="name">{{item.title}}</view>

                    <!-- 直播课程 -->
                    <view class="btn-box" v-if="categoryId == '2'">
                        <view class="btn active" @tap="toViewVideo(item)" v-if="item.is_appointment == 0">查看视频</view>
                        <view class="btn" @tap="downloadVideo(item)" v-if="item.is_appointment == 0">下载资料</view>
                        <view class="btn reserve" v-if="item.is_appointment != 0" @tap="reserve(item,index)">直播预约</view>
                    </view>
                    <!-- 已完成 -->
                    <view class="btn-box" v-else-if="listCat == 'get_MyFinished'">
                        <view class="btn reserve" @tap="toViewVideo(item,index)">查看直播</view>
                    </view>
                    <!-- 其他 -->
                    <view class="btn-box" v-else>
                        <view class="btn active" @tap="toViewVideo(item)">查看视频</view>
                        <view class="btn" @tap="downloadVideo(item)">下载资料</view>
                    </view>
                </view>
            </view>
          </scroll-view>
        </view>
    </view>

    <sidebar/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import videVideo from "../../components/videVideo";
import mixin from "../../libs/mixin";

export default {
  name: 'course_list',
  mixins: [mixin],
  data(){
    return {
        title:'',
        multiIndex: [0, 0, 0],
        multiArray: [[{}],[{}],[{}]],
        list:[],
        viewVideoSrc:'',
        pageId:1,
        maxPage:2,
        categoryId:'',
        listCat:'',
    }
  },
  components: {
    videVideo
  },
  onLoad(option) {
    this.title = option.title;
    this.categoryId = option.category_id;
    this.listCat = option.cat;

    ajax({
          url:'xcx_request.php',
          data:{
              act:'get_class_industry',
              product_id:0, // 产品id
              purpose_id:0, // 目的id
          },
    }).then(res=>{
        this.$set(this.multiArray,0,res.list);
        this.getPurpose(true);
    })
  },
    methods: {
      // 预约
      reserve(item,index){
        ajax({
              url:'xcx_request.php',
              data:{
                act:'set_appointment',
                class_id:item.class_id
              },
        }).then(res=>{
            if(res.status == 1){
              wx.showToast({
                  title: '预约成功，可至个人中心查看',
                  icon: 'none',
                  duration: 2000,
              });
              item.is_myappointment = 1;
            }else{
              wx.showToast({
                  title: res.msg,
                  icon: 'none',
                  duration: 2000,
              })
            }
        })
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
                      category_id:this.categoryId,
                      industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                      purpose_id:0,
                      product_id:0,
                      page:this.pageId,
                  },
            }).then(res=>{
              if(res.list){
                this.list.push(...res.list);
              }
              this.maxPage = res.list_num;
            })
        },
        getPurpose(isRefresh){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_purpose',
                      product_id:0,
                      industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                  },
            }).then(res=>{
                this.$set(this.multiArray,1,res.list);
                this.getProduct(isRefresh);
            })
        },
        getProduct(isRefresh){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_product',
                      purpose_id:0,
                      industry_id:this.multiArray[0][this.multiIndex[0]].industry_id,
                  },
            }).then(res=>{
                this.$set(this.multiArray,2,res.list);
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
