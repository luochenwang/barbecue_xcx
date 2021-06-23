<template>
  <view class="container">
  </view>
</template>

<script>
const Page = require('../../utils/mtj-wx-sdk.js').Page;
export default {
  name: 'user',
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
@import "./index";
</style>
