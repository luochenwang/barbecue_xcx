(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/show/details"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/show/details.vue":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/show/details.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=5da413b4& */ "./src/pages/show/details.vue?vue&type=template&id=5da413b4&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./src/pages/show/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&lang=scss& */ "./src/pages/show/details.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "a60c2988"
  
)

component.options.__file = "src/pages/show/details.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/show/details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
      product_id: '',
      privacy: false,
      array: [],
      index: 0,
      name: '',
      phone: '',
      email: '',
      demand: '',
      region: ["上海市", "上海市", '徐汇区'],
      company: '',
      isSendEmail: true,
      toView: '',
      viewStr: 'desc',
      fixed: false,
      winHeight: '',
      menuButtonObject: {},
      swiperHeight: 0,
      //外部的高度
      current: 0
    };
  },
  components: {},
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: this.pageData.title,
      // imageUrl:this.share_picture,
      path: '/pages/show/details?id=' + this.product_id
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;

    this.product_id = option.id;
    Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_1__[/* ajax */ "a"])({
      url: 'xcx_request.php',
      data: {
        act: 'get_product_detail',
        product_id: option.id
      }
    }).then(function (res) {
      _this.pageData = res;

      _this.$nextTick(function () {
        setTimeout(function () {
          _this.getElementHeight('#swiper' + _this.current);

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
        }, 500);
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
    changeCurrent: function changeCurrent(index) {
      var _this2 = this;

      this.current = index;
      this.$nextTick(function () {
        _this2.getElementHeight('#swiper' + _this2.current);
      });
    },
    //动态获取高度
    getElementHeight: function getElementHeight(element) {
      var _this3 = this;

      console.log(element);
      var query = wx.createSelectorQuery();
      console.log(query);
      query.select(element).boundingClientRect(function (rect) {
        console.log(rect);

        if (rect) {
          _this3.swiperHeight = rect.height;
        }
      }).exec();
    },
    openPdf: function openPdf(file) {
      wx.downloadFile({
        url: file,
        success: function success(res) {
          console.log(res);
          var data = res.tempFilePath;
          wx.openDocument({
            filePath: data,
            fileType: 'pdf'
          });
        }
      });
    },
    bindPickerChange: function bindPickerChange(e) {
      this.index = e.detail.value;
    },
    bindRegionChange: function bindRegionChange(e) {
      this.region = e.detail.value;
      console.log('picker发送选择改变，携带值为', e.detail.value);
    },
    changePrivacy: function changePrivacy(e) {
      this.privacy = !this.privacy;
    },
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
    submit: function submit() {
      if (this.name == '') {
        wx.showToast({
          title: '请输入姓名',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      if (!/^1[0-9]{10}$/.test(this.phone)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      if (this.company == '') {
        wx.showToast({
          title: '请输入公司名称',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      if (!this.privacy) {
        wx.showToast({
          title: '请查看海宝隐私政策',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      Object(_libs_ajax__WEBPACK_IMPORTED_MODULE_1__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'set_form',
          tp: 420,
          tp_value: this.product_id,
          comname: this.company,
          mobile: this.phone,
          name: this.name,
          province: this.region[0],
          city: this.region[1],
          content: this.demand
        }
      }).then(function (res) {
        if (res.status == 1) {
          wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/show/details.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=template&id=5da413b4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/pages/show/details.vue?vue&type=template&id=5da413b4& ***!
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
                    _c("image", {
                      attrs: { src: item.picture, mode: "widthFix" }
                    })
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
                  class: { active: _vm.viewStr == "desc" },
                  on: {
                    tap: function($event) {
                      return _vm.scrollTap("desc")
                    }
                  }
                },
                [_vm._v("产品介绍")]
              ),
              _vm._v(" "),
              _c(
                "view",
                {
                  staticClass: "item",
                  class: { active: _vm.viewStr == "info" },
                  on: {
                    tap: function($event) {
                      return _vm.scrollTap("info")
                    }
                  }
                },
                [_vm._v("产品资料")]
              ),
              _vm._v(" "),
              _c(
                "view",
                {
                  staticClass: "item",
                  class: { active: _vm.viewStr == "pay" },
                  on: {
                    tap: function($event) {
                      return _vm.scrollTap("pay")
                    }
                  }
                },
                [_vm._v("何处购买")]
              )
            ]
          ),
          _vm._v(" "),
          _c("view", { staticClass: "pro-info", attrs: { id: "desc" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("产品介绍")]),
            _vm._v(" "),
            _vm.pageData.video_url
              ? _c("view", { staticClass: "video-box" }, [
                  _c("video", {
                    attrs: {
                      src: _vm.pageData.video_filename,
                      poster: _vm.pageData.video_picture,
                      playerid: "txv1",
                      autoplay: false,
                      controls: true
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("view", { staticClass: "info" }, [
              _c("text", [
                _vm._v(
                  _vm._s(
                    _vm.pageData.content
                      ? _vm.pageData.content.replace(/↵/g, "\n")
                      : ""
                  )
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.pageData.sample_list
            ? _c(
                "view",
                { staticClass: "pro-info" },
                [
                  _c("view", { staticClass: "pro-tt" }, [_vm._v("切割样件")]),
                  _vm._v(" "),
                  _c(
                    "swiper",
                    {
                      style: { height: _vm.swiperHeight + "px" },
                      attrs: {
                        "indicator-color": "#898989",
                        "indicator-active-color": "#ed1b2e",
                        "indicator-dots": "true"
                      },
                      on: { change: _vm.changeCurrent }
                    },
                    _vm._l(_vm.pageData.sample_list, function(item, index) {
                      return _c("swiper-item", [
                        _c(
                          "view",
                          {
                            staticClass: "swiper-box",
                            attrs: { id: "swiper" + index }
                          },
                          [
                            _c("view", { staticClass: "img-box" }, [
                              _c("image", {
                                attrs: { src: item.picture, mode: "widthFix" }
                              })
                            ]),
                            _vm._v(" "),
                            _c("view", { staticClass: "info" }, [
                              _c("text", [
                                _vm._v(
                                  _vm._s(
                                    item.content
                                      ? item.content.replace(/↵/g, "\n")
                                      : ""
                                  )
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.pageData &&
          _vm.pageData.cases_list &&
          _vm.pageData.cases_list.length
            ? _c("view", { staticClass: "pro-list" }, [
                _c("view", { staticClass: "pro-tt" }, [_vm._v("产品应用")]),
                _vm._v(" "),
                _c(
                  "view",
                  { staticClass: "list" },
                  _vm._l(_vm.pageData.cases_list, function(item, index) {
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
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("view", { staticClass: "data-list", attrs: { id: "info" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("产品资料")]),
            _vm._v(" "),
            _c(
              "view",
              { staticClass: "list" },
              _vm._l(_vm.pageData.download_list, function(item, index) {
                return _c("view", { staticClass: "item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "txt",
                      on: {
                        tap: function($event) {
                          return _vm.openPdf(item.file)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item.title) + "." + _vm._s(item.file_type))]
                  ),
                  _vm._v(" "),
                  _c("view", {
                    staticClass: "view icon",
                    on: {
                      tap: function($event) {
                        return _vm.openPdf(item.file)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("view", { staticClass: "share icon" }, [
                    _c("button", { attrs: { "open-type": "share" } })
                  ]),
                  _vm._v(" "),
                  _c("view", {
                    staticClass: "download icon",
                    on: {
                      tap: function($event) {
                        return _vm.downloadPdf(
                          Object.assign(
                            {},
                            { product_id: _vm.product_id },
                            item
                          )
                        )
                      }
                    }
                  })
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("view", { staticClass: "how-pay", attrs: { id: "pay" } }, [
            _c("view", { staticClass: "pro-tt" }, [_vm._v("何处购买")]),
            _vm._v(" "),
            _c("view", { staticClass: "leads-dialog" }, [
              _c("view", { staticClass: "form-group" }, [
                _c("label", [_vm._v("姓名*")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("view", { staticClass: "form-group" }, [
                _c("label", [_vm._v("手机号码*")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.phone,
                      expression: "phone"
                    }
                  ],
                  attrs: { type: "number", maxlength: "11" },
                  domProps: { value: _vm.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.phone = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("view", { staticClass: "form-group" }, [
                _c("label", [_vm._v("邮箱地址*")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  attrs: { type: "email", maxlength: "20" },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("view", { staticClass: "form-group" }, [
                _c("label", [_vm._v("公司名称*")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company,
                      expression: "company"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.company },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.company = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "view",
                { staticClass: "form-group icon-arrow" },
                [
                  _c("label", [_vm._v("所在省市*")]),
                  _vm._v(" "),
                  _c(
                    "picker",
                    {
                      attrs: { mode: "region", value: _vm.region },
                      on: { change: _vm.bindRegionChange }
                    },
                    [
                      _c("view", { staticClass: "txt" }, [
                        _vm._v(
                          _vm._s(_vm.region[0]) +
                            "，" +
                            _vm._s(_vm.region[1]) +
                            "，" +
                            _vm._s(_vm.region[2])
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("view", { staticClass: "form-group" }, [
                _c("label", [_vm._v("您的需求*")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.demand,
                      expression: "demand"
                    }
                  ],
                  domProps: { value: _vm.demand },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.demand = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "view",
                { staticClass: "privacy" },
                [
                  _c(
                    "checkbox-group",
                    { on: { change: _vm.changePrivacy } },
                    [
                      _c("checkbox", {
                        attrs: { checked: _vm.privacy, value: _vm.privacy }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("text", [_vm._v("我已阅读并同意海宝隐私政策。*")]),
                  _vm._v(" "),
                  _c(
                    "navigator",
                    {
                      staticClass: "href",
                      attrs: {
                        url:
                          "/pages/webview/index?src=https://www.hypertherm.com/zh/policies/privacy/"
                      }
                    },
                    [_vm._v("查看隐私政策")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("view", { staticClass: "tips" }, [
                _vm._v(
                  "海宝将不定时向您邮箱发送产品、服务及活动等相关信息， 您可以随时取消预订。"
                )
              ]),
              _vm._v(" "),
              _c("view", { staticClass: "label" }, [_vm._v("邮件订阅*")]),
              _vm._v(" "),
              _c(
                "view",
                { staticClass: "privacy" },
                [
                  _c(
                    "checkbox-group",
                    {
                      on: {
                        change: function($event) {
                          _vm.isSendEmail = true
                        }
                      }
                    },
                    [
                      _c("checkbox", {
                        attrs: {
                          checked: _vm.isSendEmail,
                          value: _vm.isSendEmail
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("text", [_vm._v("是，我想接收海宝发送的电子邮件。")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "view",
                { staticClass: "privacy" },
                [
                  _c(
                    "checkbox-group",
                    {
                      on: {
                        change: function($event) {
                          _vm.isSendEmail = false
                        }
                      }
                    },
                    [
                      _c("checkbox", {
                        attrs: {
                          checked: !_vm.isSendEmail,
                          value: !_vm.isSendEmail
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("text", [_vm._v("否，我不想接收海宝发送的电子邮件。")])
                ],
                1
              ),
              _vm._v(" "),
              _c("view", { staticClass: "submit", on: { tap: _vm.submit } }, [
                _vm._v("提交")
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c("download-leads", { attrs: { tp: "420" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/show/details.vue":
/*!************************************!*\
  !*** ./src/pages/show/details.vue ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.8@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./details.vue */ "./node_modules/_@tarojs_taro-loader@3.0.8@@tarojs/taro-loader/lib/raw.js!./src/pages/show/details.vue");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom","usingComponents":{"txv-video":"plugin://tencentvideo/video"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_0_8_tarojs_taro_loader_lib_raw_js_details_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/show/details', {}, config || {}))



/***/ }),

/***/ "./src/pages/show/details.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/show/details.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/show/details.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************!*\
  !*** ./src/pages/show/details.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/show/details.vue?vue&type=template&id=5da413b4&":
/*!*******************************************************************!*\
  !*** ./src/pages/show/details.vue?vue&type=template&id=5da413b4& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./details.vue?vue&type=template&id=5da413b4& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/pages/show/details.vue?vue&type=template&id=5da413b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5da413b4___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/show/details.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=details.js.map