<!--页面底部-->
<template>
  <view class="leads-float" v-if="proLeadsModel">
    <view class="leads-dialog pro-leads" v-if="!isSuccess">
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
        <input type="text" v-model="email"/>
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
      <view class="footer">
        <navigator url="/pages/contact/index" class="href">联系我们</navigator>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/privacy/" class="href">隐私政策</navigator>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/terms-of-use" class="href">使用条款</navigator>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/gdpr/" class="href">GDPR 声明</navigator>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/cookie-policy" class="href">Cookie 政策</navigator>
      </view>
      <view class="copyright">I   ©  Hypertherm, Inc.</view>

    </view>

    <view class="success-dialog" v-else>
      <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_success2.png"/>
      <view class="txt">提交信息成功</view>
      <view class="btn" @tap="close">关闭</view>
    </view>
    <view class="close2" @tap="close"></view>
  </view>
</template>
<script>
import { ajax } from "../libs/ajax";

export default {
  name: 'sidebar',
  props:['tp_value'],
  data(){
    return {
      privacy:false,
      name:'',
      phone:'',
      company:'',
      email:'',
      demand:'',
      region: ["上海市", "上海市", '徐汇区'],
      isSendEmail:true,
      isSuccess:false,
      // customItem: '全部'
    }
  },
  computed:{
      proLeadsModel(){
          return this.$store.state.proLeadsModel;
      },
  },
  watch:{
    proLeadsModel(val){
      if(val){
          this.isSuccess = false;
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
      }
    }
  },
  mounted() {

  },
  methods: {
    close(){
        this.$store.commit('set_proLeadsModel');
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
      if(this.email == ''){
        wx.showToast({
            title: '请输入电子邮箱地址',
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
          tp: this.$store.state.category,
          tp_value: this.tp_value || 0,
          comname: this.company,
          email: this.email,
          mobile: this.phone,
          name: this.name,
          province: this.region[0],
          city: this.region[1],
          content:this.demand
        },
      }).then(res=>{
        if(res.status == 1){
          this.isSuccess = true;
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
@import "./leads";

</style>
