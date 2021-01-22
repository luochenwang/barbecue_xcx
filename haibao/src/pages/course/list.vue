<template>
  <view class="container">
    <view class="category-nav">

        <view class="select-box">
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
        <view class="tt">视频课程</view>
        <view class="list">
            <view class="item" v-for="(item,index) in list">
                <view class="item-l">
                    <image :src="item.picture" mode="widthFix"/>   
                </view>
                <view class="item-r">
                    <view class="name">{{item.title}}</view>
                    <view class="btn-box">
                        <view class="btn active" @tap="viewVideo(item)">查看视频</view>
                        <view class="btn">下载资料</view>
                    </view>
                </view>
            </view>
        </view>
    </view>


    <videVideo :viewVideoSrc.sync="viewVideoSrc"/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import videVideo from "../../components/videVideo";

export default {
  name: 'course_list',
  data(){
    return {
        multiIndex: [0, 0, 0],
        multiArray: [[{}],[{}],[{}]],
        list:[],
        viewVideoSrc:''
    }
  },
  components: {
    videVideo
  },
  mounted() {
        ajax({
              url:'xcx_request.php',
              data:{
                  act:'get_class_industry',
                  product_id:1,
                  purpose_id:1,
              },
        }).then(res=>{
            this.$set(this.multiArray,0,res.list);

            this.getPurpose(true);
        })
    },
    methods: {
        viewVideo(item){
            this.viewVideoSrc = item.video_filename;
        },
        getData(){
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_class_list',
                      category_id:1,
                      industry_id:this.multiArray[0][this.multiIndex[0]].id,
                      purpose_id:this.multiArray[1][this.multiIndex[1]].id,
                      product_id:this.multiArray[2][this.multiIndex[2]].id,
                      page_id:1,
                  },
            }).then(res=>{
                this.list = res.list;
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
                      industry_id:this.multiArray[1][this.multiIndex[1]].id,
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
