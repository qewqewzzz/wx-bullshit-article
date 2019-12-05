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
      url: '../article/article?title=如何防止脱发'
    })
  },
  handleGo: function() {
    if (this.data.inputTitle) {
      wx.navigateTo({
        url: `../article/article?title=${this.data.inputTitle}`
      })
    } else {
      wx.showToast({
        title: '请输入文章主题',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 生命周期函数
  // 返回的时候清空输入框文本
  onShow: function() {
    this.setData({
      inputTitle: ''
    })
  },
  // 分享页面
  onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: false
    })
  },
})
