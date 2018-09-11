<<<<<<< HEAD
import wepy from 'wepy';
const wxRequest = async (options, url) => {
    wx.showLoading({title: '加载中'})
    let baseData = Object.assign({}, {
      // shopId: wx.getStorageSync('shopId'),
      // userId: wx.getStorageSync('userId'),
      // memberId: wx.getStorageSync('memberId')
      latitude: wx.getStorageSync('latitude'),
      longitude: wx.getStorageSync('longitude'),
      shopId: '0427664a21464e2ca52f84e755f9e3d6',
      userId: '00256e1bd5774da7943b439c3369971b',
      memberId: '03ed51007bbc4549af0b748866a317dd'
    }, options)
    
    console.log('shopId', wx.getStorageSync('shopId'))
    console.log('userId', wx.getStorageSync('userId'))
    console.log('memberId', wx.getStorageSync('memberId'))
    console.log('baseData', baseData)
    let res = await wepy.request({
        url: url,
        method: 'POST',
        data: {
          data: baseData,
          unit: {
            "channel": 3,
            "OS": "web",
            "ip": "string",
            "userId": wx.getStorageSync('userId')
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
};

module.exports = {
    wxRequest
}
