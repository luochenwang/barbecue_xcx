(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[19],{38:function(t,e,i){},76:function(t,e,i){"use strict";i.r(e);var a=i(38);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s)},83:function(t,e,i){"use strict";i.r(e);var a=i(0),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"container",style:{paddingTop:t.containerTop+"px"}},[i("webheader"),t._v(" "),t.searchModel?i("view",{staticClass:"search-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],attrs:{type:"text",placeholder:"\u5728\u8fd9\u91cc\u8f93\u5165\u60a8\u8981\u641c\u7d22\u7684\u5185\u5bb9","placeholder-style":"color:#ca8989","confirm-type":"search"},domProps:{value:t.searchVal},on:{confirm:t.search,input:function(e){e.target.composing||(t.searchVal=e.target.value)}}}),t._v(" "),i("view",{staticClass:"search-btn",on:{tap:function(e){return t.search()}}},[t._v("\u70b9\u51fb\u641c\u7d22")])]):t._e(),t._v(" "),t.list.length?i("view",{staticClass:"list",class:{"default-list":!t.searchModel}},t._l(t.list,(function(e,a){return i("view",{staticClass:"item",class:{active:e.show}},[i("view",{staticClass:"name",on:{tap:function(e){return t.toggleInfo(a)}}},[i("image",{staticClass:"name-l",attrs:{src:e.product_||t.proCover,mode:"widthFix"}}),t._v(" "),i("view",{staticClass:"name-r"},[t._v(t._s(e.title))])]),t._v(" "),i("view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],staticClass:"info-content"},[i("view",{staticClass:"info"},[i("view",{staticClass:"info-l",on:{tap:function(i){return t.toViewPdf(e)}}},[i("image",{attrs:{src:e.pdf_picture,mode:"widthFix"}})]),t._v(" "),i("view",{staticClass:"info-r"},[i("view",{staticClass:"txt icon-file",on:{tap:function(i){return t.toViewPdf(e)}}},[t._v("\u64cd\u4f5c\u6307\u5357")]),t._v(" "),i("view",{staticClass:"txt icon-download",on:{tap:function(i){return t.downloadPdf(e)}}},[t._v("\u4e0b\u8f7d\u8d44\u6599")]),t._v(" "),i("view",{staticClass:"time"},[t._v("\u66f4\u65b0\u65f6\u95f4\uff1a"+t._s(e.pdf_update_date))])])]),t._v(" "),e.video_picture?i("view",{staticClass:"info"},[i("view",{staticClass:"info-l",on:{tap:function(i){return t.toViewVideo(e)}}},[i("image",{attrs:{src:e.video_picture,mode:"widthFix"}})]),t._v(" "),i("view",{staticClass:"info-r"},[i("view",{staticClass:"txt icon-play",on:{tap:function(i){return t.toViewVideo(e)}}},[t._v("\u64cd\u4f5c\u89c6\u9891")]),t._v(" "),i("view",{staticClass:"time"},[t._v("\u66f4\u65b0\u65f6\u95f4\uff1a"+t._s(e.video_update_date))])])]):t._e()])])})),0):t._e(),t._v(" "),t.list.length||t.isFirstAjax?t._e():i("view",{staticClass:"no-data"},[i("view",{staticClass:"tt txt"},[t._v("\u62b1\u6b49\uff0c\u65e0\u6cd5\u67e5\u8be2\u5230\u76f8\u5173\u5185\u5bb9\u3002")]),t._v(" "),i("view",{staticClass:"txt"},[t._v("\u5982\u679c\u60a8\u60f3\u8981\u67e5\u8be2\u6280\u672f\u76f8\u5173\u5185\u5bb9\uff0c\u8bf7\u70b9\u51fb\u83dc\u5355\u680f\u4e2d\u7684"),i("text",[t._v("\u201c \u5728\u7ebf\u54a8\u8be2 \u201d")]),t._v("\uff1b")]),t._v(" "),i("view",{staticClass:"txt"},[t._v("\u5982\u679c\u60a8\u60f3\u8981\u8d2d\u4e70\u4ea7\u54c1\uff0c\u8bf7\u70b9\u51fb\u83dc\u5355\u680f\u4e2d\u7684"),i("text",[t._v("\u201c \u4f55\u5904\u8d2d\u4e70 \u201d")]),t._v("\uff1b")]),t._v(" "),i("view",{staticClass:"txt"},[t._v("\u5982\u679c\u60a8\u60f3\u8981\u54a8\u8be2\u5176\u4ed6\u5185\u5bb9\uff0c\u8bf7\u70b9\u51fb\u83dc\u5355\u680f\u4e2d\u7684"),i("text",[t._v("\u201c \u8054\u7cfb\u6211\u4eec \u201d")]),t._v("\u3002")])]),t._v(" "),i("sidebar"),t._v(" "),i("live-leads")],1)},n=[],r=i(15);function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,n=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(c)throw n}}}}var c=i(1),l=i(3),v={name:"server_details",mixins:[l["a"]],data:function(){return{searchModel:!1,searchVal:"",list:[],proCover:"",isFirstAjax:!0}},components:{},onLoad:function(t){var e=this;t.id?Object(c["a"])({url:"xcx_request.php",data:{act:"get_tech_detail",tech_id:t.id}}).then((function(t){if(e.proCover=t.picture,t.list){var i,a=o(t.list);try{for(a.s();!(i=a.n()).done;){var s=i.value;s.show=!1}}catch(t){a.e(t)}finally{a.f()}e.list=t.list}e.isFirstAjax=!1})):(this.searchModel=!0,this.searchVal=t.search_val,this.search())},methods:{toggleInfo:function(t){this.list[t].show=!this.list[t].show},search:function(){var t=this;if(""==this.searchVal)return wx.showToast({title:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9",icon:"none",duration:2e3}),!1;Object(c["a"])({url:"xcx_request.php",data:{act:"get_tech_search",keywords:this.searchVal}}).then((function(e){if(e.list){var i,a=o(e.list);try{for(a.s();!(i=a.n()).done;){var s=i.value;s.show=!1}}catch(t){a.e(t)}finally{a.f()}t.list=e.list}else t.list=[];t.isFirstAjax=!1}))}}},u=v,f=i(2);function d(t){var e=i(76);e.__inject__&&e.__inject__(t)}var _=Object(f["a"])(u,s,n,!1,d,null,"251d2562"),h=_.exports,w={navigationBarTitleText:"\u9996\u9875",navigationStyle:"custom"};Page(Object(a["createPageConfig"])(h,"pages/server/details",{},w||{}))}},[[83,0,1,2,3]]]);