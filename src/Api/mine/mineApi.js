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

// 2.5 优惠券列表
export const getTicketList = async function(params) {
  let URL = `${testApi}/v1/sem/user/ticketList`;
  return wxRequest(params, URL, 1); 
  // return {
  //   dataList: [{
  //     validityDay: "2018-10-01",
  //     head: "",
  //     style: "/images/mine/2.1优惠券@3x.png",
  //     state: "",
  //     id: "1212452",
  //     type: "1",
  //     subType: "11",
  //     limitShop: "1",
  //     limitProduct: ["珠宝","黄金","白金","银饰","黄金","白金","银饰","黄金","白金","银饰","黄金","白金","银饰"],
  //     termMoney: "500",
  //     deduction: "",
  //     maxDeductionMoney: ""
  //   }, {
  //     validityDay: "2018-10-08",
  //     head: "",
  //     style: "/images/mine/2.2优惠券@3x.png",
  //     state: "",
  //     id: "1212452",
  //     type: "2",
  //     subType: "12",
  //     limitShop: "0",
  //     limitProduct: ["珠宝","黄金","白金","银饰","黄金","白金","银饰","黄金","白金","银饰","黄金","白金","银饰"],
  //     termMoney: "",
  //     deduction: "8",
  //     maxDeductionMoney: ""
  //   }]
  // }
}

// 2.6 积分日志
export const getIntegralList = async function(params){
  let URL = `${testApi}/v1/sem/user/integralList`;
  return wxRequest(params, URL, 1); 
  // return {
  //   dataList: [{
  //     yearMonth: '2018-09',
  //     useScore: '83',
  //     addScore: '200',
  //     groupList: [{
  //       createTime: '09-01',
  //       typeDesc: '签到',
  //       score: '+20'
  //     }, {
  //       createTime: '09-02',
  //       typeDesc: '兑换优惠券',
  //       score: '-200'
  //     }]
  //   }, {
  //     yearMonth: '2018-09',
  //     useScore: '83',
  //     addScore: '200',
  //     groupList: [{
  //       createTime: '09-01',
  //       typeDesc: '签到',
  //       score: '+20'
  //     }, {
  //       createTime: '09-02',
  //       typeDesc: '兑换优惠券',
  //       score: '-200'
  //     }]
  //   }, {
  //     yearMonth: '2018-09',
  //     useScore: '83',
  //     addScore: '200',
  //     groupList: [{
  //       createTime: '09-01',
  //       typeDesc: '签到',
  //       score: '+20'
  //     }, {
  //       createTime: '09-02',
  //       typeDesc: '兑换优惠券',
  //       score: '-200'
  //     }, {
  //       createTime: '09-01',
  //       typeDesc: '签到',
  //       score: '+20'
  //     }, {
  //       createTime: '09-02',
  //       typeDesc: '兑换优惠券',
  //       score: '-200'
  //     }, {
  //       createTime: '09-01',
  //       typeDesc: '签到',
  //       score: '+20'
  //     }, {
  //       createTime: '09-02',
  //       typeDesc: '兑换优惠券',
  //       score: '-200'
  //     }]
  //   }]
  // }
}


// 2.8 积分信息
export const getIntegral = async function(params){
  let URL = `${testApi}/v1/sem/user/integral`;
  return wxRequest(params, URL, 1); 
}

// 2.10 积分兑换记录
export const getIntegralUseList = async function(params){
  let URL = `${testApi}/v1/sem/user/integralUseList`;
  return wxRequest(params, URL, 1); 
}

// 2.11 兑换消耗总积分
export const getIntegralUseAllNum = async function(params){
  let URL = `${testApi}/v1/sem/user/integralUseAllNum`;
  return wxRequest(params, URL, 1); 
}

// 2.12 访问足迹
export const getVisitLogList = async function(params){
  let URL = `${testApi}/v1/sem/user/visitLogList`;
  return wxRequest(params, URL, 1); 
  // return [{
  //   logId: "11111",
  //   productName: "黄金998",
  //   type: "0",
  //   visitDay: "2018-9-9",
  //   logoUrl: "",
  //   productId: "1112",
  //   score: "450",
  // }]
}

// 2.14 等级信息
export const getGrade = async function(params){
  let URL = `${testApi}/v1/sem/user/grade`;
  return wxRequest(params, URL, 1); 
}
