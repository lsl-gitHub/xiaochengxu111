var app = getApp();

function getOpenid(p) {
    var d = app.globalData.baseurl;
    wx.getStorage({
        key: "openid",
        success: function(e) {
            var s = wx.getStorageSync("openid"), unionid = wx.getStorageSync("unionid");
			if(s=='' && unionid==''){
				  var code = wx.getStorageSync("appcode");
				}
            wx.getUserInfo({
                success: function(e) {
                    var n = e.userInfo, a = n.nickName, o = n.avatarUrl, t = n.gender, c = n.province, i = n.city, r = n.country;
                    wx.request({
                        url: d + "doPageUseupdate",
                        data: {
                            uniacid: p,
                            openid: s,
							code:code?code:'',
							unionid: unionid,
                            nickname: a,
                            avatarUrl: o,
                            gender: t,
                            province: c,
                            city: i,
                            country: r
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(e) {}
                    });
                }
            });
        },
        fail: function(e) {
            console.log("no openid");
            var n = wx.getStorageSync("appcode");
            wx.request({
                url: d + "doPageAppbase",
                data: {
                    code: n,
                    uniacid: p
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    wx.setStorageSync("openid", e.data.data.openid);
					wx.setStorageSync("unionid",e.data.data.unionid);
                    var s = e.data.data.openid, u = e.data.data.unionid;
                    wx.getUserInfo({
                        success: function(e) {
                            var n = e.userInfo, a = n.nickName, o = n.avatarUrl, t = n.gender, c = n.province, i = n.city, r = n.country;
                            wx.request({
                                url: d + "doPageUseupdate",
                                data: {
                                    uniacid: p,
                                    openid: s,
									unionid: u,
                                    nickname: a,
                                    avatarUrl: o,
                                    gender: t,
                                    province: c,
                                    city: i,
                                    country: r
                                },
                                header: {
                                    "content-type": "application/json"
                                },
                                success: function(e) {
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

module.exports.getOpenid = getOpenid;