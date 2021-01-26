import { ajax } from "./ajax";

export default {
  data() {
    return {
      containerTop: 0
    }
  },
  created() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    this.containerTop = menuButtonObject.height + menuButtonObject.top + 10;
  },
  methods: {
    viewVideo(item) {
      this.viewVideoSrc = item.video_filename;
    },
    toViewPdf(item, tp = 100) {
      wx.navigateTo({ url: '/pages/webview/index?src=' + item.pdf_filename + '&title=' + item.title });

      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'read',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'pdf',
          watch_time: 0,
        },
      });
      // wx.downloadFile({
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
    toViewVideo(item, tp = 100) {
      wx.navigateTo({ url: '/pages/server/video?title=' + item.title + '&video_filename=' + item.video_filename + '&video_picture=' + item.video_picture + '&id=' + (item.class_id || item.tech_detail_id) });
    },
    downloadPdf(item, tp = 100) {
      wx.showLoading({
        title: '加载中...',
      })
      const fileExtName = ".pdf";
      const randfile = new Date().getTime() + fileExtName;
      const newPath = `${wx.env.USER_DATA_PATH}/${randfile}`;
      wx.downloadFile({
        url: item.pdf_filename,
        filePath: newPath,
        success: res => {
          let filePath = res.tempFilePath;
          wx.openDocument({
            filePath: newPath,
            showMenu: true,
            fileType: 'pdf',
            success: function(res) {}
          })
          wx.hideLoading();
        }
      });


      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'download',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'pdf',
          watch_time: 0,
        },
      });
    },
    downloadVideo(item, tp = 100) {
      wx.showLoading({
        title: '加载中...',
      })
      wx.downloadFile({
        url: item.video_filename,
        success: res => {
          let filePath = res.tempFilePath;
          console.log(res);
          wx.saveVideoToPhotosAlbum({
            filePath: filePath,
            success: file => {
              wx.showToast({
                title: '下载成功~',
                icon: 'none',
                duration: 2000,
              })
              wx.hideLoading();
            },
            fail: err => {
              console.log(err)
              wx.showToast({
                title: '获取权限失败，将无法保存到相册哦~',
                icon: 'none',
                duration: 2000,
              })
              wx.hideLoading();
            }
          })
        }
      });


      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'download',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id,
          file_tp: 'video',
          watch_time: 0,
        },
      });
    }
  }
}
