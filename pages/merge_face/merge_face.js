const app = getApp();

Page({

  data: {
    template: null,
    actor: null,
    mergeFilePath: null,
    mergedImage: null
  },

  onLoad: function (options) {
    app.ptu.getTemplate(options.id).then(template => {
      this.setData({template})
    })
  },

  handleImageChoose: function() {
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success: (res) => {
        wx.showLoading({
          title: '合成中...',
        })
        let tempFilePath = res.tempFilePaths[0];
        this.setData({mergeFilePath: tempFilePath});
        app.ptu.detectFace(tempFilePath).then(actor => {
           this.setData({actor});
           this.handleMerge();
        });
      }
    })
  },

  handleMerge: function() {
    app.ptu.mergeFace(this.data.template.id, this.data.actor.id).then(merging => {
      wx.hideLoading()
      this.setData({mergedImage: merging.image_url});
    })
  },

  handleSaveImage: function() {
    app.wx.getImageInfo(this.data.mergedImage).then(res => {
      app.wx.saveImageToPhotosAlbum(res.path)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
