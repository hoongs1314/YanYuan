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
    merchants: [{
      id: "001",
      src: "../images/food/4.jpg",
      name: "布袋馍",
      text: "111111111111"
    }, {
      id: "002",
      src: "../images/food/4.jpg",
      name: "黄焖鸡",
      text: "222222222222222"
    }, {
      id: "003",
      src: "../images/food/4.jpg",
      name: "冰淇淋",
      text: "3333333333333"
    }, {
      id: "004",
      src: "../images/food/4.jpg",
      name: "红烧狮子头",
      text: "9999999999999"
    }, {
      id: "005",
      src: "../images/food/4.jpg",
      name: "i窘急",
      text: "00000000000"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  itemClick: function(item) {
    console.log(item.currentTarget.dataset.id);
    console.log(item.currentTarget.dataset.name);
    console.log(item.currentTarget.dataset.src);
    console.log(item.currentTarget.dataset.text);
    this.setData({

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