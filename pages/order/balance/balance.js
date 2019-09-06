// pages/order/balance/balance.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[],
    totalPrice:0,
    itemNum:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
    this.setData({
      order: wx.getStorageSync('order'),
      totalPrice: wx.getStorageSync('total_price'),
      itemNum: wx.getStorageSync('itemNum'),
    })
  },

  toSubmitOrder: function () {
    var that = this;
    that.setData({
      customer: {
        userName: app.userData.userinfo.name,
        userSex: app.userData.userinfo.sex,
        userRoom: app.userData.userinfo.room,
        userPhone: app.userData.userinfo.phone,
        order:this.data.order,
        itemNum:this.data.itemNum,
        totalPrice: this.data.totalPrice,
      }
    })
    wx.showModal({
      title: '订单确认',
      content: '确认提交订单吗？',
      confirmText: '确定',
      cancelText: '我再想想',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://49.232.44.19:8080/weChat/insertCustomer.order',
            method: 'post',
            data: that.data.customer,
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log("提交成功");
            },
            fail: function (err) {
              console.log("传输失败");
            }
          })
          console.log("确定");
          console.log(that.data.customer);
          wx.showToast({
            title: '订单已提交',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateBack({
                  url: "../mine"
                })
              }, 2000)
            }
          })
        } else {
          console.log("我再想想");
        }
      }
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