<template>
  <view class="container">
    <view class="user-info">
        <view class="headimg">
            <image :src="userInfo.avatarUrl" mode=""/>
        </view>
        <view>
          <view class="name">昵称：{{userInfo.nickName}}</view>
          <view class="time">2020-12-31</view>
        </view>
        <!-- <button open-type="getUserInfo" @getuserinfo="userInfoHandler" v-else>微信登录</button> -->
    </view>
    <view class="nav">
        <navigator class="item icon-center1" url="/pages/course/list?title=已完成课程&cat=get_Myappointment">已完成课程</navigator>
        <navigator class="item icon-center2" url="/pages/course/list?title=已预约课程&cat=get_MyFinished">已预约课程</navigator>
    </view>


    <sidebar/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import { createCache } from "../../libs/globalData";
const globalData = createCache();

export default {
  name: 'center',
  data() {
      return {

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
      })
  },
  methods: {
    userInfoHandler(){
      var that = this;
      wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
             success: res => {
                globalData.set("userInfo", res.userInfo);
                that.userInfo = res.userInfo;
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
