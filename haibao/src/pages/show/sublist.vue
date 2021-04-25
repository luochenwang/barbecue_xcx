<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
      <view class="item active" @tap='writeLeader'>
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_leads.png"/>
        <text>填写表单</text>
      </view>
      <view class="item" @tap="showFilter" v-if="isFilter">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_filter.png"/>
        <text>筛选</text>
      </view>
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>
    <view class="list" v-if="list.length">
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/show/details?id='+item.product_id">
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
  name: 'server_list',
  mixins: [mixin],
  data() {
      return {
        searchBox:false,
        searchVal:'',
        typeId:'',
        list:[],
        page:1,
        loaded:false,
        isFilter:false,
        isFirstAjax:true
      }
    },
  components: {

  },
  onLoad(option) {
      this.searchVal = option.search_val || '';
      this.typeId = option.type_id || '';
      this.isFilter = option.is_filter || '';
      this.searchAjax();
      if(this.typeId == '1' || this.typeId == '2'){
        this.$store.commit('set_showFilterModel',true);
      }
      this.$store.commit('set_category',410);
  },
  onReachBottom(){
    if(this.loaded){
      this.searchAjax();
    }
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
        this.search();
    },
    searchAjax(){
      this.loaded = false;
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_products',
              type_id:this.typeId,
              keywords:this.searchVal,
              qglx_id: this.$store.state.filterObj.qglx_id || '',
              cz_id: this.$store.state.filterObj.cz_id || '',
              clhd_id: this.$store.state.filterObj.clhd_id || '',
              zlyq_id: this.$store.state.filterObj.zlyq_id || '',
              page: this.page
          },
      }).then(res=>{
          if(res.list){
            if(res.list.length){
              this.loaded = true;
              ++this.page;
              this.list.push(...res.list);
            }
          }
          this.isFirstAjax = false;
      });
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
        this.isFirstAjax = true;
        this.list = [];
        this.page = 1;
        this.searchAjax();
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
