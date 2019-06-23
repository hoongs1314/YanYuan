// pages/order/orderItem/orderItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    src: null,
    name: null,
    text: null,
    mregion_1:null,
    region_1:{},
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
      mregion_1: JSON.stringify(options.region_1).split("，"),
    })
    for (let i = 0; i < this.data.mregion_1.length ; i++){
      var dish = "region_1[" + i + "].dishName"
      this.setData({
        [dish]: this.data.mregion_1[i]
      })
    }
    console.log(this.data)
  },
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
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