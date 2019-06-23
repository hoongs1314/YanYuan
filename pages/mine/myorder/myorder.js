// pages/mine/myorder/myorder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [],
    hasList: false,
    totalPrice: 0,
    selectAll: true,
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
    userPhone: null,
    customer:null,
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
  getTotalPrice() {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        total += carts[i].num * carts[i].price; // 所有价格加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index; // 获取data- 传进来的index
    let carts = this.data.carts; // 获取购物车列表
    const selected = carts[index].selected; // 获取当前商品的选中状态
    carts[index].selected = !selected; // 改变状态
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); // 重新获取总价
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus; // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus; // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice(); // 重新获取总价
  }, // 增加数量
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
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1); // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) { // 如果购物车为空
      this.setData({
        hasList: false // 修改标识为false，显示购物车为空页面
      });
    } else { // 如果不为空
      this.getTotalPrice(); // 重新计算总价格
    }
  },
  toSubmitOrder: function() {
    var that = this;
    that.setData({
      customer:{
        userName: app.userData.userinfo.name,
        userSex: app.userData.userinfo.sex,
        userRoom: app.userData.userinfo.room,
        userPhone: app.userData.userinfo.phone
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
            url: 'http://192.168.199.186:8080/weChat/insertCustomer.order',
            method:'post',
            data: that.data.customer,
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(that.data.customer);              
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
            success: function() {
              setTimeout(function() {
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      hasList: true, // 既然有数据了，那设为true吧
      carts: [{
          id: 1,
          title: '新鲜芹菜 半斤',
          image: '../images/2.jpg',
          num: 4,
          price: 0.01,
          selected: true
        },
        {
          id: 2,
          title: '素米 500g',
          image: '../images/2.jpg',
          num: 1,
          price: 0.03,
          selected: true
        }
      ]
    })
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