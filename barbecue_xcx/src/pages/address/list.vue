<template>
  <view class="container">
    <view class="address-box" v-if="false">
        <!-- 列表 -->
        <view class="address-list">
            <view class="list-box">
                <view class="list-top">
                    <text class="list-name">烤串串串</text>
                    <text class="list-mob">138****8888</text>
                    <!-- <text class="list-type">公司</text> -->
                    <text class="list-defBtn active">默认</text>
                </view>
                <view class="list-address">上海嘉定区德园路999号999-102室</view>
            </view>

            <view class="list-box">
                <view class="list-top">
                    <text class="list-name">烤串</text>
                    <text class="list-mob">138****8888</text>
                    <text class="list-defBtn">默认</text>
                </view>
                <view class="list-address">上海嘉定区德园路999号999-102室</view>
            </view>
        </view>

        <view class="addBtn">添加地址</view>
    </view>
    
    <!-- 无数据 -->
    <view class="none-box">
        <view class="noneText">哇哦 ~ 您目前没有任何地址哦~</view>
        <view class="createBtn">创建一个</view>
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
            console.log(res);
        });
    }
  }
}
</script>

<style lang="scss">
@import "./list";
</style>
