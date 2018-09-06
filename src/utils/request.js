import wepy from "wepy";
import Tip from "./tip";
/**
 * @param  {[Object]} params [请求的参数]
 * @param  {[String]} url    [请求的url]
 * @param  {[Number]} t      [第几次请求]
 * @return {[type]}          [description]
 */
const wxRequest = async (params, url ,t) => {
  Tip.loading();
  let companyId = wx.getStorageSync('companyId');
  let userId = wx.getStorageSync('userId');
  let unit = {
    companyId: companyId,
    channel: 3,
    OS: "web",
    ip: "",
    userId: userId,
    tokenId: "361ab44de4e622c29d92bad1a7ed2f91"
  }
  console.log(`第${t}次请求`)
  let Data = {
    data:{},
    unit:{},
  }
  Data.data = params;
  Data.unit = unit;
  let res = await wepy.request({
    url: url,
    method: 'POST',
    data: Data,
    header: {
      'Content-Type': 'application/json'
    },
  });
  if(res.data.state == '200'){
    Tip.loaded();
    return res.data;
  }else{
    let time;
    if(t == 1){
      time = 1000;
    }else if(t == 2){
      time = 5000;
    }else if(t == 3){
      time = 12000;
    }else{
      Tip.loaded();
      Tip.error(res.data.msg);
      return res.data;
    }
    return new Promise((resolve)=>{
      setTimeout(() => {
        let res = wxRequest(params, url , t+1);
        resolve(res);
      }, time);
    });
  }
};

module.exports = {
  wxRequest
}