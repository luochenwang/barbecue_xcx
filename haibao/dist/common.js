(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

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
  beforeDestroy: function beforeDestroy() {
    this.$store.commit('set_liveLeadsModel');
    this.$store.commit('set_downloadLeadsModel');
    this.$store.commit('set_consultLeadsModel');
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
        url: '/pages/pdf/index?src=' + item.pdf_filename + '&title=' + item.title + '&share_picture=' + item.pdf_share_picture
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
      console.log(item);

      if (!item.appointment_isform > 0) {
        wx.navigateTo({
          url: '/pages/server/video?title=' + item.title + '&video_url=' + item.video_url + '&video_picture=' + item.video_picture + '&share_img=' + item.video_share_picture + '&id=' + (item.class_id || item.tech_detail_id)
        });
      } else {
        this.$store.commit('set_liveLeadsModel', true);
        item.tp = tp;
        this.$store.commit('set_leadsItem', item);
      }
    },
    downloadPdf: function downloadPdf(item) {
      var tp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      if (item.pdf_isform > 0) {
        wx.showToast({
          title: '资料已发送到您的邮箱',
          icon: 'none',
          duration: 2000
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
      } else {
        this.$store.commit('set_downloadLeadsModel', true);
        item.tp = tp;
        this.$store.commit('set_leadsItem', item);
      } // wx.showLoading({
      //   title: '加载中...',
      // })
      // const fileExtName = ".pdf";
      // const randfile = new Date().getTime() + fileExtName;
      // const newPath = `${wx.env.USER_DATA_PATH}/${randfile}`;
      // wx.downloadFile({
      //   url: item.pdf_filename,
      //   filePath: newPath,
      //   success: res => {
      //     let filePath = res.tempFilePath;
      //     wx.openDocument({
      //       filePath: newPath,
      //       showMenu: true,
      //       fileType: 'pdf',
      //       success: function(res) {}
      //     })
      //     wx.hideLoading();
      //   }
      // });

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