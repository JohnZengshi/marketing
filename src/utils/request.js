import wepy from "wepy";
import Tip from "./tip";
/**
 * @param  {[Object]} params [请求的参数]
 * @param  {[String]} url    [请求的url]
 * @param  {[Number]} t      [第几次请求]
 * @return {[type]}          [description]
 */
const wxRequest = async (params = {}, url ,t) => {
  Tip.loading();
  console.log(`第${t}次请求`)
  let data = params
  let res = await wepy.request({
    url: url,
    method: 'POST',
    data: data,
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
      time = 10000;
    }else if(t == 2){
      time = 50000;
    }else if(t == 3){
      time = 120000;
    }else{
      Tip.loaded();
      Tip.error(res.data.msg);
      return res.data;
    }
    return new Promise((resolve)=>{
      setTimeout(() => {
        let res = wxRequest(data, url , t+1);
        resolve(res);
      }, time);
    });
  }
};

module.exports = {
  wxRequest
}