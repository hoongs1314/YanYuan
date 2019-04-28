// pages/mine/mine.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    sex:null,
    room:null,
    phone:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if (app.userData.userinfo == null){
      wx.redirectTo({
        url: '../mine/addperson/addperson',
      })
    }else{
      this.setData({
        name:app.userData.userinfo.name,
        sex:app.userData.userinfo.sex,
        room:app.userData.userinfo.room,
        phone:app.userData.userinfo.phone,
        })
        if(this.data.sex = "男"){
          this.data.selectImg = this.setData.imageBoy
        }else{
          this.data.selectImg = this.setData.imageGirl
        }
    }
  },
  toMyOrder:function(){
    wx.showToast({
      title: '我的订单',
    }),
     wx.navigateTo({
      url: '../mine/myorder/myorder'
    })
  },

  reLaunch: function () {
    wx.showToast({
      title: 'xiugai',
    })
    wx.navigateTo({
      url: '../mine/addperson/addperson'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})