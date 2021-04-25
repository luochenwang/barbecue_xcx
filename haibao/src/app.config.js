export default {
  pages: [
    'pages/index/index',
    'pages/webview/index',
    'pages/consult/index',
    'pages/server/index',
    'pages/server/list',
    'pages/server/details',
    'pages/server/video',
    'pages/video/index',
    'pages/pdf/index',
    'pages/show/details',
    'pages/show/sublist',
    'pages/show/list',
    'pages/show/table',
    'pages/application/details',
    'pages/application/list',
    'pages/application/index',
    'pages/search/result',
    'pages/contact/index',
    'pages/course/center',
    'pages/course/list',
    'pages/course/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  "plugins": {
      "ykfchat": {
        "version": "2.0.26",
        "provider": "wx1fdc8c9f3a3a05e4"
      },
      "tencentvideo": {
        "version": "1.3.18",
        "provider": "wxa75efa648b60994b"
      }
  }
}
