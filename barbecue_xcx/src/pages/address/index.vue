<template>
  <view class="container">
    <view class="leads">
        <view class="form-group">
            <view class="label">联系人</view>
            <input type="text" placeholder="用于收货时对您的称呼" v-model="name">
        </view>
        <view class="form-group">
            <view class="label">性别</view>
            <view class="gender">
                <view class="item" :class="{'active' : sex == 1}" @click="sex = 1">男</view>
                <view class="item" :class="{'active' : sex == 2}" @click="sex = 2">女</view>
            </view>
        </view>
        <view class="form-group">
            <view class="label">手机号</view>
            <input type="text" placeholder="输入收货人手机号" v-model="phone">
        </view>
        <view class="form-group">
            <view class="label">地址</view>
            <input type="text" placeholder="输入收货地址" v-model='address'>
        </view>
        <view class="form-group">
            <view class="label">标签</view>
            <view class="tag-list">
                <text :class="{'active' : tag == '公司'}">公司</text>
                <text :class="{'active' : tag == '家'}">家</text>
                <text :class="{'active' : tag == '学校'}">学校</text>
            </view>
        </view>
    </view>
    <view class="set-default">设为默认地址</view>

    <view class="submit" @click="submit">保存地址</view>
  </view>
</template>

<script>

export default {
  name: 'index',
  components: {

  },
  data() {
      return {
        addressId:'',
        name:'',
        sex:1,
        phone:'',
        address:'',
        tag:'',
      }
  },
  onLoad(option){
    if(option.id){
        this.addressId = option.id;
        this.$ajax({
            url:'mxrs/wx/addr/findByAddrId',
            data:{
                addrId:option.id
            }
        }).then(res=>{
            if(res.code == 200){
                this.sex = res.data.sex;
                this.phone = res.data.telephone;
                this.tag = res.data.tag;
                this.name = res.data.userName;
                this.address = res.data.addr;
            }
        });
    }
  },
  mounted(){

  },
  methods: {
    submit(){
        if(this.name == ''){
            wx.showToast({
              title: '请输入联系人',
              icon: 'none',
              duration: 2000,
            });
            return false;
        }
        if(!/^1[1-9]d{9}$/.test(this.phone)){
            wx.showToast({
              title: '请输入收货地址',
              icon: 'none',
              duration: 2000,
            });
            return false;
        }
        if(this.address == ''){
            wx.showToast({
              title: '请输入收货地址',
              icon: 'none',
              duration: 2000,
            });
            return false;
        }

        var obj = {
            addrId:this.addressId,
            userName:this.name,
            sex:this.sex,
            addr:this.address,
            tag:this.tag,
            telephone:this.phone,
        }
        if(this,addressId){
            // 修改
            this.$ajax({
                url:'mxrs/wx/addr/updateAddr',
                data:obj
            }).then(res=>{
                if(res.code == 200){
                    wx.navigateBack();
                }else{
                    wx.showToast({
                      title: res.msg,
                      icon: 'none',
                      duration: 2000,
                    });
                }
            })
        }else{
            // 添加
            this.$ajax({
                url:'mxrs/wx/addr/addAddr',
                data:obj
            }).then(res=>{
                if(res.code == 200){
                    wx.navigateBack();
                }else{
                    wx.showToast({
                      title: res.msg,
                      icon: 'none',
                      duration: 2000,
                    });
                }
            })
        }
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
