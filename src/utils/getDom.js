// 获取节点
function _getDomRect(dom) {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select(dom).boundingClientRect((res) => {
      resolve(res);
    }).exec()
  });
};
module.exports = {
    _getDomRect,
}