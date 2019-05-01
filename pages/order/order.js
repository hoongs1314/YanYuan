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
      src: "/pages/images/food/4.jpg",
      name: "布袋馍",
      text: "大嘴布袋馍好吃不贵",
    }, {
      id: "002",
      src: "/pages/images/food/4.jpg",
      name: "黄焖鸡",
      text: "绝蜜香鸡，等你来寻",
    }, {
      id: "003",
      src: "/pages/images/food/4.jpg",
      name: "冰淇淋",
      text: "不长胖的冰淇淋",
    }, {
      id: "004",
      src: "/pages/images/food/4.jpg",
      name: "红烧狮子头",
      text: "你看这个“头”他又大又圆",

    }, {
      id: "005",
      src: "/pages/images/food/4.jpg",
      name: "鱼香肉丝",
      text: "鱼香肉丝真的有鱼",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  itemClick: function(item) {
    var id = item.currentTarget.dataset.id;
    var src = item.currentTarget.dataset.src;
    var name = item.currentTarget.dataset.name;
    var text = item.currentTarget.dataset.text;
    wx.navigateTo({
      url: 'orderItem/orderItem?id=' + id + "&src=" + src + "&name=" + name + "&text=" + text
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