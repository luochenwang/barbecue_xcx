(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/course/index"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/course/index.vue":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/course/index.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=48145d62& */ "./src/pages/course/index.vue?vue&type=template&id=48145d62&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/course/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/pages/course/index.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "31884e6c"
  
)

component.options.__file = "src/pages/course/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/course/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _libs_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/ajax */ "./src/libs/ajax.js");
/* harmony import */ var _components_videVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/videVideo */ "./src/components/videVideo.vue");
/* harmony import */ var _libs_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/mixin */ "./src/libs/mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'course',
  mixins: [_libs_mixin__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  data: function data() {
    return {
      list: [],
      viewVideoSrc: ''
    };
  },
  components: {
    videVideo: _components_videVideo__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  onLoad: function onLoad(option) {
    var _this = this;

    Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_0__[/* ajax */ "a"])({
      url: 'xcx_request.php',
      data: {
        act: 'get_class_hot'
      }
    }).then(function (res) {
      _this.list = res.list;
    });
    this.$store.commit('set_category', 300);
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/course/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=template&id=48145d62&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/course/index.vue?vue&type=template&id=48145d62& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: "container",
      style: { paddingTop: _vm.containerTop + "px" }
    },
    [
      _c("webheader"),
      _vm._v(" "),
      _c("view", { staticClass: "banner" }, [
        _c("image", {
          attrs: {
            src:
              "https://campaign5.method-ad.cn/hypertherm/img/course/banner.jpg",
            mode: "widthFix"
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "view",
        { staticClass: "nav" },
        [
          _c(
            "navigator",
            {
              staticClass: "item",
              attrs: { url: "/pages/course/list?title=视频课程&category_id=1" }
            },
            [
              _c("image", {
                attrs: {
                  src:
                    "https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav1.png"
                }
              }),
              _vm._v(" "),
              _c("text", [_vm._v("海宝切割学院")])
            ]
          ),
          _vm._v(" "),
          _c(
            "navigator",
            {
              staticClass: "item",
              attrs: { url: "/pages/course/list?title=直播课程&category_id=2" }
            },
            [
              _c("image", {
                attrs: {
                  src:
                    "https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav2.png"
                }
              }),
              _vm._v(" "),
              _c("text", [_vm._v("直播课程")])
            ]
          ),
          _vm._v(" "),
          _c(
            "navigator",
            { staticClass: "item", attrs: { url: "/pages/course/center" } },
            [
              _c("image", {
                attrs: {
                  src:
                    "https://campaign5.method-ad.cn/hypertherm/img/course/icon_nav3.png"
                }
              }),
              _vm._v(" "),
              _c("text", [_vm._v("个人中心")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("view", { staticClass: "list-content" }, [
        _c("view", { staticClass: "tt" }, [_vm._v("热门视频")]),
        _vm._v(" "),
        _c(
          "view",
          { staticClass: "list" },
          _vm._l(_vm.list, function(item, index) {
            return _c("view", { key: index, staticClass: "item" }, [
              _c("view", { staticClass: "item-l" }, [
                _c("image", { attrs: { src: item.picture, mode: "widthFix" } })
              ]),
              _vm._v(" "),
              _c("view", { staticClass: "item-r" }, [
                _c("view", { staticClass: "name" }, [
                  _vm._v(_vm._s(item.title))
                ]),
                _vm._v(" "),
                _c("view", { staticClass: "btn-box" }, [
                  _c(
                    "view",
                    {
                      staticClass: "btn active",
                      on: {
                        tap: function($event) {
                          return _vm.toViewVideo(item)
                        }
                      }
                    },
                    [_vm._v("查看视频")]
                  ),
                  _vm._v(" "),
                  _c(
                    "view",
                    {
                      staticClass: "btn",
                      on: {
                        tap: function($event) {
                          return _vm.downloadVideo(item)
                        }
                      }
                    },
                    [_vm._v("下载资料")]
                  )
                ])
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("sidebar")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/course/index.vue":
/*!************************************!*\
  !*** ./src/pages/course/index.vue ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.8@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/course/index.vue");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/course/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/course/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/course/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/course/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************!*\
  !*** ./src/pages/course/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/course/index.vue?vue&type=template&id=48145d62&":
/*!*******************************************************************!*\
  !*** ./src/pages/course/index.vue?vue&type=template&id=48145d62& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=48145d62& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/course/index.vue?vue&type=template&id=48145d62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48145d62___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/course/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map