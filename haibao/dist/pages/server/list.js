(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[23],{37:function(t,e,a){},75:function(t,e,a){"use strict";a.r(e);var i=a(37);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s)},88:function(t,e,a){"use strict";a.r(e);var i=a(0),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container",style:{paddingTop:t.containerTop+"px"}},[a("webheader"),t._v(" "),a("view",{staticClass:"list"},t._l(t.list,(function(e,i){return a("navigator",{key:i,staticClass:"item",attrs:{url:"/pages/server/details?id="+e.tech_id}},[a("view",{staticClass:"item-l"},[a("image",{attrs:{src:e.picture,mode:"widthFix"}})]),t._v(" "),a("view",{staticClass:"item-r"},[a("view",{staticClass:"name"},[t._v(t._s(e.title_en))]),t._v(" "),a("view",{staticClass:"name"},[t._v(t._s(e.title_cn))])])])})),1),t._v(" "),a("sidebar")],1)},n=[],r=a(1),c=a(3),o={name:"server_list",mixins:[c["a"]],data:function(){return{searchBox:!1,searchVal:"",list:[]}},components:{},onLoad:function(t){var e=this;this.searchVal=t.search_val,Object(r["a"])({url:"xcx_request.php",data:{act:"get_tech_list",category_id:t.id}}).then((function(t){t.list&&(e.list=t.list)}))},methods:{searchAjax:function(){var t=this;Object(r["a"])({url:"xcx_request.php",data:{act:"get_tech_search",keywords:this.searchVal}}).then((function(e){t.list=e.list}))},search:function(){if(""==this.searchVal)return wx.showToast({title:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9",icon:"none",duration:2e3}),!1;this.searchAjax()}}},l=o,u=a(2);function _(t){var e=a(75);e.__inject__&&e.__inject__(t)}var h=Object(u["a"])(l,s,n,!1,_,null,"70581fae"),v=h.exports,d={navigationBarTitleText:"\u9996\u9875",navigationStyle:"custom"};Page(Object(i["createPageConfig"])(v,"pages/server/list",{},d||{}))}},[[88,0,1,2,3]]]);