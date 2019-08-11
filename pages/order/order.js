// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
        src: "../images/food/1.jpg"
      },
      {
        src: "../images/food/2.jpg"
      },
      {
        src: "../images/food/3.jpg"
      },
      {
        src: "../images/food/4.jpg"
      }
    ],
    merchants: {
      menu_id: null,
      phone: null,
      publicity_image: null,
      recommend: null,
      merchant_id: null,
      merchant_name: null,
      merchant_database: null,
    },
    merchant_id:{
      "merchant_id":null,
    },
    toItem:[],
    loadHidden:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.showLoading({
      title: '努力加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    wx.request({
      url: 'http://49.232.44.19:8080/weChat/findMenu.order',
      method: 'post',
      data: that.data.merchants,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        wx.hideLoading();
        that.setData({
          merchants: res.data,
        })
        console.log(that.data.merchants);
      },
      fail: function(err) {
        console.log("传输失败");
      }
    })
  },
  itemClick: function(item) {
    var that = this;
    var id = item.currentTarget.dataset.id;
    var src = item.currentTarget.dataset.src;
    var name = item.currentTarget.dataset.name;
    var text = item.currentTarget.dataset.text;
    var mmerchant_id = item.currentTarget.dataset.item.merchant_id;
    this.data.merchant_id.merchant_id = mmerchant_id
    console.log(this.data.merchant_id)
    wx.request({
      url: 'http://49.232.44.19:8080/weChat/findMerchant.order',
      method: 'post',
      data: this.data.merchant_id,
      header: {
        'content-type': 'application/json'
        // 'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res)
        var toItem = JSON.stringify(res.data);
        that.setData({
          toItem: toItem
        }),
        wx.navigateTo({
          url: 'orderItem/orderItem?id=' + id + "&src=" + src + "&name=" + name + "&text=" + text + "&toItem=" + toItem
        })
      },
      fail: function(err) {
        console.log("传输失败");
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

  },
})