<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>

    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>


    <view class="list" v-if="list.length">
        <view class="item" v-for="(item,index) in list" @tap="toView(item)">
            <view class="name">
              <image :src="item.picture" mode="widthFix" class="name-l"/>
              <view class="name-r">{{item.title}}</view>
            </view>
        </view>
    </view>

    <view class="no-data" v-if="!list.length && !isFirstAjax">
      <view class="tt txt">抱歉，无法查询到相关内容。</view>
      <view class="txt">如果您对海宝的产品感兴趣，或者有其他关于切割方面的疑问和需求，欢迎点击下方按钮填写表单留下您的信息，我们将会在第一时间联系您！</view>
      <view class="btn" @tap='writeLeader'>填写表单</view>
    </view>

    <sidebar/>
    <pro-leads/>
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
        list:[],
        isFirstAjax:true,
        option:{}
      }
    },
  components: {

  },
  onLoad(option) {
    this.option = option || {};
    this.list = this.$store.state.searchArr;
    this.isFirstAjax = false;
  },
  methods: {
    writeLeader(){
      this.$store.commit('set_proLeadsModel',true);
    },
    toView(item){
      if(this.$store.state.category == 410){
        wx.navigateTo({ url: '/pages/show/details?id='+item.type_id });
      }else{
        wx.navigateTo({ url: '/pages/application/details?case_id='+item.case_id });
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
      if(this.$store.state.category == 410){
        ajax({
            url:'xcx_request.php',
            data:{
                act:'get_products',
                keywords:this.searchVal
            },
        }).then(res=>{
            this.list = res.list;
            this.isFirstAjax = false;
        })
      }else{
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
}
</script>

<style lang="scss">
@import "../server/details";
</style>
