<!--页面底部-->
<template>
  <view class="leads-float" v-if="liveLeadsModel">
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
        <label>电子邮箱地址*</label>
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
      <view class="privacy">
        <checkbox-group @change="changePrivacy">
          <checkbox :checked="privacy" :value="privacy"/>
        </checkbox-group>
        <text>我已阅读并同意海宝隐私政策。*</text>
        <navigator url="/pages/webview/index?src=https://www.hypertherm.com/zh/policies/privacy/" class="href">查看隐私政策</navigator>
      </view>
      <view class="submit" @tap="submit">提交</view>
      <view class="footer">
        <!-- <navigator url="/pages/webview/index?src=" class="href">联系我们</navigator> -->
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
  data(){
    return {
      privacy:false,
      name:'',
      phone:'',
      company:'',
      email:'',
      region: ["上海市", "上海市", '徐汇区'],
      // customItem: '全部'
    }
  },
  computed:{
      liveLeadsModel(){
          return this.$store.state.liveLeadsModel;
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
              get_tp:3
            },
          }).then(res=>{
            this.name = res.name;
            this.company = res.comname;
            this.phone = res.mobile;
            this.region[0] = res.province;
            this.region[1] = res.city;
          })
      }
    }
  },
  mounted() {

  },
  methods: {
    close(){
        this.$store.commit('set_liveLeadsModel');
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
          tp_value: this.leadsItem.class_id || this.leadsItem.tech_detail_id,
          comname: this.company,
          mobile: this.phone,
          name: this.name,
          email: this.email,
          province: this.region[0],
          city: this.region[1],
        },
      }).then(res=>{
        if(res.status == 1){
          this.close();
          // 预约
          if(this.leadsItem.appointment){
            ajax({
                  url:'xcx_request.php',
                  data:{
                    act:'set_appointment',
                    tp:320,
                    tp_value:this.leadsItem.class_id,
                    class_id:this.leadsItem.class_id
                  },
            }).then(res=>{
                if(res.status == 1){
                  wx.showToast({
                      title: '您已预约成功',
                      icon: 'none',
                      duration: 2000,
                  });
                  this.onLoad();
                  // item.is_myappointment = 1;
                }else{
                  wx.showToast({
                      title: res.msg,
                      icon: 'none',
                      duration: 2000,
                  })
                }
            })
          }else{
            wx.navigateTo({ url: '/pages/server/video?title=' + this.leadsItem.title + '&video_filename=' + this.leadsItem.video_filename + '&video_picture=' + this.leadsItem.video_picture + '&share_img=' + this.leadsItem.video_share_picture + '&id=' + (this.leadsItem.class_id || this.leadsItem.tech_detail_id) });
          }
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
