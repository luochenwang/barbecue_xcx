<!--页面底部-->
<template>
  <view class="leads-float" v-if="consultLeadsModel">
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
        <label>公司名称*</label>
        <input type="text" v-model="company"/>
      </view>
      <view class="form-group icon-arrow">
        <label>您是*</label>
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="txt">
            {{array[index]}}
          </view>
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
var plugin = requirePlugin("ykfchat");
import mixin from "../libs/mixin";
import { createCache } from "./../libs/globalData";
const globalData = createCache();
export default {
  name: 'sidebar',
  props:['tp_value'],
  data(){
    return {
      privacy:false,
      array: [],
      index: 0,
      name:'',
      phone:'',
      company:''
    }
  },
  mixins: [mixin],
  computed:{
      consultLeadsModel(){
          return this.$store.state.consultLeadsModel;
      },
      userInfo(){
          return this.$store.state.userInfo;
      },
  },
  watch:{
    consultLeadsModel(val){
      if(val){

          if(this.$store.state.iszixun){
            this.setHistory();
            this.close();
            // 预约
            plugin.callback.on("getOpenId", this.getOpenId, this); // 传递openid，注意路径后一定要声名&getOpenIdType=2，否则传递无效
            plugin.callback.on("getSessionFrom", this.session, this); // 传递客户资料

            wx.navigateTo({
                url: 'plugin://ykfchat/chat-page?wechatapp_id=219196&channel_id=25200&scene=p86776wmyjpl&getOpenIdType=2',
            });
            return false;
          }
          ajax({
            url: 'xcx_request.php',
            data: {
              act: 'get_last_form',
              get_tp:1
            },
          }).then(res=>{
            this.name = res.name || '';
            this.company = res.comname || '';
            this.phone = res.mobile || '';
            for(var i = 0;i<this.array.length;i++){
              if(this.array[i] == res.youare){
                this.index = i;
                break;
              }
            }
          })
      }
    }
  },
  mounted() {
    this.openid = globalData.get('openid');
    ajax({
      url: 'xcx_request.php',
      data: {
        act: 'get_Youare_list',
      },
    }).then(res=>{
      res.list.unshift('请选择您的⾝份');
      this.array = res.list;
    })

  },
  methods: {
    setHistory(){
      ajax({
          url:'xcx_request.php',
          data:{
              act:'set_ask_history',
          },
      });
    },
    close(){
        this.$store.commit('set_consultLeadsModel');
    },
    changePrivacy(e){
      this.privacy = !this.privacy;
    },
    bindPickerChange(e){
      this.index = e.detail.value;
    },
    getOpenId(callback) {
        let data = {
          openid: this.openid
        }
        callback(data)
    },
    session(callback) {
        let data = {
          sessionFrom: this.userInfo
        }
        callback(data)
    },
    submit(){
      console.log(this.name)
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
      
      if(this.array[this.index] == '请选择您的⾝份'){
        wx.showToast({
            title: '请选择您的⾝份',
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
          tp: this.$store.state.category || 200,
          tp_value: this.tp_value || this.leadsItem?.class_id || this.leadsItem?.tech_detail_id || 0,
          comname: this.company,
          mobile: this.phone,
          name: this.name,
          youare:this.array[this.index]
        },
      }).then(res=>{
        if(res.status == 1){
          this.close();
          this.setHistory();
          // 预约
          plugin.callback.on("getOpenId", this.getOpenId, this); // 传递openid，注意路径后一定要声名&getOpenIdType=2，否则传递无效
          plugin.callback.on("getSessionFrom", this.session, this); // 传递客户资料
          this.$store.commit('set_iszixun',1);
          wx.navigateTo({
              url: 'plugin://ykfchat/chat-page?wechatapp_id=219196&channel_id=25200&scene=p86776wmyjpl&getOpenIdType=2',
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
