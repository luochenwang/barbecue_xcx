<!--页面底部-->
<template>
  <view class="leads-float" v-if="showFilterModel">
    <view class="leads-dialog">
      <view class="tt">产品筛选</view>
      <view class="form-group icon-arrow">
        <label>切割类型*</label>
        <picker @change="bindPickerChange1" :value="index1" :range="array1" range-key='title' class="picker">
            {{array1[index1].title}}
        </picker>
      </view>
      <view class='form-box'>
        <view class="form-group icon-arrow">
          <label>材质*</label>
          <picker @change="bindPickerChange2" :value="index2" :range="array2" class="picker" range-key='title'>
              {{array2[index2].title}}
          </picker>
        </view>
        <view class="form-group icon-arrow">
          <label>材质厚度*</label>
          <picker @change="bindPickerChange3" :value="index3" :range="array3" class="picker" range-key='title'>
              {{array3[index3].title}}
          </picker>
        </view>
        <view class="form-group icon-arrow">
          <label>质量要求*</label>
          <picker @change="bindPickerChange4" :value="index4" :range="array4" class="picker" range-key='title'>
              {{array4[index4].title}}
          </picker>
        </view>
      </view>
      <view class="submit" @tap="submit">提交</view>
      <view class="txt">*以上为等离子电源的初步筛选条件。</view>
      <view class="txt">如果您想要获取更精准的产品或解决方案，欢迎填写下表 ，之 后会有相应的销售联系您。</view>
      <!-- <view class="footer">
        <navigator url="/pages/webview/index?src=" class="href">产品选购</navigator>
      </view> -->

      <view class="close" @tap="close"></view>
    </view>
  </view>
</template>
<script>
import { ajax } from "../libs/ajax";

export default {
  name: 'sidebar',
  data(){
    return {
      privacy:false,
      index1:0,
      array1: [{}],
      index2:0,
      array2: [{}],
      index3:0,
      array3: [{}],
      index4:0,
      array4: [{}],
      // customItem: '全部'
    }
  },
  computed:{
      showFilterModel(){
          return this.$store.state.showFilterModel;
      },
  },
  watch:{
    showFilterModel(val){
      if(val){
          ajax({
            url: 'xcx_request.php',
            data: {
              act: 'get_products_qglx',
            },
          }).then(res=>{
            this.array1 = res.list;
            this.array1.unshift({
              title:'请选择',
            })
            ajax({
              url: 'xcx_request.php',
              data: {
                act: 'get_products_cz',
                qglx_id:this.array1[this.index1].qglx_id
              },
            }).then(res=>{
              this.array2 = res.list;
              this.array2.unshift({
                title:'请选择',
              })
              ajax({
                url: 'xcx_request.php',
                data: {
                  act: 'get_products_clhd',
                  qglx_id:this.array1[this.index1].qglx_id,
                  cz_id:this.array2[this.index2].cz_id,
                },
              }).then(res=>{
                this.array3 = res.list;
                this.array3.unshift({
                  title:'请选择',
                })
                ajax({
                  url: 'xcx_request.php',
                  data: {
                    act: 'get_products_zlyq',
                    qglx_id:this.array1[this.index1].qglx_id,
                    cz_id:this.array2[this.index2].cz_id,
                    clhd_id:this.array3[this.index3].clhd_id,
                  },
                }).then(res=>{
                  this.array4 = res.list;
                  this.array4.unshift({
                    title:'请选择',
                  })
                })
              })
            })
          })
      }
    }
  },
  mounted() {

  },
  methods: {
    close(){
        this.$store.commit('set_showFilterModel');
    },
    bindPickerChange1: function(e) {
      this.index1 = e.detail.value;
      this.index2 = 0;
      this.index3 = 0;
      this.index4 = 0;
      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'get_products_cz',
          qglx_id:this.array1[this.index1].qglx_id
        },
      }).then(res=>{
        this.array2 = res.list;
        this.array2.unshift({
          title:'请选择',
        })
        ajax({
          url: 'xcx_request.php',
          data: {
            act: 'get_products_clhd',
            qglx_id:this.array1[this.index1].qglx_id,
            cz_id:this.array2[this.index2].cz_id,
          },
        }).then(res=>{
          this.array3 = res.list;
          this.array3.unshift({
            title:'请选择',
          })
          ajax({
            url: 'xcx_request.php',
            data: {
              act: 'get_products_zlyq',
              qglx_id:this.array1[this.index1].qglx_id,
              cz_id:this.array2[this.index2].cz_id,
              clhd_id:this.array3[this.index3].clhd_id,
            },
          }).then(res=>{
            this.array4 = res.list;
            this.array4.unshift({
              title:'请选择',
            })
          })
        })
      })
    },
    bindPickerChange2: function(e) {
      this.index2 = e.detail.value;
      this.index3 = 0;
      this.index4 = 0;
      
      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'get_products_clhd',
          qglx_id:this.array1[this.index1].qglx_id,
          cz_id:this.array2[this.index2].cz_id,
        },
      }).then(res=>{
        this.array3 = res.list;
        this.array3.unshift({
          title:'请选择',
        })
        ajax({
          url: 'xcx_request.php',
          data: {
            act: 'get_products_zlyq',
            qglx_id:this.array1[this.index1].qglx_id,
            cz_id:this.array2[this.index2].cz_id,
            clhd_id:this.array3[this.index3].clhd_id,
          },
        }).then(res=>{
          this.array4 = res.list;
          this.array4.unshift({
            title:'请选择',
          })
        })
      })
    },
    bindPickerChange3: function(e) {
      this.index3 = e.detail.value;
      this.index4 = 0;
      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'get_products_zlyq',
          qglx_id:this.array1[this.index1].qglx_id,
          cz_id:this.array2[this.index2].cz_id,
          clhd_id:this.array3[this.index3].clhd_id,
        },
      }).then(res=>{
        this.array4 = res.list;
        this.array4.unshift({
          title:'请选择',
        })
      })
    },
    bindPickerChange4: function(e) {
      this.index4 = e.detail.value;
    },
    submit(){
      if(!this.array1[this.index1].qglx_id){
        wx.showToast({
            title: '请选择切割类型',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(!this.array2[this.index2].cz_id){
        wx.showToast({
            title: '请选择材质',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(!this.array3[this.index3].clhd_id){
        wx.showToast({
            title: '请选择材质厚度',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      if(!this.array4[this.index4].zlyq_id){
        wx.showToast({
            title: '请选择质量要求',
            icon: 'none',
            duration: 2000,
        })
        return false;
      }
      this.close();
      this.$store.commit('set_filterObj',{
        qglx_id: this.array1[this.index1].qglx_id,
        cz_id: this.array2[this.index2].cz_id,
        clhd_id: this.array3[this.index3].clhd_id,
        zlyq_id: this.array4[this.index4].zlyq_id,
      });
      this.$parent.filterSubmit();

      // ajax({
      //   url: 'xcx_request.php',
      //   data: {
      //     act: 'get_products',
      //     qglx_id: this.array1[this.index1].qglx_id,
      //     cz_id: this.array2[this.index2].cz_id,
      //     clhd_id: this.array3[this.index3].clhd_id,
      //     zlyq_id: this.array4[this.index4].zlyq_id,
      //     page: 1
      //   },
      // }).then(res=>{
      //   if(res.status == 1){
      //     this.close();
      //     this.$store.commit('set_filterObj',{
      //       qglx_id: this.array1[this.index1].qglx_id,
      //       cz_id: this.array2[this.index2].cz_id,
      //       clhd_id: this.array3[this.index3].clhd_id,
      //       zlyq_id: this.array4[this.index4].zlyq_id,
      //     });
      //     wx.navigateTo({ url: '/pages/show/sublist' });
      //   }else{
      //     wx.showToast({
      //         title: res.msg,
      //         icon: 'none',
      //         duration: 2000,
      //     })
      //   }
      // })
    }
  }
}

</script>
<style lang="scss">
@import "./leads";

</style>
