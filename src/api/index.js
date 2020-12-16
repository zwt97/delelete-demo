import apiConfig from './config';

let requestObj = {
  requestFun: function(type = "common", method, url = "", header = {}, data = {}, otherData = {}) {
    let httpUrl = apiConfig.baseURL + "/" + url;
    let token = localStorage.getItem('token') || "";
    if (!token && !otherData.withoutToken) {
      uni.redirectTo({
        url: "/pages/login/login"
      });
      return new Promise((resolve, reject) => {});
    }
    if (!token && !otherData.withoutToken) {
      return;
    }
    let resquestHeader = {
		'Content-type': header && header['content-type'] ? header['content-type'] : 'application/json',
        'Accept': 'application/json',
		tokenStr: token
    };
    if (otherData && otherData.withoutToken) {
      delete resquestHeader.tokenStr;
    }
    switch(type) {
      case 'common':
        return this.commonRequest(method, httpUrl, resquestHeader, data);
      case 'promise':
        return this.promiseAwaitRequest(method, httpUrl, resquestHeader,  data);
      case 'await':
        return this.promiseAwaitRequest(method, httpUrl, resquestHeader,  data);
    };
  },
  commonRequest: function(method, url, header, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        method,
        url,
        dataType: 'json',
        header,
        data,
        success: (res) => {
			if (res.data.code === 1301 || res.data.code === 1303) {
			  // 登录失败或需要登录跳转回登录页面
				uni.redirectTo({
					url: "/pages/login/login"
				});
			}
			if (res.data.code === 1001 || res.data.code === 1005 || res.data.code === 0 || (res.data.Result && (res.data.Result.code === 1005 || res.data.Result.code === 1001))) {
			  // 成功返回
				resolve(res.data);
			}
        },
        fail: (err) => {
          reject(err)
        }
      });
    })
  },
  promiseAwaitRequest: function(method, url, header, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        method,
        url,
        dataType: 'json',
        header,
        data,
      }).then(res => {
        setTimeout(() => {
          resolve(res.data)
        }, 3000)
      }).catch(err => {
        reject(err)
      });
    })
  },
};

export default requestObj;
