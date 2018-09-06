import {
  wxRequest
} from '@/utils/request';
let testApi = "http://192.168.100.116:8080/yunzhubao";

/**
 * @param  {[Object]} params [请求的参数]
 * @return {[type]}          [description]
 */

export const getUserInfo = async function (params) {
  let URL = `${testApi}/v1/sem/user/info`;
  return wxRequest(params, URL, 1);
}