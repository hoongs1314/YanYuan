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
      merchant_name: null,
      phone: null,
      publicity_image: null,
      recommend: null,
      merchant_database:null,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'http://192.168.199.161:8080/weChat/findMenu.order',
      method: 'post',
      data: that.data.merchants,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
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
    var id = item.currentTarget.dataset.id;
    var src = item.currentTarget.dataset.src;
    var name = item.currentTarget.dataset.name;
    var text = item.currentTarget.dataset.text;
    var region_1 = item.currentTarget.dataset.region_1;
    var region_1_images = item.currentTarget.dataset.region_1_images;
     region_1_images = JSON.stringify(region_1_images)
    console.log(item.currentTarget.dataset);
    console.log(region_1_images)
    var region_2 = item.currentTarget.dataset.region_2;
    wx.navigateTo({
      url: 'orderItem/orderItem?id=' + id + "&src=" + src + "&name=" + name + "&text=" + text + "&region_1=" + region_1 + "&region_1_images=" + region_1_images
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