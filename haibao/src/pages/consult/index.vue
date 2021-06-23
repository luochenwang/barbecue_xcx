<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="main">
        <scroll-view :scroll-y="true">
            <view class="time"><text>18:10</text></view>
            <view class="chat">
                <view class="headimg">
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/logo.jpg" mode="widthFix"/>
                </view>
                <view class="info">
                    <view>您好！有什么可以帮您的？以下是常见问题列表。</view>
                    <view v-for="(item,index) in questionList" @tap="viewQuestion(item)">{{item.title}}</view>
                </view>
            </view>
            <view class="chat" :class="{'active' : item.active}" v-for="(item,index) in newsList">
                <view class="headimg">
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/logo.jpg" mode="widthFix"/>
                </view>
                <view class="info">{{item.content}}</view>
            </view>
            <view class="review">
                <view class="tt">是否已解决您的问题？</view>
                <view class="star">
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/star2.png" mode="widthFix"/>
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/star2.png" mode="widthFix"/>
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/star2.png" mode="widthFix"/>
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/star2.png" mode="widthFix"/>
                    <image src="https://campaign5.method-ad.cn/hypertherm/img/consult/star2.png" mode="widthFix"/>
                </view>
                <view class="btn-box">
                    <view class="btn active">已解决</view>
                    <view class="btn">继续咨询</view>
                </view>
            </view>
        </scroll-view>
    </view>

    <view class="footer-box">
        <input type="text" placeholder="很高兴为您服务，请描述您的问题" v-model="newsVal"/>
        <view class="send-btn" @tap="send">发 送</view>
    </view>
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

var timr = null;
export default {
  name: 'user',
  mixins: [mixin],
  data() {
      return {
        newsVal:'',
        questionList:[],
        newsList:[],
      }
    },
  components: {
      
  },
  destroyed(){
    clearInterval(timr);
  },
  onLoad(option) {
    // 常见问题
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_Message_QA',
          },
      }).then(res=>{
          this.questionList = res.list;
      });

        // 历史消息
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_oldMessageList',
          },
      }).then(res=>{
          this.newsList = res.list;
          this.getnews();
      });
  },
  methods: {
    getnews(){
        let timr = setInterval(()=>{
            ajax({
                  url:'xcx_request.php',
                  data:{
                      act:'get_newMessageOne',
                  },
            }).then(res=>{
                if(res.status == 1){
                    if(res.message_tp == 1){
                        this.newsList.push({
                            content:res.content
                        })
                    }
                }
            })
        },2000)
    },
    // 发送
    send(){
        if(this.newsVal == ''){
            wx.showToast({
                title: '请描述您的问题~',
                icon: 'none',
                duration: 2000,
            })
            return false;
        };
        ajax({
              url:'xcx_request.php',
              data:{
                  act:'set_Message',
                  tp:100,
                  tp_value:1,
                  content:this.newsVal
              },
        }).then(res=>{
            if(res.status == 1){
                this.newsList.push({
                    active:true,
                    content:this.newsVal
                })
                this.newsVal = '';
            }else{
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000,
                })
            }
        })
    },
    // 获取问题
    viewQuestion(item){
        this.newsList.push(item);
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
