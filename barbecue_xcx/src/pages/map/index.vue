<template>
    <view class="container">
        <map longitude="107.92883622761" 
             latitude="33.549939112272"
             enable-zoom="enable-zoom"
             enable-3D="enable-3D"
             subkey="XLPBZ-ET5KP-V3DDP-VRDWV-YPLEZ-CHBXQ"
             scale="14"
             id='map'
             :markers="markers"
             :setting="setting"
             style='width:100%;height:100%;'
             @markertap="markertap"
          >
        </map>

        <view class="store-info-float">
          <view class="store-info">
            <image src=""/>
            <view class="info">
              <view class="title"></view>
              <view class="state"></view>
              <view class="number"></view>
              <view class="device"></view>
            </view>
          </view>
          <view class="store-info-footer">
            <view>立刻下单</view>
            <view>现在出发</view>
          </view>
        </view>
        <webFooter :type="'device'"/>
    </view>
</template>

<script>
import webFooter from '../../components/webFooter.vue'

export default {
  name: 'map',
  data() {
        return {
          setting:{
              enable3D: true,
              enableTraffic: true
            },
            markers:[{
                 height: 37,
                 iconPath:"https://weixin-miniapp.oss-cn-beijing.aliyuncs.com/wx-image/map/shape1.png",
                 id: 2,
                 label: {content:"汉中市-佛坪县", color:'#eee',fontSize: 14, anchorX: 0, anchorY: 5,textAlign:'center'},
                 latitude:"33.549939112272",
                 longitude:"107.92883622761",
                 width: 36,
            }]
        }
    },
  components: {
    webFooter
  },
  mounted(){

  },
  methods: {
    markertap(e){
      console.log(e);
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
