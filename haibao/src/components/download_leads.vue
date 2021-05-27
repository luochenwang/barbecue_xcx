<!--页面底部-->
<template>
  <view class="leads-float" v-if='downloadLeadsModel'>
    <view class="leads-dialog">
      <view class="form-group">
        <label>电子邮箱地址*</label>
        <input type="text" v-model="email"/>
      </view>
      <view class="privacy">
        <checkbox-group @change="changePrivacy">
          <checkbox :checked="privacy" :value="privacy"/>
        </checkbox-group>
        <text>我已阅读并同意海宝隐私政策。*</text>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/privacy/" class="href">查看隐私政策</navigator>
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

      <view class="close" @tap="close"></view>
    </view>
  </view>
</template>
<script>
import { ajax } from "../libs/ajax";

export default {
  name: 'sidebar',
  props:['tp','tp_value'],
  data(){
    return {
      privacy:false,
      email:''
    }
  },
  computed:{
      downloadLeadsModel(){
          return this.$store.state.downloadLeadsModel;
      },
      leadsItem(){
          return this.$store.state.leadsItem;
      },
  },
  watch:{
    downloadLeadsModel(val){
      if(val){
          ajax({
            url: 'xcx_request.php',
            data: {
              act: 'get_last_form',
              get_tp:2
            },
          }).then(res=>{
            this.email = res.email || '';
          })
      }
    }
  },
  mounted() {
  },
  methods: {
    close(){
        this.$store.commit('set_downloadLeadsModel');
    },
    changePrivacy(e){
      this.privacy = !this.privacy;
    },
    submit(){
      if(this.email == ''){
        wx.showToast({
            title: '请输入电子邮箱地址',
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
          tp: this.tp || this.$store.state.category,
          tp_value: this.tp_value || this.leadsItem.tech_detail_id || this.leadsItem.class_id || this.leadsItem.product_id,
          email: this.email,
        },
      }).then(res=>{
        if(res.status == 1){
          wx.showToast({
              title: '资料已发送到您的邮箱',
              icon: 'none',
              duration: 2000,
          });

          this.close();
          ajax({
            url: 'xcx_request.php',
            data: {
              act: 'set_File_History',
              act2: 'download',
              tp: this.tp || this.$store.state.category,
              tp_value:this.tp_value || this.leadsItem.tech_detail_id || this.leadsItem.class_id || this.leadsItem.product_id,
              file_tp: 'pdf',
              watch_time: 0,
            },
          });
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
