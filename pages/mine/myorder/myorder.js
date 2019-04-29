// pages/mine/myorder/myorder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food:[{
      id:"1",
      name: "黄焖鸡",
      price: "32元",
      num: "1份",
    },{
      id:"2",
      name:"红烧狮子头",
      price:"50元",
      num:"3份"
    },{
      id:"3",
      name:"巧克力冰淇淋",
      price:"12元",
      num:"1份"
    }],
      userName:null,
      userSex:null,
      userRoom:null,
      userPhone:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userName: app.userData.userinfo.name,
      userSex: app.userData.userinfo.sex,
      userRoom: app.userData.userinfo.room,
      userPhone: app.userData.userinfo.phone,
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

  }
})