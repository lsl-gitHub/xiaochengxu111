// junbao_pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      advertisement1:false,
      advertisement2:false,
      num:3,
      idx:0,
      imagelist:[
        { img:"http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"},
        { img: "http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg" },
        { img: "http://pics.sc.chinaz.com/files/pic/pic9/201908/zzpic19392.jpg" },
        { img: "http://pics.sc.chinaz.com/files/pic/pic9/201907/hpic1258.jpg" }
      ],
      myindex: 0,
      showView: true,
      disetxian1: false,
      tabs: ['门店1', '门店2', '门店3'],// 导航菜单栏
      curIdx: 0,// 当前导航索引
      scrollHeight: 100, //滚动高度 = 设备可视区高度 -  导航栏高度
      list: [],// 内容区列表
        "bnrUrl": [{
            "url": "http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg"
        }, {
            "url": "http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
        }, {
            "url": "http://a.hiphotos.baidu.com/lvpics/h=800/sign=5a82402cd5ca7bcb627bca2f8e086b3f/caef76094b36acaf0651ef137ed98d1000e99caf.jpg"
        }, {
            "url": "http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg"
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        var numVal = that.data.num -1;
        that.setData({ num: numVal });
        console.log('setInterval==' + that.data.num);
        if (that.data.num<=0){
          that.setData({ advertisement1: false });
          clearInterval(that.data.setInter)
          wx.showTabBar({})
        }
      }
      , 2000);

    },

  clearxx:function(){
    this.setData({ advertisement2: false });
  },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },
  signEvent:function(e){
    console.log(e.detail.currentPosition)
  },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

      wx.hideTabBar({

      })
      // this.setData({
      //   scrollHeight: wx.getSystemInfoSync().windowHeight - (wx.getSystemInfoSync().windowWidth / 750 * 700),
      //   //  markers: markerss
      // })
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
  imagelist:function(e){
    var idx = parseInt(e.currentTarget.id) + 1
    if (idx>=4){
      idx=0
      this.setData({
        idx: idx
      })
    }

    console.log(idx)
    this.setData({
      idx:idx
    })
  },
  // 点击切换
  clickTab: function (e) {
    var idx = e.currentTarget.dataset.current;
    console.log(idx)
    var curIdx = e.currentTarget.dataset.current == 0;
    this.setData({
      myindex: idx,
      disetxian1: curIdx,
      curIdx: e.currentTarget.dataset.current
    })
  },
  swiperTab: function (e) {
    var idx = e.detail.current;
    var curIdx = e.detail.current == 0;
    this.setData({
      myindex: idx,
      disetxian1: curIdx,
      curIdx: e.detail.current
    })
  },
})