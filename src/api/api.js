import {wxRequest} from '@/utils/request'
// const host = 'https://program.yunzhubao.com/yunzhubao/'
// var host = 'https://uat.yunzhubao.com/'
var host = 'http://192.168.100.116:8080/yunzhubao/'

// 商城店铺信息
const mallsShopInfo = (params) => wxRequest(params, `${host}v1/weChat/mallsShopInfo`)
// 商品大小类列表
const showProductClassesList = (params) => wxRequest(params, `${host}v1/headquarter/showProductClassesList`)
// 商城分类
const mallsClassification = (params) => wxRequest(params, `${host}v1/weChat/mallsClassification`)
// 电子账单
const electronicBilling = (params) => wxRequest(params, `${host}v1/weChat/electronicBilling`)
// 款式明细
const programGirardInfo = (params) => wxRequest(params, `${host}v1/weChat/programGirardInfo`)
// 产品参数
const productParameters = (params) => wxRequest(params, `${host}v1/weChat/productParameters`)
// 参数规格
const productSpecifications = (params) => wxRequest(params, `${host}v1/weChat/productSpecifications`)
// 金价信息
const goldPriceInfo = (params) => wxRequest(params, `${host}v1/weChat/goldPriceInfo`)
// 折扣信息
const jewelryPriceInfo = (params) => wxRequest(params, `${host}v1/weChat/jewelryPriceInfo`)
// 小程序用户注册
const register = (params) => wxRequest(params, `${host}v1/sem/user/register`)
// 绑定小程序商店列表
const smallProgramShopList = (params) => wxRequest(params, `${host}v1/weChat/smallProgramShopList`)
// 用户信息
// const smallProgramUserInfo = (params) => wxRequest(params, `${host}v1/weChat/smallProgramUserInfo`)
// 验证手机号是否已注册会员
const smallProgramMemberExists = (params) => wxRequest(params, `${host}v1/sem/user/checkUserPhoneExist`)
// 解密手机号码
const getEncrypteInfo = (params) => wxRequest(params, `${host}v1/sem/user/getWxDecryptedInfo`)
// 修改会员信息
const updateMember = (params) => wxRequest(params, `${host}v1/groupTemplate/updateMember`)
// 金价开启信息
const goldPriceEnableInfo = (params) => wxRequest(params, `${host}v1/weChat/goldPriceEnableInfo`)
// 小程序签到
const rportByWeChat = (params) => wxRequest(params, `${host}v1/member/rportByWeChat`)
// 会员积分日志
const memberIntegralLog = (params) => wxRequest(params, `${host}v1/member/memberIntegralLog`)
// 热门商品列表
const productList = (params) => wxRequest(params, `${host}v1/sem/shop/productList`)
// 优惠券明细
const ticketDetail = (params) => wxRequest(params, `${host}v1/sem/shop/ticketDetail`)
// 商品明细(实物)
const productDetail = (params) => wxRequest(params, `${host}v1/sem/shop/productDetail`)
// 门店地址列表
const findShopListByProductId = (params) => wxRequest(params, `${host}v1/sem/shop/findShopListByProductId`)

// 等级信息
const getGrade = (params) => wxRequest(params, `${host}v1/sem/user/grade`)
// 访问足迹
const getVisitLogList = (params) => wxRequest(params, `${host}v1/sem/user/visitLogList`)
// 兑换消耗总积分
const getIntegralUseAllNum = (params) => wxRequest(params, `${host}v1/sem/user/integralUseAllNum`)
// 积分兑换记录
const getIntegralUseList = (params) => wxRequest(params, `${host}v1/sem/user/integralUseList`)
// 积分信息
const getIntegral = (params) => wxRequest(params, `${host}v1/sem/user/integral`)
// 积分日志
const getIntegralList = (params) => wxRequest(params, `${host}v1/sem/user/integralList`)
// 优惠券列表
const getTicketList = (params) => wxRequest(params, `${host}v1/sem/user/ticketList`)
// 会员信息
const xjUserInfo = (params) => wxRequest(params, `${host}v1/sem/user/info`)
// 活动列表
const getActivityList = (params) => wxRequest(params, `${host}v1/sem/user/activityList`)
// 店铺列表
const shopList = (params) => wxRequest(params, `${host}v1/sem/shop/shopList`)
// 测试
const openIdtext = (params) => wxRequest({}, params, 'GET')

export default {
    mallsShopInfo,
    showProductClassesList,
    mallsClassification,
    electronicBilling,
    programGirardInfo,
    productParameters,
    productSpecifications,
    goldPriceInfo,
    jewelryPriceInfo,
    register,
    smallProgramShopList,
    // smallProgramUserInfo,
    smallProgramMemberExists,
    getEncrypteInfo,
    updateMember,
    goldPriceEnableInfo,
    rportByWeChat,
    memberIntegralLog,
    productList,
    ticketDetail,
    productDetail,
    findShopListByProductId,
    shopList,
    openIdtext,

    getGrade,
    getVisitLogList,
    getIntegralUseAllNum,
    getIntegralUseList,
    getIntegral,
    getIntegralList,
    getTicketList,
    xjUserInfo,
    getActivityList
}