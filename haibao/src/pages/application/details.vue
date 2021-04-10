<template>
  <view class="container" :class="{'container-nav' : fixed}" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <scroll-view scroll-y="true" :scroll-into-view="toView" :style="{height:winHeight}" @scroll="scrollRight" scroll-with-animation='true'>
      <view class="tt">{{pageData.title}}</view>
      <view class="banner">
        <swiper indicator-color="#898989" indicator-active-color="#ed1b2e" indicator-dots="true">
            <swiper-item v-for="(item,index) in pageData.carousel_list">
              <image :src="item"/>
            </swiper-item>
        </swiper>
      </view>
      <view class="tab-nav" :style="{
    top:(menuButtonObject.height+menuButtonObject.top+10)+'px'}">
        <view class="item" :class="{'active' : viewStr == 'content'}" @tap='scrollTap("content")'>案例详情</view>
<!--         <view class="item" :class="{'active' : viewStr == 'question'}" @tap='scrollTap("question")'>问题描述</view>
        <view class="item" :class="{'active' : viewStr == 'scheme'}" @tap='scrollTap("scheme")'>采用方案</view>
        <view class="item" :class="{'active' : viewStr == 'benefit'}" @tap='scrollTap("benefit")'>客户受益</view> -->
        <view class="item" :class="{'active' : viewStr == 'products_list'}" @tap='scrollTap("products_list")'>相关产品</view>
      </view>
      <view class="pro-info" id="content">
        <view class="pro-tt">案例详情</view>
        <view class="info">{{pageData.content.replace(/<\/?.+?>/g, "")}}</view>
      </view>
      <view class="pro-info" id="question">
        <view class="pro-tt">问题描述</view>
        <view class="info">{{pageData.question.replace(/<\/?.+?>/g, "")}}</view>
      </view>
      <view class="pro-info" id="scheme">
        <view class="pro-tt">采用方案</view>
        <view class="info">{{pageData.scheme.replace(/<\/?.+?>/g, "")}}</view>
      </view>
      <view class="pro-info" id="benefit">
        <view class="pro-tt">客户受益</view>
        <view class="info">{{pageData.benefit.replace(/<\/?.+?>/g, "")}}</view>
      </view>
      <view class="pro-info" id="products_list">
        <view class="pro-tt">相关产品</view>
        <view class="list">
          <view class="item" v-for="(item,index) in pageData.products_list">
            <view class='img-box'>
              <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="txt">{{item.title}}</view>
          </view>
        </view>
      </view>
    </scroll-view>
    
    <sidebar/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";
var scrollArr = ['desc','info','pay'];
var scrollTop = [];

export default {
  name: 'server_details',
  mixins: [mixin],
  data() {
      return {
        pageData:{},

        toView:'',
        viewStr:'content',
        fixed:false,
        winHeight:'',
        menuButtonObject:{}
      }
    },
  components: {

  },
  onLoad(option) {
    ajax({
        url:'xcx_request.php',
        data:{
            act:'get_case_detail',
            case_id:option.case_id,
        },
    }).then(res=>{
        this.pageData = res;
        this.$nextTick(() => {
          for(let item of scrollArr){
          let query = wx.createSelectorQuery();
            query.select('#'+item).boundingClientRect( (rect) => {
                let top = rect.top;
                scrollTop.push(top);
                console.log(scrollTop);
            }).exec()
          }
        })
    })

    var menuButtonObject = wx.getMenuButtonBoundingClientRect();
    this.menuButtonObject = menuButtonObject;
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
          that.winHeight = res.windowHeight - (menuButtonObject.height+menuButtonObject.top) + 'px'
      }
    });
  },
  methods: {
    scrollTap(view) {
      this.toView = view;
      this.viewStr = view;
    },
     // 滚动右侧菜单
    scrollRight(e) {
      //console.log(e)
      let _top = e.detail.scrollTop;
      // let progress = parseInt(_top / Math.abs(this.winHeight)); // 计算出 当前的下标
      for(let i=0;i<scrollTop.length;i++){
        let item = scrollTop[i];
        if(item < _top){
          this.viewStr = scrollArr[i];
          this.fixed = true;
        }
      }
      if(_top < scrollTop[0]){
        this.fixed = false;
      }
    },
    bindPickerChange(e){
      this.index = e.detail.value;
    },
  }
}
</script>

<style lang="scss">
@import "./details";
</style>
