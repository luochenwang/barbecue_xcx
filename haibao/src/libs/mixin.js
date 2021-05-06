import { ajax } from "./ajax";

export default {
  data() {
    return {
      containerTop: 0
    }
  },
  beforeDestroy(){
    this.$store.commit('set_liveLeadsModel');
    this.$store.commit('set_downloadLeadsModel');
    this.$store.commit('set_consultLeadsModel');
  },
  created() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    this.containerTop = menuButtonObject.height + menuButtonObject.top + 10;
  },
  methods: {
    getOpenId(callback) {
        let data = {
          openid: this.openid
        }

        callback(data)
    },
    session(callback) {
        let data = {
          sessionFrom: this.userInfo
        }
        callback(data)
    },
    viewVideo(item) {
      this.viewVideoSrc = item.video_filename;
    },
    toViewPdf(item, tp = 100) {
      wx.navigateTo({ url: '/pages/pdf/index?src=' + item.pdf_filename + '&title=' + item.title+'&share_picture='+item.pdf_share_picture });

      ajax({
        url: 'xcx_request.php',
        data: {
          act: 'set_File_History',
          act2: 'read',
          tp: this.$store.state.category,
          tp_value: item.class_id || item.tech_detail_id || item.product_id,
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
      console.log(item);
      if(item.appointment_isform == 1 && this.$store.state.category == 310 && item.category_id==2){
        this.$store.commit('set_liveLeadsModel',true);
        item.tp = tp;
        this.$store.commit('set_leadsItem',item);
      }else{
        wx.navigateTo({ url: '/pages/server/video?title=' + item.title + '&video_filename=' + item.video_filename + '&video_picture=' + item.video_picture + '&share_img=' + item.video_share_picture + '&id=' + (item.class_id || item.tech_detail_id) });
      }
    },
    downloadPdf(item, tp = 100) {
      console.log(item);
      this.$store.commit('set_lastTp',2);
      if(item.pdf_isform > 0){
        wx.showToast({
            title: '资料已发送到您的邮箱',
            icon: 'none',
            duration: 2000,
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
      }else{
        this.$store.commit('set_downloadLeadsModel',true);
        item.tp = tp;
        this.$store.commit('set_leadsItem',item);
      }
      // wx.showLoading({
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
    downloadVideo(item, tp = 100) {
      this.$store.commit('set_lastTp',2);
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
                title: '已保存到相册',
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
