<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
      <view class="item active" @tap='writeLeader'>
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_leads.png"/>
        <text>填写表单</text>
      </view>
      <view class="item" @tap="showFilter">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_filter.png"/>
        <text>筛选</text>
      </view>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>
    <view class="list">
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/show/details?id='+item.type_id">
            <view class="item-l">
                <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="item-r">
                <view class="name">{{item.title}}</view>
            </view>
        </navigator>
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
  name: 'server_list',
  mixins: [mixin],
  data() {
      return {
        searchBox:false,
        searchVal:'',
        typeId:'',
        list:[]
      }
    },
  components: {

  },
  onLoad(option) {
      this.searchVal = option.search_val || '';
      this.typeId = option.type_id || '';
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_products',
              type_id:this.typeId,
              keywords:this.searchVal
          },
      }).then(res=>{
          if(res.list){
            this.list = res.list;
          }
      });
      this.$store.commit('set_category',410);
  },
  methods: {
    updateList(list){
      this.list = list;
    },
    writeLeader(){
        this.$store.commit('set_proLeadsModel',true);
    },
    showFilter(){
        this.$store.commit('set_showFilterModel',true);
    },
    searchAjax(){
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_products',
              type_id:this.typeId,
              keywords:this.searchVal
          },
      }).then(res=>{
          if(res.list){
            this.list = res.list;
          }
      });
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
        this.searchAjax();
    }
  }
}
</script>

<style lang="scss">
@import "../server/list";
@import "./list";
</style>
