(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/application/details"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/application/details.vue":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/application/details.vue ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=fc503fa2& */ "./src/pages/application/details.vue?vue&type=template&id=fc503fa2&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./src/pages/application/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&lang=scss& */ "./src/pages/application/details.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "f59c00b2"
  
)

component.options.__file = "src/pages/application/details.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/application/details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Volumes_d_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _libs_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ajax */ "./src/libs/ajax.js");
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


var scrollArr = ['desc', 'info', 'pay'];
var scrollTop = [];
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'server_details',
  mixins: [_libs_mixin__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  data: function data() {
    return {
      pageData: {},
      toView: '',
      viewStr: 'content',
      fixed: false,
      winHeight: '',
      menuButtonObject: {}
    };
  },
  components: {},
  onLoad: function onLoad(option) {
    var _this = this;

    Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_1__[/* ajax */ "a"])({
      url: 'xcx_request.php',
      data: {
        act: 'get_case_detail',
        case_id: option.case_id
      }
    }).then(function (res) {
      _this.pageData = res;

      _this.$nextTick(function () {
        var _iterator = Object(_Volumes_d_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(scrollArr),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var query = wx.createSelectorQuery();
            query.select('#' + item).boundingClientRect(function (rect) {
              var top = rect.top;
              scrollTop.push(top);
              console.log(scrollTop);
            }).exec();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    });
    var menuButtonObject = wx.getMenuButtonBoundingClientRect();
    this.menuButtonObject = menuButtonObject;
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        that.winHeight = res.windowHeight - (menuButtonObject.height + menuButtonObject.top) + 'px';
      }
    });
  },
  methods: {
    scrollTap: function scrollTap(view) {
      this.toView = view;
      this.viewStr = view;
    },
    // 滚动右侧菜单
    scrollRight: function scrollRight(e) {
      //console.log(e)
      var _top = e.detail.scrollTop; // let progress = parseInt(_top / Math.abs(this.winHeight)); // 计算出 当前的下标

      for (var i = 0; i < scrollTop.length; i++) {
        var item = scrollTop[i];

        if (item < _top) {
          this.viewStr = scrollArr[i];
          this.fixed = true;
        }
      }

      if (_top < scrollTop[0]) {
        this.fixed = false;
      }
    },
    bindPickerChange: function bindPickerChange(e) {
      this.index = e.detail.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/application/details.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=template&id=fc503fa2&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/application/details.vue?vue&type=template&id=fc503fa2& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      class: { "container-nav": _vm.fixed },
      style: { paddingTop: _vm.containerTop + "px" }
    },
    [
      _c("webheader"),
      _vm._v(" "),
      _c(
        "scroll-view",
        {
          style: { height: _vm.winHeight },
          attrs: {
            "scroll-y": "true",
            "scroll-into-view": _vm.toView,
            "scroll-with-animation": "true"
          },
          on: { scroll: _vm.scrollRight }
        },
        [
          _c("view", { staticClass: "tt" }, [
            _vm._v(_vm._s(_vm.pageData.title))
          ]),
          _vm._v(" "),
          _c(
            "view",
            { staticClass: "banner" },
            [
              _c(
                "swiper",
                {
                  attrs: {
                    "indicator-color": "#898989",
                    "indicator-active-color": "#ed1b2e",
                    "indicator-dots": "true"
                  }
                },
                _vm._l(_vm.pageData.carousel_list, function(item, index) {
                  return _c("swiper-item", [
                    _c("image", { attrs: { src: item } })
                  ])
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "view",
            {
              staticClass: "tab-nav",
              style: {
                top:
                  _vm.menuButtonObject.height +
                  _vm.menuButtonObject.top +
                  10 +
                  "px"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: "item",
                  class: { active: _vm.viewStr == "content" },
                  on: {
                    tap: function($event) {
                      return _vm.scrollTap("content")
                    }
                  }
                },
                [_vm._v("案例详情")]
              ),
              _vm._v(" "),
              _c(
                "view",
                {
                  staticClass: "item",
                  class: { active: _vm.viewStr == "products_list" },
                  on: {
                    tap: function($event) {
                      return _vm.scrollTap("products_list")
                    }
                  }
                },
                [_vm._v("相关产品")]
              )
            ]
          ),
          _vm._v(" "),
          _c("view", { staticClass: "pro-info", attrs: { id: "content" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("案例详情")]),
            _vm._v(" "),
            _c("view", { staticClass: "info" }, [
              _vm._v(_vm._s(_vm.pageData.content.replace(/<\/?.+?>/g, "")))
            ])
          ]),
          _vm._v(" "),
          _c("view", { staticClass: "pro-info", attrs: { id: "question" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("问题描述")]),
            _vm._v(" "),
            _c("view", { staticClass: "info" }, [
              _vm._v(_vm._s(_vm.pageData.question.replace(/<\/?.+?>/g, "")))
            ])
          ]),
          _vm._v(" "),
          _c("view", { staticClass: "pro-info", attrs: { id: "scheme" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("采用方案")]),
            _vm._v(" "),
            _c("view", { staticClass: "info" }, [
              _vm._v(_vm._s(_vm.pageData.scheme.replace(/<\/?.+?>/g, "")))
            ])
          ]),
          _vm._v(" "),
          _c("view", { staticClass: "pro-info", attrs: { id: "benefit" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("客户受益")]),
            _vm._v(" "),
            _c("view", { staticClass: "info" }, [
              _vm._v(_vm._s(_vm.pageData.benefit.replace(/<\/?.+?>/g, "")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "view",
            { staticClass: "pro-info", attrs: { id: "products_list" } },
            [
              _c("view", { staticClass: "pro-tt" }, [_vm._v("相关产品")]),
              _vm._v(" "),
              _c(
                "view",
                { staticClass: "list" },
                _vm._l(_vm.pageData.products_list, function(item, index) {
                  return _c("view", { staticClass: "item" }, [
                    _c("view", { staticClass: "img-box" }, [
                      _c("image", {
                        attrs: { src: item.picture, mode: "widthFix" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("view", { staticClass: "txt" }, [
                      _vm._v(_vm._s(item.title))
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("sidebar")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/application/details.vue":
/*!*******************************************!*\
  !*** ./src/pages/application/details.vue ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.8@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./details.vue */ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/application/details.vue");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/application/details', {}, config || {}))



/***/ }),

/***/ "./src/pages/application/details.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/pages/application/details.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/application/details.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/pages/application/details.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/application/details.vue?vue&type=template&id=fc503fa2&":
/*!**************************************************************************!*\
  !*** ./src/pages/application/details.vue?vue&type=template&id=fc503fa2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=template&id=fc503fa2& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/application/details.vue?vue&type=template&id=fc503fa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_fc503fa2___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/application/details.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=details.js.map