<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
      <view class="item" :class="{'active' : tabIndex == 0}" @tap="setTab(0)">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_application1.png" v-if="tabIndex == 0"/>
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_application2.png" v-else/>
        <text>应用</text>
      </view>
      <view class="item" :class="{'active' : tabIndex == 1}" @tap="setTab(1)">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_pro2.png" v-if="tabIndex == 1"/>
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_pro1.png" v-else/>
        <text>产品</text>
      </view>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>

    <view class="list-box" v-if="tabIndex == 0">
      <view class="tt">所有应用案例展示</view>
      <view class="list" :class="{'list-all' : !viewAll}">
        <navigator class="item" v-for="(item,index) in list" :url="'/pages/application/list?app_id='+item.app_id">
          <view class='img-box'>
            <image :src="item.picture" mode="widthFix"/>
          </view>
          <view class="txt">{{item.title}}</view>
        </navigator>
      </view>
      <view class="view-all" v-if="!viewAll" @tap="viewAll = true">展开更多</view>
    </view>

    <view class="list-box" v-if="tabIndex == 1">
      <view class="tt">所有产品案例展示</view>
      <view class="list" :class="{'list-all' : !viewAll}">
        <navigator class="item" v-for="(item,index) in list" :url="'/pages/application/list?product_id='+item.product_id">
          <view class='img-box'>
            <image :src="item.picture" mode="widthFix"/>
          </view>
          <view class="txt">{{item.title}}</view>
        </navigator>
      </view>
      <view class="view-all" v-if="!viewAll" @tap="viewAll = true">展开更多</view>
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
        searchModel:false,
        searchVal:'',
        list:[],
        isFirstAjax:true,
        tabIndex:0,
        viewAll:false
      }
    },
  components: {

  },
  onLoad(option) {
    this.getData();
    this.$store.commit('set_category',400);
  },
  methods: {
    setTab(index){
      if(this.tabIndex != index){
        this.tabIndex = index;
        this.getData();
      }
    },
    getData(){
      if(this.tabIndex == 0){
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_cases_product',
            },
        }).then(res=>{
            if(res.list){
              this.list = res.list;
            }
            this.isFirstAjax = false;
        })
      }else{
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_cases_app',
            },
        }).then(res=>{
            if(res.list){
              this.list = res.list;
            }
            this.isFirstAjax = false;
        })
      }
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
