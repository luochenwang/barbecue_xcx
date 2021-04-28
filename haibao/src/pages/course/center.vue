<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="user-info">
        <view class="headimg">
            <image :src="userInfo.avatarUrl" mode=""/>
        </view>
        <view v-if="userInfo">
          <view class="name">昵称：{{userInfo.nickName}}</view>
          <view class="time">{{time}}</view>
        </view>
        <button @tap="userInfoHandler" v-else>微信登录</button>
    </view>
    <view class="nav">
        <navigator class="item icon-center1" url="/pages/course/list?title=已观看视频&cat=get_MyFinished&no_search=1">已观看视频</navigator>
        <navigator class="item icon-center2" url="/pages/course/list?title=已预约直播&cat=get_Myappointment&no_search=1" v-if="list.length">已预约课程</navigator>
    </view>


    <sidebar/>
  </view>
</template>

<script>
import mixin from "../../libs/mixin";
import { ajax } from "../../libs/ajax";
import { createCache } from "../../libs/globalData";
const globalData = createCache();

export default {
  name: 'center',
  mixins: [mixin],
  data() {
      return {
        time:'',
        list:[]
      }
    },
  components: {
      
  },
  computed:{
    authModel(){
        return this.$store.state.authModel;
    },
    userInfo(){
        return this.$store.state.userInfo;
    }
  },
  onLoad(option) {
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_Myappointment',
              page: 1,
              category_id:option.id || ''
          },
      }).then(res=>{
        if(res.list){
          this.list = res.list;
        }
      });


      ajax({
        url:'xcx_request.php',
        data:{
            act:'set_Visit_History',
            tp: 310,
            tp_value: 3
        },
      });
      this.getTime();
  },
  methods: {
    getTime(){
      var datetime = new Date();
      var year = datetime.getFullYear();
      var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      this.time = year + '-' + month + '-' + date;
    },
    userInfoHandler(){
      var that = this;
      wx.getUserProfile({
        desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res);

          globalData.set("userInfo", res.userInfo);
          that.$store.commit('set_useriNfo',res.userInfo);

          ajax({
              url:'xcx_request.php',
              data:{
                  act:'editUserInfo',
                  nickname: res.userInfo.nickName,
                  headimgurl: res.userInfo.avatarUrl,
                  gender:res.userInfo.gender,
                  city:res.userInfo.city,
                  country:res.userInfo.country,
              },
          })
        },
        fail:(e)=>{
          console.log(e);
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "./center";
</style>
