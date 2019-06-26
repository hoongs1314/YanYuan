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
    region: {},
    order: [],
    total_price: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      id: options.id,
      src: options.src,
      name: options.name,
      text: options.text,
      region: JSON.parse(options.toItem),
      // mregion_1: JSON.stringify(options.region_1).replace(/\"/g,"").split("，"),
      // region_1_images: options.region_1_images.replace('[', '').replace(']', '').replace(/\"/g,"").split(","),
    })
    console.log(this.data.region)
    for (let i = 0; i < this.data.region.length; i++) {
      // console.log(this.data.region[i].food_name)
      var dishIndex = "region[" + i + "].dishIndex"
      var dishNum = "region[" + i + "].dishNum"
      this.setData({
        [dishIndex]: i,
        [dishNum]: 0,
      })
    }
  },
  addToCart(e) {
    var addName = this.data.region[idx].dishNum
    // if(this.data.order.name.)
    var idx = e.currentTarget.dataset.item.dishIndex;
    var mnum = this.data.region[idx].dishNum
    var dishNum = "region[" + idx + "].dishNum"
    mnum = mnum + 1;
    var selectorder = this.data.order,
    var nowprice = this.data.region[idx].food_price //当前所选商品单价
    var total_price = this.data.total_price //购物车总价
    total_price = nowprice + total_price
    this.setData({
      [dishNum]: mnum,
      total_price: total_price,
    })
      app.userData.shopCar = {
        merchants: this.data.name,
        name: this.data.region[idx].food_name,
        image: this.data.region[idx].food_image,
        price: this.data.region[idx].food_price,
        num: mnum,
    }
    selectorder.push(app.userData.shopCar);
    app.userData.shopCar = this.data.order
    this.setData({order:selectorder})
    console.log(this.data.region);
    console.log(this.data.order);
  },

  openCar: function (e) {
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
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  // 关闭购物车
  closeHide: function (e) {
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