var mtjwxsdk = (function (e) {
  'use strict';
  function r() {
    return 'undefined' != typeof crypto && crypto.getRandomValues
      ? crypto.getRandomValues(new Uint32Array(1))[0]
      : Math.floor(4294967295 * Math.random());
  }
  function i(e, t) {
    return '[object ' + t + ']' === {}.toString.call(e);
  }
  function o(n) {
    return (
      (i(n, 'Object') || i(n, 'Array')) &&
        Object.keys(n).forEach(function (e) {
          var t = n[e];
          i(t, 'Object') || i(t, 'Array') ? (n[e] = o(t)) : (n[e] = '' + t);
        }),
      n
    );
  }
  function a(e) {
    return i(e, 'String') && /^\d{11}$/.test(e);
  }
  function c(e) {
    return i(e, 'String') && 28 === e.length;
  }
  function u(e) {
    return new Promise(function (t, n) {
      return (
        (e.data = e.data || {}),
        A.blacklist &&
        ((-1 < A.blacklist.indexOf('all') && e.data.et) ||
          (-1 < A.blacklist.indexOf('behavior') && 'behavior' === e.data.et))
          ? t()
          : ((e.data.v = S),
            (e.data.rqc = ++U),
            (function (e) {
              return JSON.stringify(e).length <= 204800;
            })(e.data)
              ? ((e.success = function (e) {
                  return t(e);
                }),
                (e.fail = function (e) {
                  return n(e);
                }),
                void (function (t) {
                  if (!1 !== A.trackStatus) {
                    var e = t.data.et ? { mtj_ii: t.data.uuid || '', mtj_et: t.data.et, mtj_en: t.data.en } : {};
                    b.request({
                      url: t.url,
                      data: t.data,
                      header: Object.assign({ 'content-type': 'application/json' }, e, t.header),
                      method: t.method || 'POST',
                      dataType: t.dataType || 'json',
                      success: function (e) {
                        t.success && t.success(e);
                      },
                      fail: function (e) {
                        t.fail && t.fail(e);
                      },
                    });
                  }
                })(e))
              : (U--, n(new Error('invalid data'))))
      );
    });
  }
  function s(e, t) {
    var n = i(t, 'Object') ? JSON.stringify(t) : '' + t;
    u({ url: w, dataType: 'string', data: Object.assign({}, q, { et: 'error', en: e, ep: { ex: n }, rid: r() }) });
  }
  function f(e) {
    (e.rid = r()), (e.aso = e.aso || {});
    var t = { url: w, dataType: 'string', data: Object.assign({}, q, e) };
    u(t),
      (M.circleToken || M.circleByThreeFingers) &&
        (('page' === e.et && 'show' === e.en) || ('behavior' === e.et && 'tap' === e.en)) &&
        ((t.url = 'https://hmma.baidu.com/mini.gif?circle=1'),
        (t.data.token = M.circleToken),
        u(t).catch(function (e) {
          return console.error(e);
        }));
  }
  function l(e) {
    try {
      return b.getStorageSync(e);
    } catch (e) {
      s('getStorageSync', e);
    }
  }
  function h(e, t) {
    try {
      b.setStorageSync(e, t);
    } catch (e) {
      s('setStorageSync', e);
    }
  }
  function t() {
    return Promise.resolve().then(function () {
      var e = l(P);
      return (
        (i(e, 'String') && 32 === e.length) ||
          ((e = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function (e) {
            return (
              e ^
              (('undefined' != typeof crypto && crypto.getRandomValues
                ? crypto.getRandomValues(new Uint8Array(1))[0]
                : Math.floor(255 * Math.random())) &
                (15 >> (e / 4)))
            ).toString(16);
          })),
          h(P, e)),
        e
      );
    });
  }
  function p() {
    return (
      k ||
      ((q.sid = r()),
      (q.rqc = 0),
      (k = Promise.all([
        t(),
        new Promise(function (t) {
          b.getSystemInfo({
            success: function (e) {
              delete e.errMsg, t(e);
            },
            fail: function () {
              t({});
            },
          });
        }),
        new Promise(function (t) {
          b.getNetworkType({
            success: function (e) {
              delete e.errMsg, t(e);
            },
            fail: function () {
              t({});
            },
          });
        }),
        Promise.resolve().then(function () {
          var e = l(I),
            n = i(e, 'Object') ? e : {};
          return new Promise(function (t) {
            b.getSetting({
              success: function (e) {
                e.authSetting && e.authSetting['scope.userInfo']
                  ? b.getUserInfo({
                      success: function (e) {
                        delete e.userInfo.errMsg, t(Object.assign(n, e.userInfo));
                      },
                      fail: function () {
                        t(n);
                      },
                    })
                  : t(n);
              },
              fail: function () {
                t(n);
              },
            });
          });
        }),
        new Promise(function (t) {
          if (!A.getLocation) return t({});
          b.getLocation({
            type: 'wgs84',
            success: function (e) {
              delete e.errMsg, t(e);
            },
            fail: function () {
              t({});
            },
          });
        }),
        Promise.resolve().then(function () {
          var e = l(T);
          return i(e, 'Object') ? e : {};
        }),
      ]).then(function (e) {
        (q.uuid = e[0]),
          (N.system = o(e[1])),
          (N.network = o(e[2])),
          0 < Object.keys(e[3]).length && (N.user = o(e[3])),
          0 < Object.keys(e[4]).length && (N.location = o(e[4])),
          0 < Object.keys(e[5]).length && (N.userProperty = JSON.stringify(e[5])),
          'devtools' === N.system.platform &&
            A.latestVersion &&
            (function (e, t) {
              for (var n = e.split('.'), r = t.split('.'), o = 0; o < 3; o++) {
                var i = +n[o] || 0,
                  a = +r[o] || 0;
                if (a < i) return 1;
                if (i < a) return -1;
              }
              return 0;
            })(S, A.latestVersion) < 0 &&
            console.warn(
              '百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心 https://mtj.baidu.com/web/sdk/index 下载最新版本'
            );
      })))
    );
  }
  function n() {
    return (
      O ||
      (O = new Promise(function (t) {
        b.getClipboardData({
          success: function (e) {
            t(e.data);
          },
          fail: function () {
            t();
          },
        });
      }).then(function (e) {
        if (!A.disableCircling && 36 === e.length) {
          var t = e.match(/^mtj_(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/);
          return t
            ? ((M.circleToken = ''
                .concat(t[1], '-')
                .concat(t[2], '-')
                .concat(t[3], '-')
                .concat(t[4], '-')
                .concat(t[5])),
              (function (t) {
                return new Promise(function (e) {
                  b.setClipboardData({
                    data: t,
                    complete: function () {
                      e();
                    },
                  });
                });
              })(''))
            : void 0;
        }
      }))
    );
  }
  function d(t, e, n) {
    var r = e[t];
    e[t] = function (e) {
      if ((n.call(this, e, t), r)) return r.apply(this, arguments);
    };
  }
  function g(t) {
    _.app.forEach(function (e) {
      d(e, t, C[e]);
    }),
      (t.mtj = $),
      B(t);
  }
  function m(t) {
    _.page.forEach(function (e) {
      d(e, t, V[e]);
    }),
      _.share.forEach(function (e) {
        !(function (e, t, n) {
          var r = t[e];
          t[e] = function (e) {
            var t = r && r.apply(this, arguments);
            return n.call(this, e, t);
          };
        })(e, t, V[e]);
      }),
      Object.keys(t).forEach(function (e) {
        'function' == typeof t[e] && -1 === _.page.indexOf(e) && -1 === _.share.indexOf(e) && d(e, t, V.onAction);
      }),
      K(t);
  }
  function y(t) {
    return (
      _.page.forEach(function (e) {
        d(e, t.methods, V[e]);
      }),
      L(t)
    );
  }
  function v(t) {
    return (
      _.page.forEach(function (e) {
        d(e.replace('on', 'onPage'), t.methods, V[e]);
      }),
      F(t)
    );
  }
  function j() {
    var e;
    !(function (e) {
      b = e;
    })(wx);
    try {
      e = require('./mtj-wx-sdk.config');
    } catch (e) {
      return void console.error('请把mtj-wx-sdk.config.js文件拷贝到utils目录中');
    }
    e && e.appKey
      ? ((q.key = e.appKey),
        (A.getLocation = e.getLocation || !1),
        (A.disableCircling = e.disableCircling || !1),
        (A.trackStatus = !(!1 === l(x))),
        (function () {
          var t = l(E);
          if (t) {
            Object.keys(t).forEach(function (e) {
              A[e] = t[e];
            });
            var e = t.updateTimestamp || 0;
            if (+new Date() - e < 864e5) return Promise.resolve();
          }
          u({
            url: 'https://hmma.baidu.com/mini.conf',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            data: { type: 'wx', key: q.key },
          })
            .then(function (e) {
              if (e && e.data) {
                var t = e.data;
                Object.keys(t).forEach(function (e) {
                  A[e] = t[e];
                }),
                  (t.updateTimestamp = +new Date()),
                  h(E, t);
              } else s('remoteConfig', e);
            })
            .catch(function (e) {
              s('sendRequest', e);
            });
        })(),
        e.hasPlugin
          ? ((y.prototype.constructor = L), (module.exports = { App: g, Page: m, Behavior: y, Component: v }))
          : ((App = g), (Page = m)))
      : console.error('请设置mtj-wx-sdk.config.js文件中的appKey字段');
  }
  var b,
    k,
    O,
    S = '1.9.18',
    w = 'https://hmma.baidu.com/mini.gif',
    _ = {
      app: ['onShow', 'onHide', 'onError'],
      page: ['onShow', 'onHide'],
      share: ['onShareAppMessage'],
      behavior: ['tap'],
    },
    P = 'mtj_uuid',
    I = 'mtj_user',
    T = 'mtj_user_property',
    x = 'mtj_track_status',
    E = 'mtj_remote_config',
    A = {},
    q = { type: 1 },
    N = { aso: {} },
    M = {},
    U = 0,
    C = {
      onLaunch: function () {
        f({ et: 'app', en: 'launch' });
      },
      onShow: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
          n = (N.aso.query || []).filter(function (e) {
            return 0 === e.key.indexOf('mtj_');
          });
        return (
          (N.aso.scene = '' + (t.scene || '')),
          t.referrerInfo && t.referrerInfo.appId ? (N.aso.referrerInfo = t.referrerInfo) : delete N.aso.referrerInfo,
          (N.aso.path = t.path || ''),
          (N.aso.query = Object.keys(t.query || {}).map(function (e) {
            return { key: e, value: t.query[e] };
          })),
          0 < n.length &&
            !/(^|,)mtj_/.test(Object.keys(t.query || {}).join(',')) &&
            (N.aso.query = N.aso.query.concat(n)),
          p()
            .then(function () {
              return (function (e) {
                return new Promise(function (t) {
                  if (!e) return t();
                  b.getShareInfo({
                    shareTicket: e,
                    success: function (e) {
                      delete e.errMsg, t(e);
                    },
                    fail: function () {
                      t({});
                    },
                  });
                });
              })(t.shareTicket);
            })
            .then(function (e) {
              e ? (N.aso.shareInfo = e) : delete N.aso.shareInfo, f(Object.assign({ et: 'app', en: 'show' }, N));
            })
            .catch(function (e) {
              s('app.onShow', e);
            })
        );
      },
      onHide: function () {
        (O = null), f({ et: 'app', en: 'hide' });
      },
      onError: function (e) {
        var t = i(e, 'Object') ? JSON.stringify(o(e)) : '' + e;
        f({ et: 'app', en: 'error', ep: { ex: t } });
      },
    },
    J = -1,
    R = -1,
    D = 0,
    V = {
      onShow: function () {
        var e = getCurrentPages(),
          t = e[e.length - 1];
        return (
          (q.path = t.route),
          (q.query = Object.keys(t.options)
            .map(function (e) {
              return { key: e, value: t.options[e] };
            })
            .filter(function (e) {
              return 'mtj_qrid' !== e.key && 'mtj_lkid' !== e.key && 'mtj_shuuid' !== e.key;
            })),
          n()
            .then(p)
            .then(function () {
              f(Object.assign({ et: 'page', en: 'show' }, N));
            })
            .catch(function (e) {
              s('page.onShow', e);
            })
        );
      },
      onHide: function () {
        !(function (e, t) {
          f({ et: 'page', en: e, ep: t });
        })('hide');
      },
      onShareAppMessage: function (e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : {},
          r = { from: e.from, path: n.path };
        if (!r.path) {
          var o = q.query
            .map(function (e) {
              return e.key + '=' + e.value;
            })
            .join('&');
          r.path = q.path + (o ? '?' + o : '');
        }
        n.title && (r.title = '' + n.title),
          e.target && (r.target = JSON.stringify(e.target)),
          f(Object.assign({ et: 'share', en: 'action', ep: r }, N));
        var i =
            N.aso.query &&
            N.aso.query.filter(function (e) {
              return 'mtj_shuuid' === e.key;
            }),
          a = i && i[0] ? i[0].value.split('_') : [];
        q.uuid !== a[a.length - 1] && a.push(q.uuid);
        var c = a.slice(Math.max(0, a.length - 3)).join('_');
        return (
          (n.path = (function (e, t, n) {
            var r =
              0 <
              (e = e
                .replace(new RegExp(t + '=[^&]*', 'g'), '')
                .replace(/(\?|&)&/g, '$1')
                .replace(/(\?|&)$/g, '')).indexOf('?')
                ? '&'
                : '?';
            return e + r + t + '=' + encodeURIComponent(n);
          })(r.path, 'mtj_shuuid', c)),
          n
        );
      },
      onAction: function (e, t) {
        if (e && e.type && e.currentTarget)
          if ('tap' !== e.type) {
            if ('touchmove' === e.type && e.touches instanceof Array) {
              if (-1 !== J) return;
              if (3 === e.touches.length) {
                if (((D += 1), clearTimeout(R), 3 === D))
                  return (
                    (M.circleByThreeFingers = !0),
                    (M.circleToken = void 0),
                    void f(Object.assign({ et: 'page', en: 'show' }, N))
                  );
                J = setTimeout(function () {
                  (J = -1),
                    (R = setTimeout(function () {
                      D = 0;
                    }, 500));
                }, 1e3);
              }
            }
          } else {
            var n = [{ key: 'xpath', value: '#' + (e.currentTarget.id || t) }];
            f(Object.assign({ et: 'behavior', en: 'tap', ep: { data: n } }, N));
          }
      },
    },
    $ = {
      trackEvent: function (e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : {};
        if (
          !(function (e) {
            return i(e, 'String') && /^[a-z][a-z0-9_]{0,31}$/.test(e);
          })(e)
        )
          return Promise.reject(new Error('事件名称不合法'));
        var r = Object.keys(n)
          .filter(function (e) {
            return (
              (function (e) {
                return i(e, 'String') && /^[a-z0-9_]{1,32}$/.test(e);
              })(e) &&
              (function (e) {
                return i(e, 'String') || i(e, 'Number');
              })(n[e])
            );
          })
          .map(function (e) {
            return { key: '' + e, value: '' + n[e], type: i(n[e], 'String') ? 'string' : 'number' };
          });
        return p()
          .then(function () {
            f(Object.assign({ et: 'event', en: '' + e, ep: { data: r } }, N));
          })
          .catch(function (e) {
            s('trackEvent', e);
          });
      },
      setTrackStatus: function (e) {
        i(e, 'Boolean') && ((A.trackStatus = e), h(x, e));
      },
      setUserInfo: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
          n = t.tel,
          r = t.openId;
        return p()
          .then(function () {
            var e = l(I),
              t = i(e, 'Object') ? e : {};
            a(n) && (t.tel = N.user.tel = n.substr(n.length - 11)),
              c(r) && (t.openId = N.user.openId = r),
              (t.tel || t.openId) && h(I, t),
              i(n, 'Undefined') || a(n) || console.error('手机号 '.concat(n, ' 不合法')),
              i(r, 'Undefined') || c(r) || console.error('openid '.concat(r, ' 不合法'));
          })
          .catch(function (e) {
            s('setUserInfo', e);
          });
      },
      setUserId: function (o) {
        return Promise.resolve().then(function () {
          if (!(i(o, 'String') || (i(o, 'Number') && Number.isFinite(o))))
            return Promise.reject(new Error('userId只能是字符串或数字'));
          var e = '' + o,
            t = l(T),
            n = i(t, 'Object') ? t : {};
          if (!n.uid_ || n.uid_[0] !== e) {
            (n.uid_ = [e, '1']), h(T, n), (N.userProperty = JSON.stringify(n));
            var r = [{ key: 'uid', value: e }];
            return p()
              .then(function () {
                f(Object.assign({ et: 'api', en: 'setUserId', ep: { data: r } }, N));
              })
              .catch(function (e) {
                s('setUserId', e);
              });
          }
        });
      },
      setUserProperty: function (o) {
        return Promise.resolve().then(function () {
          var e = l(T),
            n = i(e, 'Object') ? e : {};
          if (i(o, 'Null'))
            Object.keys(n).forEach(function (e) {
              '_' !== e.charAt(0) && '_' !== e.charAt(e.length - 1) && delete n[e];
            });
          else if (!i(o, 'Object')) return Promise.reject(new Error('userProperty必须是对象'));
          var r = Object.keys(n).filter(function (e) {
            return '_' !== e.charAt(0) && '_' !== e.charAt(e.length - 1);
          }).length;
          Object.keys(o || {}).forEach(function (e) {
            var t = o[e];
            '' !== e &&
              '_' !== e.charAt(0) &&
              '_' !== e.charAt(e.length - 1) &&
              (i(t, 'Null')
                ? n[e] && (delete n[e], r--)
                : !(i(t, 'String') || (i(t, 'Number') && Number.isFinite(t))) ||
                  256 < e.length ||
                  256 < ('' + t).length ||
                  (!n[e] && 100 <= r) ||
                  (n[e] || r++, (n[e] = [t, '1'])));
          }),
            h(T, n),
            (N.userProperty = JSON.stringify(n));
        });
      },
    },
    B = App,
    K = Page,
    L = Behavior,
    F = Component;
  return j(), (e.init = j), e;
})({});
