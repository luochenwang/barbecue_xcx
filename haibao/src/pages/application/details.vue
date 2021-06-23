<template>
  <view class="container" :class="{'container-nav' : fixed}" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <scroll-view scroll-y="true" :scroll-into-view="toView" :style="{height:winHeight}" @scroll="scrollRight" scroll-with-animation='true'>
      <view class="tt">{{pageData.title}}</view>
      <view class="banner">
        <swiper indicator-color="#898989" indicator-active-color="#ed1b2e" indicator-dots="true">
            <swiper-item v-for="(item,index) in pageData.carousel_list">
              <image :src="item.picture" mode="widthFix"/>
            </swiper-item>
        </swiper>
      </view>
      <view class="tab-nav" :style="{top:(menuButtonObject.height+menuButtonObject.top+10)+'px'}">
        <view class="item" :class="{'active' : viewStr == 'content'}" @tap='scrollTap("content")' v-if="pageData.content">案例详情</view>
        <view class="item" :class="{'active' : viewStr == 'products_list'}" @tap='scrollTap("products_list")'>相关产品</view>
        <view class="item" :class="{'active' : viewStr == 'consult'}" @tap='scrollTap("consult")'>我要咨询</view>
      </view>
      <view class="pro-info" id="content" v-if="pageData.content">
        <view class="pro-tt">案例详情</view>
        <view class='video-box' v-if="pageData.video_filename">
          <video :src="pageData.video_filename" objectFit='cover' :poster="pageData.video_picture" :autoplay='true' :controls="true"></video>
        </view>
        <view class="info"><text>{{pageData.content.replace(/<\/?.+?>/g, "")}}</text></view>
      </view>
      <view class="pro-info" id="question" v-if="pageData.question">
        <view class="pro-tt">客户简介</view>
        <view class="info"><text>{{pageData.question.replace(/<\/?.+?>/g, "")}}</text></view>
      </view>
      <view class="pro-info" id="scheme" v-if="pageData.scheme">
        <view class="pro-tt">解决方案</view>
        <view class="info"><text>{{pageData.scheme.replace(/<\/?.+?>/g, "")}}</text></view>
      </view>
      <view class="pro-info" id="benefit" v-if="pageData.benefit">
        <view class="pro-tt">客户收益</view>
        <view class="info"><text>{{pageData.benefit.replace(/<\/?.+?>/g, "")}}</text></view>
      </view>
      <view class="pro-info" id="products_list" v-if='pageData.cases_list || pageData.products_list'>
        <view class="pro-tt">相关产品</view>
        <view class="list">
          <navigator :url="`/pages/application/details?case_id=${item.case_id || ''}&product_id=${item.product_id || ''}`" open-type='redirect' class="item" v-for="(item,index) in pageData.cases_list">
            <view class='img-box'>
              <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="txt">{{item.title}}</view>
          </navigator>

          <navigator :url="`/pages/show/details?id=${item.case_id || item.product_id}&product_id=${item.product_id || ''}`" open-type='redirect' class="item" v-for="(item,index) in pageData.products_list">
            <view class='img-box'>
              <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="txt">{{item.title}}</view>
          </navigator>
        </view>
      </view>
      <view class="pro-info" id="consult">
        <view class="pro-tt">我要咨询</view>
        <view class="leads-dialog">
          <view class="form-group">
            <label>姓名*</label>
            <input type="text" v-model="name"/>
          </view>
          <view class="form-group">
            <label>手机号码*</label>
            <input type="number" v-model="phone" maxlength="11" />
          </view>
          <view class="form-group">
            <label>邮箱地址*</label>
            <input type="email" v-model="email"/>
          </view>
          <view class="form-group">
            <label>公司名称*</label>
            <input type="text" v-model="company"/>
          </view>
          <view class="form-group icon-arrow">
            <label>所在省市*</label>
            <picker mode="region" @change="bindRegionChange" :value="region">
              <view class="txt">{{region[0]}}，{{region[1]}}，{{region[2]}}</view>
            </picker>
          </view>
          <view class="form-group">
            <label>您的需求*</label>
            <textarea v-model="demand"/>
          </view>
          <view class="privacy">
            <checkbox-group @change="changePrivacy">
              <checkbox :checked="privacy" :value="privacy"/>
            </checkbox-group>
            <text>我已阅读并同意海宝隐私政策。*</text>
            <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/privacy/" class="href">查看隐私政策</navigator>
          </view>
          <view class="tips">海宝将不定时向您邮箱发送产品、服务及活动等相关信息， 您可以随时取消预订。</view>
          <view class="label">邮件订阅*</view>
          <view class="privacy">
            <checkbox-group @change="isSendEmail = true">
              <checkbox :checked="isSendEmail" :value="isSendEmail"/>
            </checkbox-group>
            <text>是，我想接收海宝发送的电子邮件。</text>
          </view>
          <view class="privacy">
            <checkbox-group @change="isSendEmail = false">
              <checkbox :checked="!isSendEmail" :value="!isSendEmail"/>
            </checkbox-group>
            <text>否，我不想接收海宝发送的电子邮件。</text>
          </view>
          <view class="submit" @tap="submit">提交</view>
        </view>
      </view>

    </scroll-view>
    
    <sidebar/>
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";
var scrollArr = ['content','products_list','consult'];
var scrollTop = [];

export default {
  name: 'server_details',
  mixins: [mixin],
  data() {
      return {
        pageData:{
          content:'',
          question:'',
          scheme:'',
          benefit:''
        },

        toView:'',
        viewStr:'content',
        fixed:false,
        winHeight:'',
        menuButtonObject:{},


        privacy:false,
        array: [],
        index: 0,
        name:'',
        phone:'',
        email:'',
        demand:'',
        region: ["上海市", "上海市", '徐汇区'],
        company:'',
        isSendEmail:true,
        option:{}
      }
    },
  components: {

  },
  onLoad(option) {
    ajax({
      url: 'xcx_request.php',
      data: {
        act: 'get_last_form',
        get_tp:this.$store.state.lastTp
      },
    }).then(res=>{
      this.name = res.name || '';
      this.company = res.comname || '';
      this.email = res.email || '';
      this.phone = res.mobile || '';
      this.region[0] = res.province || '上海市';
      this.region[1] = res.city || '上海市';
    })
    this.option = option;
    if(option.case_id){
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
    }else{
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_product_detail',
              product_id:option.product_id,
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
    }

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
    bindRegionChange: function (e) {
      this.region = e.detail.value;
      console.log('picker发送选择改变，携带值为', e.detail.value)
    },
    changePrivacy(e){
      this.privacy = !this.privacy;
    },
    submit(){
      if(this.name == ''){
        wx.showToast({
            title: '请输入姓名',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(!/^1[0-9]{10}$/.test(this.phone)){
        wx.showToast({
            title: '请输入正确的手机号',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(this.company == ''){
        wx.showToast({
            title: '请输入公司名称',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(this.email == ''){
        wx.showToast({
            title: '请输入电子邮箱地址',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(this.demand == ''){
        wx.showToast({
            title: '请输入您的需求',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      
      if(!this.privacy){
        wx.showToast({
            title: '请查看海宝隐私政策',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_form',
          tp: 520,
          tp_value: this.option.product_id && this.option.product_id != "undefined" ? this.option.product_id : this.option.case_id,
          comname: this.company,
          mobile: this.phone,
          name: this.name,
          email: this.email,
          province: this.region[0],
          city: this.region[1],
          content:this.demand
        },
      }).then(res=>{
        if(res.status == 1){
          wx.showToast({
              title: '提交成功',
              icon: 'none',
              duration: 2000,
          })
        }else{
          wx.showToast({
              title: res.msg,
              icon: 'none',
              duration: 2000,
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "./details";
</style>
