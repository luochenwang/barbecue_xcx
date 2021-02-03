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
             style='width:100%;height:100%;'
             @markertap="markertap"
          >
        </map>

        <webFooter :type="'device'"/>
    </view>
</template>

<script>
import webFooter from '../../components/webFooter.vue'

export default {
  name: 'map',
  data() {
        return {
            markers:[{
                 height: 37,
                 iconPath:"http://172.16.1.142:3833/map/shape1.png",
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
