export default {
  methods: {
    viewVideo(item){
        this.viewVideoSrc = item.video_filename;
    },
    toViewPdf(item){
      wx.navigateTo({url:'/pages/webview/index?src='+item.pdf_filename+'&title='+item.title});
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
    toViewVideo(item){
        wx.navigateTo({url:'/pages/server/video?title='+item.title+'&video_filename='+item.video_filename+'&video_picture='+item.video_picture});
    },
    downloadPdf(item){
        wx.showLoading({
            title: '加载中...',
        })
        wx.downloadFile({
         url: item.pdf_filename,
         success: res => {
           let filePath = res.filePath;
           wx.saveVideoToPhotosAlbum({
             filePath,
             success: file => {
               wx.showModal({
                 title: '提示',
                 content: '下载成功~',
               })
               let fileMgr = wx.getFileSystemManager();
               fileMgr.unlink({
                 filePath: item.pdf_filename,
                 success: function(r) {
                    
                 },
               })
               wx.hideLoading();
             },
             fail: err => {
               console.log(err)
               wx.showModal({
                 title: '提示',
                 content: '获取权限失败，将无法保存到相册哦~',
               })
               wx.hideLoading();
             }
           })
         }
       })
    },
    downloadVideo(item){
        wx.showLoading({
            title: '加载中...',
        })
        wx.downloadFile({
         url: item.video_filename,
         success: res => {
           let filePath = res.filePath;
           wx.saveVideoToPhotosAlbum({
             filePath,
             success: file => {
               wx.showModal({
                 title: '提示',
                 content: '下载成功~',
               })
               let fileMgr = wx.getFileSystemManager();
               fileMgr.unlink({
                 filePath: item.video_filename,
                 success: function(r) {
                    
                 },
               })
               wx.hideLoading();
             },
             fail: err => {
               console.log(err)
               wx.showModal({
                 title: '提示',
                 content: '获取权限失败，将无法保存到相册哦~',
               })
               wx.hideLoading();
             }
           })
         }
       })
    }
  }
}
