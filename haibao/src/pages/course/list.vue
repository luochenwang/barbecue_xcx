<template>
  <view class="container">
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
                    <view class="btn-box">
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
        page_id:1,
        maxPage:2,
    }
  },
  components: {
    videVideo
  },
  onLoad(option) {
    this.title = option.title;
  },
  mounted() {
        ajax({
              url:'xcx_request.php',
              data:{
                  act:'get_class_industry',
                  product_id:1, // 产品id
                  purpose_id:1, // 目的id
              },
        }).then(res=>{
            this.$set(this.multiArray,0,res.list);
            this.getPurpose(true);
        })
    },
    methods: {
      loadMore(){
        var self = this;
        // 当前页是最后一页
        if (self.page_id > this.maxPage){
          return;
        }
        
        ++self.page_id;
        self.getData();
      },
        getData(){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_list',
                      category_id:1,
                      industry_id:this.multiArray[0][this.multiIndex[0]].id,
                      purpose_id:1,
                      product_id:this.multiArray[2][this.multiIndex[2]].id,
                      page_id:this.page_id,
                  },
            }).then(res=>{
                this.list.push(...res.list);
                this.maxPage = res.list_num;
            })
        },
        getPurpose(isRefresh){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_purpose',
                      product_id:1,
                      industry_id:this.multiArray[0][this.multiIndex[0]].id,
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
                      purpose_id:1,
                      industry_id:this.multiArray[0][this.multiIndex[0]].id,
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
            this.page_id = 1;
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
