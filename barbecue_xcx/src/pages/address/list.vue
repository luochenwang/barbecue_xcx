<template>
  <view class="container">
    <view class="address-box" v-if="list.length">
        <!-- 列表 -->
        <view class="address-list">
            <navigator :url="'/pages/address/index?id='+item.id" class="list-box" v-for="(item.index) in list">
                <view class="list-top">
                    <text class="list-name">{{item.userName}}</text>
                    <text class="list-mob">{{item.telephone}}</text>
                    <!-- <text class="list-type">公司</text> -->
                    <text class="list-defBtn active">默认</text>
                </view>
                <view class="list-address">{{item.addr}}</view>
            </navigator>
        </view>

        <view class="addBtn">添加地址</view>
    </view>
    
    <!-- 无数据 -->
    <view class="none-box" v-else>
        <view class="noneText">哇哦 ~ 您目前没有任何地址哦~</view>
        <navigator url="/pages/address/index" class="createBtn">创建一个</navigator>
    </view>
  </view>
</template>

<script>
import {ajax} from '../../libs/ajax.js';

export default {
  name: 'list',
  components: {

  },
  data() {
      return {
        list:[],
      };
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
        ajax({
            url:'mxrs/wx/addr/findByAddr',
            data:{
              telephone: '1781111112212',
            }
        }).then(res=>{
            if(res.code == 200){
              this.list = res.data;
            }
        });
    }
  }
}
</script>

<style lang="scss">
@import "./list";
</style>
