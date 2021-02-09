export default {
  pages: [
    'pages/index/index',
    'pages/webview/index',
    'pages/consult/index',
    'pages/server/index',
    'pages/server/list',
    'pages/server/details',
    'pages/server/video',
    'pages/pdf/index',
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
      }
  }
}
