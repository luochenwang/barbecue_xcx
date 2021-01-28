(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/videVideo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sidebar',
  props: ['viewVideoSrc'],
  mounted: function mounted() {},
  methods: {
    close: function close() {
      this.$emit('update:viewVideoSrc', '');
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/videVideo.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=template&id=0e128f07&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/videVideo.vue?vue&type=template&id=0e128f07& ***!
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
  return _vm.viewVideoSrc
    ? _c("view", { staticClass: "full-screen-float" }, [
        _c("video", {
          attrs: { src: _vm.viewVideoSrc, autoplay: true, controls: true }
        }),
        _vm._v(" "),
        _c("image", {
          staticClass: "close",
          attrs: {
            src: "https://campaign5.method-ad.cn/hypertherm/img/icon_close.png"
          },
          on: { tap: _vm.close }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/videVideo.vue":
/*!**************************************!*\
  !*** ./src/components/videVideo.vue ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videVideo.vue?vue&type=template&id=0e128f07& */ "./src/components/videVideo.vue?vue&type=template&id=0e128f07&");
/* harmony import */ var _videVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videVideo.vue?vue&type=script&lang=js& */ "./src/components/videVideo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./videVideo.vue?vue&type=style&index=0&lang=scss& */ "./src/components/videVideo.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _videVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "f6adca88"
  
)

component.options.__file = "src/components/videVideo.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/videVideo.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/videVideo.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./videVideo.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/videVideo.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/components/videVideo.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--1-oneOf-0-3!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./videVideo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_postcss_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_1_oneOf_0_3_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/videVideo.vue?vue&type=template&id=0e128f07&":
/*!*********************************************************************!*\
  !*** ./src/components/videVideo.vue?vue&type=template&id=0e128f07& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./videVideo.vue?vue&type=template&id=0e128f07& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/videVideo.vue?vue&type=template&id=0e128f07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_videVideo_vue_vue_type_template_id_0e128f07___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/libs/ajax.js":
/*!**************************!*\
  !*** ./src/libs/ajax.js ***!
  \**************************/
/*! exports provided: getOpenid, ajax */
/*! exports used: ajax, getOpenid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOpenid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var _Volumes_D_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.8@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalData */ "./src/libs/globalData.js");



var globalData = Object(_globalData__WEBPACK_IMPORTED_MODULE_2__[/* createCache */ "a"])(); // c.set("test", 100);
// console.log(c.get("test"));

var DOMAIN = 'https://campaign5.method-ad.cn/hypertherm/';
function getOpenid() {
  return new Promise(function (resolve, reject) {
    var openid = globalData.get("openid");

    if (openid) {
      resolve(openid);
    } else {
      wx.login({
        success: function success(res) {
          if (res.code) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
              url: DOMAIN + 'xcx_request.php?rndv=' + Math.random() + '&act=getOpenid',
              data: {
                code: res.code
              },
              method: 'post',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              success: function success(res) {
                if (res.data.status == 1) {
                  globalData.set('openid', res.data.openid);
                  resolve(res.data.openid);
                }
              },
              fail: function fail(e) {
                reject(e);
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }
  });
}
function ajax() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    getOpenid().then(function (openid) {
      var obj = Object.assign({}, options.data || {}, {
        openid: openid
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: DOMAIN + options.url + '?rndv=' + Math.random() + '&act=' + obj.act,
        data: Object(_Volumes_D_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Volumes_D_site_barbecue_xcx_haibao_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, obj), {}, {
          act: options.data.act2 || ''
        }),
        method: 'post',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function success(res) {
          resolve(res.data);
        },
        fail: function fail(e) {
          reject(e);
        }
      });
    });
  });
}
;

/***/ }),

/***/ "./src/libs/globalData.js":
/*!********************************!*\
  !*** ./src/libs/globalData.js ***!
  \********************************/
/*! exports provided: createCache */
/*! exports used: createCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCache; });
function createCache() {
  var globalData = {};
  return {
    set: function set(key, val) {
      globalData[key] = val;
      wx.setStorageSync(key, val);
    },
    get: function get(key) {
      return wx.getStorageSync(key) || '';
    }
  };
}

/***/ }),

/***/ "./src/libs/mixin.js":
/*!***************************!*\
  !*** ./src/libs/mixin.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/libs/ajax.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      containerTop: 0
    };
  },
  created: function created() {
    var menuButtonObject = wx.getMenuButtonBoundingClientRect();
    this.containerTop = menuButtonObject.height + menuButtonObject.top + 10;
  },
  methods: {
    viewVideo: function viewVideo(item) {
      this.viewVideoSrc = item.video_filename;
    },
    toViewPdf: function toViewPdf(item) {
      var tp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      wx.navigateTo({
        url: '/pages/webview/index?src=' + item.pdf_filename + '&title=' + item.title + '&share_picture=' + item.pdf_share_picture
      });
      Object(_ajax__WEBPACK_IMPORTED_MODULE_0__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'read',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'pdf',
          watch_time: 0
        }
      }); // wx.downloadFile({
      //   // 示例 url，并非真实存在
      //   url:item.pdf_filename,
      //   success: function (res) {
      //     const filePath = res.tempFilePath
      //     wx.openDocument({
      //       filePath: filePath,
      //       success: function (res) {
      //         console.log('打开文档成功')
      //       }
      //     })
      //   }
      // })
    },
    toViewVideo: function toViewVideo(item) {
      var tp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      wx.navigateTo({
        url: '/pages/server/video?title=' + item.title + '&video_filename=' + item.video_filename + '&video_picture=' + item.video_picture + '&share_img=' + item.video_share_picture + '&id=' + (item.class_id || item.tech_detail_id)
      });
    },
    downloadPdf: function downloadPdf(item) {
      var tp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      wx.showLoading({
        title: '加载中...'
      });
      var fileExtName = ".pdf";
      var randfile = new Date().getTime() + fileExtName;
      var newPath = "".concat(wx.env.USER_DATA_PATH, "/").concat(randfile);
      wx.downloadFile({
        url: item.pdf_filename,
        filePath: newPath,
        success: function success(res) {
          var filePath = res.tempFilePath;
          wx.openDocument({
            filePath: newPath,
            showMenu: true,
            fileType: 'pdf',
            success: function success(res) {}
          });
          wx.hideLoading();
        }
      });
      Object(_ajax__WEBPACK_IMPORTED_MODULE_0__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'download',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'pdf',
          watch_time: 0
        }
      });
    },
    downloadVideo: function downloadVideo(item) {
      var tp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      wx.showLoading({
        title: '加载中...'
      });
      wx.downloadFile({
        url: item.video_filename,
        success: function success(res) {
          var filePath = res.tempFilePath;
          console.log(res);
          wx.saveVideoToPhotosAlbum({
            filePath: filePath,
            success: function success(file) {
              wx.showToast({
                title: '已保存到相册',
                icon: 'none',
                duration: 2000
              });
              wx.hideLoading();
            },
            fail: function fail(err) {
              console.log(err);
              wx.showToast({
                title: '获取权限失败，将无法保存到相册哦~',
                icon: 'none',
                duration: 2000
              });
              wx.hideLoading();
            }
          });
        }
      });
      Object(_ajax__WEBPACK_IMPORTED_MODULE_0__[/* ajax */ "a"])({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'download',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'video',
          watch_time: 0
        }
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=common.js.map