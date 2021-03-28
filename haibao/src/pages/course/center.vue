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
        <button open-type="getUserInfo" @getuserinfo="userInfoHandler" v-else>微信登录</button>
    </view>
    <view class="nav">
        <navigator class="item icon-center1" url="/pages/course/list?title=已观看视频&cat=get_MyFinished&no_search=1">已观看视频</navigator>
        <navigator class="item icon-center2" url="/pages/course/list?title=已预约直播&cat=get_Myappointment&no_search=1">已预约课程</navigator>
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
        time:''
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
              act:'get_tech_list',
              category_id:option.id
          },
      }).then(res=>{
          this.list = res.list;
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
      wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
             success: res => {
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
             }
           })
        } else {

        }
      }
    })
    }
  }
}
</script>

<style lang="scss">
@import "./center";
</style>
