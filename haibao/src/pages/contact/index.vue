<template>
  <view class="container" :class="{'container-nav' : fixed}" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view>
      <view class="how-pay" id="pay">
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
            <input type="email" v-model="email" maxlength="20" />
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
    </view>
    <sidebar/>
    <download-leads tp="420"/>
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
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
        product_id:'',
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
        toView:'',
        viewStr:'desc',
        fixed:false,
        winHeight:'',
        menuButtonObject:{}
      }
    },
  components: {

  },
  onLoad(option) {
    this.$store.commit('set_liveLeadsModel');
    this.$store.commit('set_downloadLeadsModel');
    this.$store.commit('set_consultLeadsModel');
    this.$store.commit('set_showFilterModel');
  },
  methods: {
    openPdf(file){
      wx.downloadFile({
        url:file,
        success(res){
          console.log(res)
          let data = res.tempFilePath;
          wx.openDocument({
            filePath:data,
            fileType:'pdf'
          })
        }
      })
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
          tp: 420,
          tp_value: this.product_id,
          comname: this.company,
          mobile: this.phone,
          name: this.name,
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
@import "./index";
</style>
