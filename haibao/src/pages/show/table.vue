<template>
  <view class="container" :style="{paddingTop:containerTop+'px'}">
    <webheader/>
    <view class="tab-nav">
      <view class="item active" @tap='writeLeader'>
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_leads.png"/>
        <text>填写表单</text>
      </view>
<!--       <view class="item" @tap="showFilter" v-if="isFilter">
        <image src="https://campaign5.method-ad.cn/hypertherm/img/show/icon_filter.png"/>
        <text>筛选</text>
      </view> -->
    </view>
    <view class="search-box">
        <input type="text" placeholder="在这里输入您要搜索的内容" placeholder-style="color:#ca8989" v-model='searchVal' confirm-type="search" @confirm="search"/>
        <view class="search-btn" @tap="search()">点击搜索</view>
    </view>

    <view class="table-tt">请根据下表进行初步筛选：</view>
    <view class="table-main">
      <view class="box tt">
        <text>产品</text>
        <text>金属去除量 kg/hr</text>
        <text>深 mm</text>
        <text>宽 mm</text>
      </view>
      <navigator url="/pages/show/details?id=2" class="box">
        <text>Powermax30XP 手持</text>
        <text><3.4</text>
        <text><3.2</text>
        <text><6.8</text>
      </navigator>
      <navigator url="/pages/show/details?id=3" class="box">
        <text>Powermax45XP 手持</text>
        <text>3.4</text>
        <text><3.2</text>
        <text>6.8</text>
      </navigator>
      <navigator url="/pages/show/details?id=8" class="box">
        <text>Powermax45XP 机用</text>
        <text>3.4</text>
        <text>3.2</text>
        <text>6.8</text>
      </navigator>
      <navigator url="/pages/show/details?id=4" class="box">
        <text>Powermax65 手持</text>
        <text>4.8</text>
        <text>3.5</text>
        <text>6.6</text>
      </navigator>
      <navigator url="/pages/show/details?id=9" class="box">
        <text>Powermax65 机用</text>
        <text>4.8</text>
        <text>3.5</text>
        <text>6.6</text>
      </navigator>
      <navigator url="/pages/show/details?id=5" class="box">
        <text>Powermax85 手持</text>
        <text>8.8</text>
        <text>5.8</text>
        <text>7.1</text>
      </navigator>
      <navigator url="/pages/show/details?id=10" class="box">
        <text>Powermax85 机用</text>
        <text>8.8</text>
        <text>5.8</text>
        <text>7.1</text>
      </navigator>
      <navigator url="/pages/show/details?id=6" class="box">
        <text>Powermax105 手持</text>
        <text>9.8</text>
        <text>6.4</text>
        <text>7.4</text>
      </navigator>
      <navigator url="/pages/show/details?id=11" class="box">
        <text>Powermax105 机用</text>
        <text>9.8</text>
        <text>6.4</text>
        <text>7.4</text>
      </navigator>
      <navigator url="/pages/show/details?id=7" class="box">
        <text>Powermax125 手持</text>
        <text>12.52</text>
        <text>4.3– 7.9</text>
        <text>6.1– 9.9</text>
      </navigator>
      <navigator url="/pages/show/details?id=12" class="box">
        <text>Powermax125 机用</text>
        <text>12.52</text>
        <text>4.3– 7.9</text>
        <text>6.1– 9.9</text>
      </navigator>
      <navigator url="/pages/show/details?id=13" class="box">
        <text>MAXPRO200</text>
        <text>18.7</text>
        <text>8</text>
        <text>10.7</text>
      </navigator>
    </view>
    <!-- <image src="https://campaign5.method-ad.cn/hypertherm/img/table.jpg" class="table-img"/> -->
    <view class="table-tips">如需精确查合适的气刨系统，请点击页面左上方的《填写填单》， 后续会有海宝专业人员联系您。</view>

    <sidebar/>
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
        typeId:'',
        list:[],
        page:1,
        loaded:false,
        isFilter:false,
        isFirstAjax:true
      }
    },
  components: {

  },
  onLoad(option) {
      this.searchVal = option.search_val || '';
      this.typeId = option.type_id || '';
      this.isFilter = option.is_filter || '';

  },
  methods: {
    writeLeader(){
        this.$store.commit('set_proLeadsModel',true);
    },
    showFilter(){
        this.$store.commit('set_showFilterModel',true);
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
        wx.redirect({url:'/pages/show/sublist?search_val='+this.searchVal});
    }
  }
}
</script>

<style lang="scss">
@import "../server/list";
@import "./list";
@import "./table";

</style>
