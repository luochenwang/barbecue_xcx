(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/server/details"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/server/details.vue":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/server/details.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=9c32380c& */ "./src/pages/server/details.vue?vue&type=template&id=9c32380c&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./src/pages/server/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&lang=scss& */ "./src/pages/server/details.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "f9b60cfc"
  
)

component.options.__file = "src/pages/server/details.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/server/details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'server_details',
  mixins: [_libs_mixin__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  data: function data() {
    return {
      searchModel: false,
      searchVal: '',
      list: [],
      proCover: '',
      isFirstAjax: true
    };
  },
  components: {},
  onLoad: function onLoad(option) {
    var _this = this;

    if (option.id) {
      Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_1__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'get_tech_detail',
          tech_id: option.id
        }
      }).then(function (res) {
        _this.proCover = res.picture;

        if (res.list) {
          var _iterator = Object(_Volumes_d_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(res.list),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              item.show = false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this.list = res.list;
        }

        _this.isFirstAjax = false;
      });
    } else {
      this.searchModel = true;
      this.searchVal = option.search_val;
      this.search();
    }
  },
  methods: {
    toggleInfo: function toggleInfo(index) {
      this.list[index].show = !this.list[index].show;
    },
    search: function search() {
      var _this2 = this;

      if (this.searchVal == '') {
        wx.showToast({
          title: '请输入要搜索的内容',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_1__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'get_tech_search',
          keywords: this.searchVal
        }
      }).then(function (res) {
        if (res.list) {
          var _iterator2 = Object(_Volumes_d_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(res.list),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              item.show = false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          _this2.list = res.list;
        } else {
          _this2.list = [];
        }

        _this2.isFirstAjax = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/server/details.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=template&id=9c32380c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/server/details.vue?vue&type=template&id=9c32380c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _vm.searchModel
        ? _c("view", { staticClass: "search-box" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchVal,
                  expression: "searchVal"
                }
              ],
              attrs: {
                type: "text",
                placeholder: "在这里输入您要搜索的内容",
                "placeholder-style": "color:#ca8989",
                "confirm-type": "search"
              },
              domProps: { value: _vm.searchVal },
              on: {
                confirm: _vm.search,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchVal = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "view",
              {
                staticClass: "search-btn",
                on: {
                  tap: function($event) {
                    return _vm.search()
                  }
                }
              },
              [_vm._v("点击搜索")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.list.length
        ? _c(
            "view",
            {
              staticClass: "list",
              class: { "default-list": !_vm.searchModel }
            },
            _vm._l(_vm.list, function(item, index) {
              return _c(
                "view",
                { staticClass: "item", class: { active: item.show } },
                [
                  _c(
                    "view",
                    {
                      staticClass: "name",
                      on: {
                        tap: function($event) {
                          return _vm.toggleInfo(index)
                        }
                      }
                    },
                    [
                      _c("image", {
                        staticClass: "name-l",
                        attrs: {
                          src: item.product_ || _vm.proCover,
                          mode: "widthFix"
                        }
                      }),
                      _vm._v(" "),
                      _c("view", { staticClass: "name-r" }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "view",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: item.show,
                          expression: "item.show"
                        }
                      ],
                      staticClass: "info-content"
                    },
                    [
                      _c("view", { staticClass: "info" }, [
                        _c(
                          "view",
                          {
                            staticClass: "info-l",
                            on: {
                              tap: function($event) {
                                return _vm.toViewPdf(item)
                              }
                            }
                          },
                          [
                            _c("image", {
                              attrs: { src: item.pdf_picture, mode: "widthFix" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("view", { staticClass: "info-r" }, [
                          _c(
                            "view",
                            {
                              staticClass: "txt icon-file",
                              on: {
                                tap: function($event) {
                                  return _vm.toViewPdf(item)
                                }
                              }
                            },
                            [_vm._v("操作指南")]
                          ),
                          _vm._v(" "),
                          _c(
                            "view",
                            {
                              staticClass: "txt icon-download",
                              on: {
                                tap: function($event) {
                                  return _vm.downloadPdf(item)
                                }
                              }
                            },
                            [_vm._v("下载资料")]
                          ),
                          _vm._v(" "),
                          _c("view", { staticClass: "time" }, [
                            _vm._v("更新时间：" + _vm._s(item.pdf_update_date))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      item.video_picture
                        ? _c("view", { staticClass: "info" }, [
                            _c(
                              "view",
                              {
                                staticClass: "info-l",
                                on: {
                                  tap: function($event) {
                                    return _vm.toViewVideo(item)
                                  }
                                }
                              },
                              [
                                _c("image", {
                                  attrs: {
                                    src: item.video_picture,
                                    mode: "widthFix"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("view", { staticClass: "info-r" }, [
                              _c(
                                "view",
                                {
                                  staticClass: "txt icon-play",
                                  on: {
                                    tap: function($event) {
                                      return _vm.toViewVideo(item)
                                    }
                                  }
                                },
                                [_vm._v("操作视频")]
                              ),
                              _vm._v(" "),
                              _c("view", { staticClass: "time" }, [
                                _vm._v(
                                  "更新时间：" + _vm._s(item.video_update_date)
                                )
                              ])
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.list.length && !_vm.isFirstAjax
        ? _c("view", { staticClass: "no-data" }, [
            _c("view", { staticClass: "tt txt" }, [
              _vm._v("抱歉，无法查询到相关内容。")
            ]),
            _vm._v(" "),
            _c("view", { staticClass: "txt" }, [
              _vm._v("如果您想要查询技术相关内容，请点击菜单栏中的"),
              _c("text", [_vm._v("“ 在线咨询 ”")]),
              _vm._v("；")
            ]),
            _vm._v(" "),
            _c("view", { staticClass: "txt" }, [
              _vm._v("如果您想要购买产品，请点击菜单栏中的"),
              _c("text", [_vm._v("“ 何处购买 ”")]),
              _vm._v("；")
            ]),
            _vm._v(" "),
            _c("view", { staticClass: "txt" }, [
              _vm._v("如果您想要咨询其他内容，请点击菜单栏中的"),
              _c("text", [_vm._v("“ 联系我们 ”")]),
              _vm._v("。")
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("sidebar", { attrs: { server: true } }),
      _vm._v(" "),
      _c("live-leads"),
      _vm._v(" "),
      _c("download-leads")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/server/details.vue":
/*!**************************************!*\
  !*** ./src/pages/server/details.vue ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.8@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./details.vue */ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/server/details.vue");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/server/details', {}, config || {}))



/***/ }),

/***/ "./src/pages/server/details.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/server/details.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/server/details.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/pages/server/details.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/server/details.vue?vue&type=template&id=9c32380c&":
/*!*********************************************************************!*\
  !*** ./src/pages/server/details.vue?vue&type=template&id=9c32380c& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=template&id=9c32380c& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/server/details.vue?vue&type=template&id=9c32380c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_9c32380c___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/server/details.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=details.js.map