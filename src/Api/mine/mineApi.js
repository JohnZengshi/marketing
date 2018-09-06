import {
  wxRequest
} from '@/utils/request';
let testApi = "http://192.168.100.116:8080/yunzhubao";
let onLineApi = "";
console.log()
/**
 * @param  {[Object]} params [请求的参数]
 * @return {[type]}          [description]
 */
// 2.1 会员注册
export const register = async function (params) {
  let URL = `${testApi}/v1/sem/user/register`;
  return wxRequest(params, URL, 1);
}

// 2.2 会员信息
export const getUserInfo = async function (params) {
  let URL = `${testApi}/v1/sem/user/info`;
  return wxRequest(params, URL, 1);
}

// 2.3 活动列表
export const getActivityList = async function(params){
  let URL = `${testApi}/v1/sem/user/activityList`;
  return wxRequest(params, URL, 1);
  // return {
  //   state: 200,
  //   msg: "OK",
  //   data: {
  //     dataList: [{
  //       name: "周年庆全民砍价大狂欢",
  //       id: "7584521",
  //       logoUrl: "https://img03.sogoucdn.com/app/a/100520024/3bb6ad03a4650a46706b11df04072d73",
  //       beginTime: "2018.12.08 12:30",
  //       endTime: "2018.1.8 12:30",
  //       state: "活动详情，伙伴一起砍价吧，砍到什么算什么...",
  //       status: "1",
  //       type: "1",
  //     }, {
  //       name: "砍价大狂欢",
  //       id: "7584521",
  //       logoUrl: "https://img04.sogoucdn.com/app/a/100520024/40527fced16243b25144a9837634622d",
  //       beginTime: "2018.12.08 12:30",
  //       endTime: "2018.1.8 12:30",
  //       state: "活动详情，伙伴一起砍价吧，伙伴一起砍价吧活动详情，伙伴一起砍价吧，砍到什么算什么...",
  //       status: "2",
  //       type: "2",
  //     }]
  //   }
  // }
}

// 2.6 优惠券列表
export const getTicketList = async function(params) {
  let URL = `${testApi}/v1/sem/user/ticketList`;
  return wxRequest(params, URL, 1); 
}