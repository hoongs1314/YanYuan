// pages/mine/addperson.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    sex: null,
    room: null,
    phone: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  toaSaveMsg: function() {
    app.userData.userinfo = {
      name: this.data.name,
      sex: this.data.sex,
      room: this.data.room,
      phone: this.data.phone
    }
    wx.showToast({
        title: '保存成功'
      }),
      wx.switchTab({
        url: '../mine',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  nameInput: function(event) {
    this.setData({
      name: event.detail.value
    })
  },
  roomInput: function(event) {
    this.setData({
      room: event.detail.value
    })
  },
  phoneInput: function(event) {
    this.setData({
      phone: event.detail.value
    })
  },
  sexInput: function(event) {
    this.setData({
      sex: event.detail.value
    })
  }
})