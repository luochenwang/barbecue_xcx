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
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/show/sublist?type_id='+item.type_id+'&is_filter='+item.is_filter">
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
        list:[]
      }
    },
  components: {

  },
  onLoad(option) {
    this.$store.commit('set_lastTp',4);
      this.searchVal = option.search_val;
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_products_type',
          },
      }).then(res=>{
          if(res.list){
            this.list = res.list;
          }
      });
      this.$store.commit('set_category',410);
  },
  onShow(){
    this.$store.commit('set_filterObj',{});
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
    filterSubmit(){
        wx.navigateTo({ url: '/pages/show/sublist' });
    },
    searchAjax(){
      ajax({
            url:'xcx_request.php',
            data:{
                act:'get_products',
                keywords:this.searchVal
            },
        }).then(res=>{
            if(res.list){
              this.list = res.list;
            }
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
        wx.navigateTo({url:'/pages/show/sublist?search_val='+this.searchVal});

        // this.searchAjax();
    }
  }
}
</script>

<style lang="scss">
@import "../server/list";
@import "./list";
.container{
  padding-bottom:0;
}
</style>
