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
    price: 1,
    mregion_1:null,
    mregion_2:null,
    region_1:{},
    region_1_images:{},
    region_2:{},
    region_2_images:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id,
      src: options.src,
      name: options.name,
      text: options.text,
      mregion_1: JSON.stringify(options.region_1).replace(/\"/g,"").split("，"),
      region_1_images: options.region_1_images.replace('[', '').replace(']', '').replace(/\"/g,"").split(","),
    })
    console.log(options);
    console.log(this.data.region_1_images)
    for (let i = 0; i < this.data.mregion_1.length ; i++){
      var dishName = "region_1[" + i + "].dishName"
      var dishIndex = "region_1[" + i + "].dishIndex"
      var dishNum = "region_1[" + i + "].dishNum"
      var dishImg = "region_1[" + i + "].dishImg"
      this.setData({
        [dishName]: this.data.mregion_1[i],
        [dishIndex]: i,
        [dishNum]:0,
        [dishImg]: this.data.region_1_images[i]
      })
    }
  },
  addToCart(e) {
    var idx = e.currentTarget.dataset.item.dishIndex;
    var mnum = this.data.region_1[idx].dishNum
    var dishNum = "region_1[" + idx + "].dishNum"
    mnum = mnum+1;
    this.setData({
      [dishNum]:mnum
    })
    // app.userdata.shopCar
    app.userData.shopCar = {
      merchants:this.data.name,
      name: this.data.region_1[idx].dishName,
      price :this.data.price,
      num: mnum,
    }
    console.log(app.userData.shopCar);
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