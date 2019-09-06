// pages/order/orderItem/orderItem.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    src: null,
    name: null,
    text: null,
    menu_class:[],
    region: {},
    order: [],
    totalPrice: 0,
    itemNum: 0,
    time: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.showLoading({
      title: '努力加载中',
    })
    that.setData({
      id: options.id,
      src: options.src,
      name: options.name,
      text: options.text,
      region: JSON.parse(options.toItem),
    })
    console.log(that.data.region)
    var menu_class = that.data.menu_class
    for (let i = 0; i < that.data.region.length; i++) {
      var dishIndex = "region[" + i + "].dishIndex"
      var dishNum = "region[" + i + "].dishNum"
      menu_class.push(that.data.region[i].menu_class)
      that.setData({
        [dishIndex]: i,
        [dishNum]: 0,
        menu_class: menu_class
      })
    }
    wx.hideLoading();
  },
  //向购物车中添加商品
  addToCart(e) {
    var that = this
    var idx = e.currentTarget.dataset.item.dishIndex;
    var addItem = {
      merchants: that.data.name,
      name: that.data.region[idx].food_name,
      image: that.data.region[idx].food_image,
      price: that.data.region[idx].food_price,
      num: 1,
    }
    var totalPrice = that.data.totalPrice + that.data.region[idx].food_price;
    var itemNum = that.data.itemNum + 1
    var selectorder = that.data.order
    selectorder.push(addItem);
    that.setData({
      order: selectorder,
      totalPrice: totalPrice,
      itemNum: itemNum
    })
    console.log("totalPrice   " + totalPrice)
    console.log("itemNum   " + that.data.itemNum)
    // app.userData.shopCar = addItem
    console.log(that.data.order);
  },
  //清空购物车
  clearCartList: function() {
    this.setData({
      order: [],
      totalPrice: 0,
      itemNum:0
    });
  },
  //打开购物车
  openCar: function(e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 300,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(300).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      boolHidden: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  // 关闭购物车
  closeHide: function(e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(300).step()
    that.setData({
      animationData: animation.export()
    });
  },
  goBalance: function () {
    console.log(this.data.totalPrice)
    if (this.data.totalPrice != 0) {
      wx.setStorageSync('order', this.data.order);
      wx.setStorageSync('total_price', this.data.totalPrice);
      wx.setStorageSync('itemNum', this.data.itemNum);
      console.log("itemNum");
      console.log(this.data.itemNum);
      wx.navigateTo({
        url: '../balance/balance'
      })
    }
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