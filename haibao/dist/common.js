(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[3],[function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return u}));var i=o(24),n=o(25),a=o.n(n),s=o(7),c=Object(s["a"])(),d="https://campaign5.method-ad.cn/hypertherm/";function r(){return new Promise((function(t,e){var o=c.get("openid");o?t(o):wx.login({success:function(o){o.code?a.a.request({url:d+"xcx_request.php?rndv="+Math.random()+"&act=getOpenid",data:{code:o.code},method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){1==e.data.status&&(c.set("openid",e.data.openid),t(e.data.openid))},fail:function(t){e(t)}}):console.log("\u767b\u5f55\u5931\u8d25\uff01"+o.errMsg)}})}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,o){r().then((function(n){var s=Object.assign({},t.data||{},{openid:n});a.a.request({url:d+t.url+"?rndv="+Math.random()+"&act="+s.act,data:Object(i["a"])(Object(i["a"])({},s),{},{act:t.data.act2||""}),method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){e(t.data)},fail:function(t){o(t)}})}))}))}},,,function(t,e,o){"use strict";var i=o(0);e["a"]={data:function(){return{containerTop:0}},beforeDestroy:function(){this.$store.commit("set_liveLeadsModel"),this.$store.commit("set_downloadLeadsModel"),this.$store.commit("set_consultLeadsModel")},created:function(){var t=wx.getMenuButtonBoundingClientRect();this.containerTop=t.height+t.top+10},methods:{getOpenId:function(t){var e={openid:this.openid};t(e)},session:function(t){var e={sessionFrom:this.userInfo};t(e)},viewVideo:function(t){this.viewVideoSrc=t.video_filename},toViewPdf:function(t){wx.navigateTo({url:"/pages/pdf/index?src="+t.pdf_filename+"&title="+t.title+"&share_picture="+t.pdf_share_picture}),Object(i["a"])({url:"xcx_request.php",data:{act:"set_File_History",act2:"read",tp:this.$store.state.category,tp_value:t.class_id||t.tech_detail_id||t.product_id,file_tp:"pdf",watch_time:0}})},toViewVideo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;console.log(t),!t.appointment_isform>0?wx.navigateTo({url:"/pages/server/video?title="+t.title+"&video_url="+t.video_url+"&video_picture="+t.video_picture+"&share_img="+t.video_share_picture+"&id="+(t.class_id||t.tech_detail_id)}):(this.$store.commit("set_liveLeadsModel",!0),t.tp=e,this.$store.commit("set_leadsItem",t))},downloadPdf:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;t.pdf_isform>0?(wx.showToast({title:"\u8d44\u6599\u5df2\u53d1\u9001\u5230\u60a8\u7684\u90ae\u7bb1",icon:"none",duration:2e3}),Object(i["a"])({url:"xcx_request.php",data:{act:"set_File_History",act2:"download",tp:this.$store.state.category,tp_value:t.class_id||t.tech_detail_id,file_tp:"pdf",watch_time:0}})):(this.$store.commit("set_downloadLeadsModel",!0),t.tp=e,this.$store.commit("set_leadsItem",t))},downloadVideo:function(t){wx.showLoading({title:"\u52a0\u8f7d\u4e2d..."}),wx.downloadFile({url:t.video_filename,success:function(t){var e=t.tempFilePath;console.log(t),wx.saveVideoToPhotosAlbum({filePath:e,success:function(t){wx.showToast({title:"\u5df2\u4fdd\u5b58\u5230\u76f8\u518c",icon:"none",duration:2e3}),wx.hideLoading()},fail:function(t){console.log(t),wx.showToast({title:"\u83b7\u53d6\u6743\u9650\u5931\u8d25\uff0c\u5c06\u65e0\u6cd5\u4fdd\u5b58\u5230\u76f8\u518c\u54e6~",icon:"none",duration:2e3}),wx.hideLoading()}})}}),Object(i["a"])({url:"xcx_request.php",data:{act:"set_File_History",act2:"download",tp:this.$store.state.category,tp_value:t.class_id||t.tech_detail_id,file_tp:"video",watch_time:0}})}}}},,,,function(t,e,o){"use strict";function i(){var t={};return{set:function(e,o){t[e]=o,wx.setStorageSync(e,o)},get:function(t){return wx.getStorageSync(t)||""}}}o.d(e,"a",(function(){return i}))}]]);