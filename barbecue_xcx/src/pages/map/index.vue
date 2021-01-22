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
                 iconPath:"http://192.168.56.138:2832/map/shape1.png",
                 id: 0,
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

  }
}
</script>

<style lang="scss">
@import "./index";
</style>
