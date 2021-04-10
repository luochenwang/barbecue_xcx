<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
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

    <sidebar :server="true"/>
  </view>
</template>

<script>
import { ajax } from "../../libs/ajax";
import mixin from "../../libs/mixin";

export default {
  name: 'server_list',
  mixins: [mixin],
  data() {
      return {
        searchBox:false,
        searchVal:'',
        list:[]
      }
    },
  components: {

  },
  onLoad(option) {
      this.searchVal = option.search_val;
      ajax({
          url:'xcx_request.php',
          data:{
              act:'get_tech_list',
              category_id:option.id
          },
      }).then(res=>{
          if(res.list){
            this.list = res.list;
          }
      });
  },
  methods: {
    searchAjax(){
      ajax({
            url:'xcx_request.php',
            data:{
                act:'get_tech_search',
                keywords:this.searchVal
            },
        }).then(res=>{
            this.list = res.list;
        })
    },
    search(){
        if(this.searchVal == ''){
            wx.showToast({
                title: '请输入要搜索的内容',
                icon: 'none',
                duration: 2000,
            })
            return false;
        }
        this.searchAjax();
    }
  }
}
</script>

<style lang="scss">
@import "./list";
</style>
