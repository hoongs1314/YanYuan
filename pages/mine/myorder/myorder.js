// pages/mine/myorder/myorder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food: [{
      src: "../images/2.jpg",
      name: "黄焖鸡",
      price: "32元",
      num: "1份",
    }, {
        src: "../images/2.jpg",
      name: "红烧狮子头",
      price: "50元",
      num: "3份"
    }, {
        src: "../images/2.jpg",
      name: "巧克力冰淇淋",
      price: "12元",
      num: "1份"
      }, {
        src: "../images/2.jpg",
        name: "蜜雪冰城",
        price: "12元",
        num: "9份"
      }, {
        src: "../images/2.jpg",
        name: "百度音频",
        price: "44元",
        num: "1份"
      }],
    userName: null,
    userSex: null,
    userRoom: null,
    userPhone: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userName: app.userData.userinfo.name,
      userSex: app.userData.userinfo.sex,
      userRoom: app.userData.userinfo.room,
      userPhone: app.userData.userinfo.phone,
    })
  },
  toSubmitOrder:function(){
    wx.showModal({
      title: '订单确认',
      content: '确认提交订单吗？',
      confirmText:'确定',
      cancelText:'我再想想',
      success(res){
        if(res.confirm){
          console.log("确定");
          wx.showToast({
            title: '订单已提交',
          })
        }else{
          console.log("我再想想");
        }
      }
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

  }
})