import apiIndex from '../index';
const pre = '/v2/service/path/';

let apisObj = {
	pageInit: 'redishProduct_v2_Api_Product_PageInit',
	getProductPageList: 'redishProduct_v2_Api_Product_GetProductPageList',
	getRepairPageList: 'redishProduct_v2_Api_Product_GetRepairPageList'
}

let apis = {}
for (let key in apisObj) {
  apis[key] = pre + apisObj[key];
};

export function pageInit(data, type, header) {
	return apiIndex.requestFun(type, 'GET', apis.pageInit, header, data);
};
export function getProductPageList(data, type, header) {
  return apiIndex.requestFun(type, 'POST', apis.getProductPageList, header, data);
};
export function getRepairPageList(data, type, header) {
	return apiIndex.requestFun(type, 'POST', apis.getRepairPageList, header, data);
};
