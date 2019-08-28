// junbao_pages/components/tabbar/tabbar.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    name: "xuyang",
     top:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
 getApp().setWatcher(that.data, that.watch); // 设置监听器
    that.setData({
      name: 'lxm'
    })


  },
  watch: {
    // currentIndex: function (newValue) {
     
    //   console.log(newValue); // name改变时，调用该方法输出新值。
    // }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  handleLeftClick:function(e){
    // console.log(parseInt(e.currentTarget.id))
    var idx = parseInt(e.currentTarget.id)
   this.setData({
     currentIndex:idx
   })
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
  scroll: function (e) {
    var that=this
    // right - item - list
    // console.log(e)
    // console.log(e.detail.deltaY)
    wx.createSelectorQuery().selectAll('.right-item-title').boundingClientRect(function (rect) {
      // console.log(rect[0].top)
      // console.log(rect[1].top)
      // console.log(rect[2].top)
      var tapscllor = e.detail.scrollTop+55
      if (rect[0].top <= 55 && rect[0].top >= 5){
        that.setData({
          currentIndex: 0
        })
      }
      if (rect[0].top <= -306 && rect[0].top >= -356) {
        that.setData({
          currentIndex: 1
        })
      }
      if (rect[0].top <= -680 && rect[0].top >= -730) {
        that.setData({
          currentIndex: 2
        })
      }
      if (rect[0].top <= -1060 && rect[0].top >= -1110) {
        that.setData({
          currentIndex: 3
        })
      }
      if (rect[0].top <= -1430 && rect[0].top >= -1480) {
        that.setData({
          currentIndex: 4
        })
      }
      if (rect[0].top <= -1806 && rect[0].top >= -1856) {
        that.setData({
          currentIndex: 5
        })
      }
      if (rect[0].top <= -2185 && rect[0].top >= -2235) {
        that.setData({
          currentIndex: 6
        })
      }
      if (rect[0].top <= -2554 && rect[0].top >= -2604) {
        that.setData({
          currentIndex: 7
        })
      }
      if (rect[0].top <= -2742 && rect[0].top >= -2792) {
        that.setData({
          currentIndex: 7
        })
      }
    }).exec()
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