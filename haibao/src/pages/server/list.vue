<template>
  <view class="container">
    <view class="list">
        <navigator class="item" v-for="(item,index) in list" :key="index" :url="'/pages/server/details?id='+item.tech_id">
            <view class="item-l">
                <image :src="item.picture" mode="widthFix"/>
            </view>
            <view class="item-r">
                <view class="name">{{item.title_en}}</view>
                <view class="name">{{item.title_cn}}</view>
            </view>
        </navigator>
    </view>

    <sidebar/>
  </view>
</template>

<script>
import sidebar from "../../components/sidebar";
import { ajax } from "../../libs/ajax";

export default {
  name: 'server_list',
  data() {
      return {
        searchVal:'',
        list:[]
      }
    },
  components: {
      sidebar
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

  }
}
</script>

<style lang="scss">
@import "./list";
</style>
