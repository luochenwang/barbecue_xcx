<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
        <picker @change="bindPickerChange1" :value="index1" :range="list1" range-key="title">
          <view class="item" :class="{'active' : tabIndex == 0}">
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_application1.png" v-if="tabIndex == 0"/>
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_application2.png" v-else/>
              <text>应用</text>
          </view>
        </picker>
        <picker @change="bindPickerChange2" :value="index2" :range="list2" range-key="title">
          <view class="item" :class="{'active' : tabIndex == 1}">
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_pro2.png" v-if="tabIndex == 1"/>
              <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_pro1.png" v-else/>
              <text>产品</text>
          </view>
        </picker>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>

    <view class="list-box">
      <view class="tt">所有应用案例展示</view>
      <view class="list" :class="{'list-all' : !viewAll1}">
        <navigator class="item" v-for="(item,index) in list1" :url="'/pages/application/list?app_id='+item.app_id">
          <view class='img-box'>
            <image :src="item.picture" mode="widthFix"/>
          </view>
          <view class="txt">{{item.title}}</view>
        </navigator>
      </view>
      <view class="view-all" v-if="!viewAll1" @tap="viewAll1 = true">展开更多</view>
    </view>

    <view class="list-box">
      <view class="tt">所有产品案例展示</view>
      <view class="list" :class="{'list-all' : !viewAll2}">
        <navigator class="item" v-for="(item,index) in list2" :url="'/pages/application/list?product_id='+item.product_id">
          <view class='img-box'>
            <image :src="item.picture" mode="widthFix"/>
          </view>
          <view class="txt">{{item.title}}</view>
        </navigator>
      </view>
      <view class="view-all" v-if="!viewAll2" @tap="viewAll2 = true">展开更多</view>
    </view>
    <sidebar/>


    
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'server_details',
  mixins: [mixin],
  data() {
      return {
        searchModel:false,
        searchVal:'',
        index1:0,
        index2:0,
        list1:[],
        list2:[],
        isFirstAjax:true,
        tabIndex:0,
        viewAll1:false,
        viewAll2:false,
      }
    },
  components: {

  },
  onLoad(option) {
    this.$store.commit('set_lastTp',5);
    this.getData();
    this.$store.commit('set_category',520);
  },
  methods: {
    setTab(index){
      if(this.tabIndex != index){
        this.tabIndex = index;
        this.getData();
      }
    },
    bindPickerChange1(e){
      this.index1 = e.detail.value;
      wx.navigateTo({ url: '/pages/application/list?app_id='+this.list1[this.index1].app_id });
    },
    bindPickerChange2(e){
      this.index2 = e.detail.value;
      wx.navigateTo({ url: '/pages/application/list?product_id='+this.list2[this.index2].product_id });
    },
    getData(){
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
    search(){
      if(this.searchVal == ''){
          wx.showToast({
              title: '请输入要搜索的内容',
              icon: 'none',
              duration: 2000,
          })
          return false;
      }
      // ajax({
      //     url:'xcx_request.php',
      //     data:{
      //         act:'get_tech_search',
      //         keywords:this.searchVal
      //     },
      // }).then(res=>{
      //   if(res.list){
      //     for(let item of res.list){
      //       item.show = false;
      //     }
      //     this.list = res.list;
      //   }else{
      //     this.list = [];
      //   }
      //   this.isFirstAjax = false;
      // })
      wx.navigateTo({ url: '/pages/application/list?searchVal='+this.searchVal });

    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
