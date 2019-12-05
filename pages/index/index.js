//index.js
Page({
  data: {
    inputTitle: '',
  },
  //事件处理函数
  handleInputChange(e) {
    this.setData({
      inputTitle: e.detail.value
    })
  },
  handleViewEg: function() {
    wx.navigateTo({
      url: '../article/article'
    })
  },
  handleGo: function() {
    if (this.data.inputTitle) {
      wx.navigateTo({
        url: '../article/article'
      })
    } else {
      wx.showToast({
        title: '请输入文章主题',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onLoad: function () {
  },
  // 分享页面
  onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: false
    })
  },
})
