(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[31],{100:function(t,a,e){"use strict";e.r(a);var s=e(39);for(var r in s)"default"!==r&&function(t){e.d(a,t,(function(){return s[t]}))}(r)},135:function(t,a,e){"use strict";e.r(a);var s=e(1),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"container",style:{paddingTop:t.containerTop+"px"}},[e("webheader"),t._v(" "),e("view",{staticClass:"banner"},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/banner.jpg",mode:"widthFix"}})]),t._v(" "),e("view",{staticClass:"search-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],attrs:{type:"text",placeholder:"\u5728\u8fd9\u91cc\u8f93\u5165\u60a8\u8981\u641c\u7d22\u7684\u5185\u5bb9","placeholder-style":"color:#ca8989"},domProps:{value:t.searchVal},on:{input:function(a){a.target.composing||(t.searchVal=a.target.value)}}}),t._v(" "),e("view",{staticClass:"search-btn",on:{tap:function(a){return t.search()}}},[t._v("\u70b9\u51fb\u641c\u7d22")])]),t._v(" "),e("view",{staticClass:"nav"},[e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=1"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav1.png"}}),t._v(" "),e("text",[t._v("\u5b89\u88c5")])]),t._v(" "),e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=2"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav2.png"}}),t._v(" "),e("text",[t._v("\u7ef4\u62a4\u4fdd\u517b")])]),t._v(" "),e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=3"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav3.png"}}),t._v(" "),e("text",[t._v("\u6545\u969c\u8bca\u65ad")])]),t._v(" "),e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=4"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav4.png"}}),t._v(" "),e("text",[t._v("\u5207\u5272\u4f18\u5316")])]),t._v(" "),e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=5"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav5.png"}}),t._v(" "),e("text",[t._v("\u90e8\u4ef6\u67e5\u8be2")])]),t._v(" "),e("navigator",{staticClass:"item",attrs:{url:"/pages/server/list?id=6"}},[e("image",{attrs:{src:"https://campaign5.method-ad.cn/hypertherm/img/nav6.png"}}),t._v(" "),e("text",[t._v("\u90e8\u4ef6\u62c6\u88c5")])])],1),t._v(" "),e("sidebar",{attrs:{server:!0}})],1)},i=[],n=e(0),c=e(3),o={name:"Index",mixins:[c["a"]],data:function(){return{searchVal:""}},components:{},mounted:function(){this.$store.commit("set_category",100),Object(n["a"])({url:"xcx_request.php",data:{act:"set_Visit_History",tp:100}})},methods:{search:function(){if(""==this.searchVal)return wx.showToast({title:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9",icon:"none",duration:2e3}),!1;wx.navigateTo({url:"/pages/server/details?search_val="+this.searchVal})}}},v=o,p=e(2);function m(t){var a=e(100);a.__inject__&&a.__inject__(t)}var l=Object(p["a"])(v,r,i,!1,m,null,"664eb212"),g=l.exports,h={navigationBarTitleText:"\u9996\u9875",navigationStyle:"custom"};Page(Object(s["createPageConfig"])(g,"pages/server/index",{},h||{}))},39:function(t,a,e){}},[[135,0,1,2,3]]]);