import wepy from 'wepy';
const wxRequest = async (options, url, methodType = 'POST') => {
    wx.showLoading({title: '加载中'})
    let baseData = Object.assign({}, {
      shopId: wx.getStorageSync('shopId'),
      userId: wx.getStorageSync('userId'),
      memberId: wx.getStorageSync('memberId'),
      latitude: wx.getStorageSync('latitude'),
      longitude: wx.getStorageSync('longitude'),
    }, options ? options : {})
    
    let res = await wepy.request({
        url: url,
        method: methodType,
        data: {
          data: baseData,
          unit: {
            "channel": 3,
            "OS": "web",
            "ip": "string",
            "userId": wx.getStorageSync('userId'),
          }
        },
        header: { 'content-type': 'application/json' }, // 默认值
    });
    if (res.data.state == 200) {
        wx.hideLoading()
        return res.data.data
    } else if (res.statusCode == 404 || res.statusCode == 504){
        wx.showToast({
          title: '服务器繁忙',
          icon: 'none',
          duration: 2000
        })
    } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
    }
    // wx.hideLoading()
};

module.exports = {
    wxRequest
}
