// 获取节点
/**
 * @param  {[String]}  dom   [节点的类名或Id]
 * @return {[type]}          [description]
 */
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