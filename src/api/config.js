const orign = 'http://192.168.0.167:9085';

const config = {
  baseURL: orign,
  upfileBaseUrl: orign + '/v2/Resource/Resource/Resource_v2_api_GetResource_PSize_', // 资源文件的链接前缀
  upfile: orign + '/v2/service/Resource/Resource_v2_api_ResourceManager_UploadHeaderImg' // 上传接口
}
for (let key in config) {
  // config[key] = config[key].replace(/192.168.0.167:9085/, 'wjewelapi.dyzbk.com');
};
export default config;
