<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
        <picker @change="bindPickerChange1" :value="index1" :range="list1" range-key="title">
          <view class="item active">
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_application1.png"/>
              <text>应用</text>
          </view>
        </picker>
        <picker @change="bindPickerChange2" :value="index2" :range="list2" range-key="title">
          <view class="item">
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_pro1.png"/>
              <text>产品</text>
          </view>
        </picker>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>


    <view class="list" v-if="list.length">
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/application/details?case_id='+(item.case_id || '')+'&product_id='+item.product_id">
            <view class="item-l">
                <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="item-r">
                <view class="name">{{item.title}}</view>
            </view>
        </navigator>
    </view>

    <view class="no-data-box" v-if="!list.length && !isFirstAjax">
      <view class="tt txt">抱歉，无法查询到相关内容。</view>
      <view class="txt">如果您想要查询技术相关内容，请点击菜单栏中的<text>“ 在线咨询 ”</text>；</view>
      <view class="txt">如果您想要购买产品，请点击菜单栏中的<text>“ 何处购买 ”</text>；</view>
      <view class="txt">如果您想要咨询其他内容，请点击菜单栏中的<text>“ 联系我们 ”</text>。</view>
    </view>

    <show-filter/>
    <pro-leads/>
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
        index1:0,
        index2:0,
        list1:[],
        list2:[],


        searchModel:false,
        searchVal:'',
        list:[],
        proCover:'',
        isFirstAjax:true,
        option:{},

        page:1,
        loaded:false
      }
    },
  components: {

  },
  onLoad(option) {
      this.option = option || {};
      this.searchVal = option.searchVal;

      this.getData();
      this.getPicker();
  },
  methods: {
    bindPickerChange1(e){
      this.index1 = e.detail.value;
      this.search();
    },
    bindPickerChange2(e){
      this.index2 = e.detail.value;
      this.search();
    },
    toggleInfo(index){
      this.list[index].show = !this.list[index].show;
    },
    writeLeader(){
        this.$store.commit('set_proLeadsModel',true);
    },
    showFilter(){
        this.$store.commit('set_showFilterModel',true);
    },
    search(){
      // if(this.searchVal == ''){
      //     wx.showToast({
      //         title: '请输入要搜索的内容',
      //         icon: 'none',
      //         duration: 2000,
      //     })
      //     return false;
      // }
      this.list = [];
      this.page = 1;
      this.getData();
    },
    bindPickerChange1(e){
      this.index1 = e.detail.value;
      wx.redirectTo({ url: '/pages/application/list?app_id='+this.list1[this.index1].app_id });
    },
    bindPickerChange2(e){
      this.index2 = e.detail.value;
      wx.redirectTo({ url: '/pages/application/list?product_id='+this.list2[this.index2].product_id });
    },
    getPicker(){
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_cases_app',
            },
        }).then(res=>{
            if(res.list){
              this.list1 = res.list;
            }
            this.isFirstAjax = false;
        })
        
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_cases_product',
            },
        }).then(res=>{
            if(res.list){
              this.list2 = res.list;
            }
            this.isFirstAjax = false;
        })
    },
    getData(){
      this.loaded = false;
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_cases',
              keywords:this.searchVal || '',
              product_id:this.option.product_id || '',
              app_id:this.option.app_id || '',
              page:this.page
          },
      }).then(res=>{
        if(res.list){
          this.list.push(...res.list);
          if(res.list.length){
            this.loaded = true;
            ++this.page;
          }
        }
        this.isFirstAjax = false;
      })
    }
  }
}
</script>

<style lang="scss">
@import "../server/list";
@import "../show/list.scss";
.tab-nav{
    width:700rpx;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20rpx 0;
    .item{
        width:315rpx;
        line-height:50rpx;
        text-align: center;
        border-radius:50rpx;
        font-size:22rpx;
        color:#ca8989;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eaeaea;
        image{
            width:50rpx;
            height:50rpx;
        }
        &.active{
            background:#ed1d2f;
            color:#fff;
        }
    }
}
</style>
