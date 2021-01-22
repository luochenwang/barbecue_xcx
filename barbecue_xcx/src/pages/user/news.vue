<template>
  <view class="container">
    <view class="news-box">
        <view class="news-list">
            <view class="list-box">
                <view class="list-top">
                    <view class="newslist-name">系统消息名称系统消息名称</view>
                    <image src="http://192.168.241.6:2832/news-img/unread.png" mode="widthFix" class="newslist-status"></image>
                    <view class="newslist-data">2020/12/02&nbsp;12:20:11 </view>
                </view>
                <view class="newslist-content">系统消息系统消息系统消息系统消息系统消息系统消息系统 系统消息系统消息系统消息
                </view>
            </view>

            <view class="list-box">
                <view class="list-top">
                    <view class="newslist-name">系统</view>
                    <image src="http://192.168.241.6:2832/news-img/unread.png" mode="widthFix" class="newslist-status"></image>
                    <view class="newslist-data">2020/12/02&nbsp;12:20:11 </view>
                </view>
                <view class="newslist-content">系统消息系统消息系统消息系统消息系统消息系统消息系统 系统消息系统消息系统消息
                </view>
            </view>
        </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'news',
  components: {

  }
}
</script>

<style lang="scss">
@import "./news";
</style>
