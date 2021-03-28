<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
      <view class="item active" @tap='writeLeader'>
        <image src="http://192.168.3.29:8383/icon_leads.png"/>
        <text>填写表单</text>
      </view>
      <view class="item" @tap="showFilter">
        <image src="http://192.168.3.29:8383/icon_filter.png"/>
        <text>筛选</text>
      </view>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>


    <view class="list">
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/application/details?case_id='+item.case_id">
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
  name: 'server_details',
  mixins: [mixin],
  data() {
      return {
        searchModel:false,
        searchVal:'',
        list:[],
        proCover:'',
        isFirstAjax:true,
        option:{}
      }
    },
  components: {

  },
  onLoad(option) {
      this.option = option || {};
      this.searchVal = option.searchVal;
      this.getData();
  },
  methods: {
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
      if(this.searchVal == ''){
          wx.showToast({
              title: '请输入要搜索的内容',
              icon: 'none',
              duration: 2000,
          })
          return false;
      }
      this.getData();
    },
    getData(){
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_cases',
              keywords:this.searchVal,
              product_id:this.option.product_id || '',
              app_id:this.option.app_id || '',

          },
      }).then(res=>{
        if(res.list){
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
@import "../server/list";
@import "../show/list.scss";
</style>
