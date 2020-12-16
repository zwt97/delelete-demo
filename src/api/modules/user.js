import apiIndex from '../index';
const loginUrl = 'v2/auth/crmlogin/usercenter_v2_Api_CrmUser_CrmLogin'
const logoutUrl = 'v2/auth/logout';
const modifyPwdByCode = '/v2/directservice/path/usercenter_v2_api_UnifyUser_ModifyOwnPwdByCode';
const smsUrl = '/v2/directservice/path/crmPlatform_v1_Api_QcloudSms_ResetPassword';
const pre = '/v2/service/path/';

let apis = {
  updatePwd: 'usercenter_v2_api_UnifyUser_UpdatePWD',
  getMenuList: 'UserCenter_v2_Api_RolePermission_GetUserPermList',
  getMctInfo: 'usercenter_v2_api_Merchant_GetCrmMerchantName',
  getValidPlatDropList: 'usercenter_v2_api_PlatAuth_GetValidPlatDropList',
  getFKLoginData: 'usercenter_v2_Api_CrmUser_GetFKLoginData'
}

_.each(apis, (value, key) => {
  apis[key] = pre + value;
});

// 登录
export function login(data, type, header) {
  return apiIndex.requestFun(type, 'POST', loginUrl, header, data, { withoutToken: true, loadingText: "正在登录中..." });
};
// 退出
export function logout(data, type, header) {
  return apiIndex.requestFun(type, 'GET', logoutUrl, header, data);
};
export function getFKLoginData(data, type, header) {
	return apiIndex.requestFun(type, 'GET', apis.getFKLoginData, header, data);
};
export function updatePwd(data, type, header) {
  return apiIndex.requestFun(type, 'POST', apis.updatePwd, header, data);
};
// 重置密码
export function getSms(data, type, header) {
	return apiIndex.requestFun(type, 'GET', getSms, header, data);
};
// 根据验证码修改密码
export function modifyPwd(data, type, header) {
  return apiIndex.requestFun(type, 'POST', modifyPwdByCode, header, data);
};
