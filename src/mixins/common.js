import { isNull, isType, formatNumber } from '@/common/js/utils'
import keys from './keys';
export default {
  data() {
    return {
      PageStatistics: {},
      showTableFooter: false,
      isPageChange: false,
      pageSizeOpt: [10, 15, 20, 30, 40],
      pager: {
        pageIndex: 1,
        pageSize: 20,
        total: 0
      },
      list: [],
      statusList: [
        {
          Id: 1,
          Name: '启用'
        },
        {
          Id: 0,
          Name: '禁用'
        }
      ],
      saleType: [
        {
          Id: 'c25ca409-10ea-11ea-a4ed-000c29f776a7',
          Name: '素金', // (按克销售,无石料)
          ShortName: "素金"
        },
        {
          Id: 'e92e0b19-10ea-11ea-a4ed-000c29f776a7',
          Name: '非素', // (按件销售,无石料)
          ShortName: "非素"
        },
        {
          Id: '12d5ab05-10eb-11ea-a4ed-000c29f776a7',
          Name: '镶嵌', // (按件销售,含石料)
          ShortName: "镶嵌"
        },
        {
          Id: '37d65908-10eb-11ea-a4ed-000c29f776a7',
          Name: '玉器', // (按件销售,无金料)
          ShortName: "玉器"
        },
        {
          Id: '16e53111-d193-4921-a4c4-c1130260018e',
          Name: '散货', // (按件销售,无金料)
          ShortName: "散货"
        },
        {
          Id: '56627f45-10eb-11ea-a4ed-000c29f776a7',
          Name: '裸石',
          ShortName: "裸石"
        },
        {
          Id: '6b7208ba-10eb-11ea-a4ed-000c29f776a7',
          Name: '空托',
          ShortName: "空托"
        }
      ],
      saleTypeObj: {
        'c25ca409-10ea-11ea-a4ed-000c29f776a7': '素金', // (按克销售,无石料)
        'e92e0b19-10ea-11ea-a4ed-000c29f776a7': '非素', // (按件销售,无石料)
        '12d5ab05-10eb-11ea-a4ed-000c29f776a7': '镶嵌', // (按件销售,含石料)
        '37d65908-10eb-11ea-a4ed-000c29f776a7': '玉器', // (按件销售,无金料) 一码一货-玉器
        '16e53111-d193-4921-a4c4-c1130260018e': '散货', // (按件销售,无金料) 一码多货-散货
        '56627f45-10eb-11ea-a4ed-000c29f776a7': '裸石',
        '6b7208ba-10eb-11ea-a4ed-000c29f776a7': '空托'
      },
      validateTypeId: {
        plainGold : 'c25ca409-10ea-11ea-a4ed-000c29f776a7', // 素金
        nonPrime : 'e92e0b19-10ea-11ea-a4ed-000c29f776a7', // 非素
        inlay : '12d5ab05-10eb-11ea-a4ed-000c29f776a7', // 镶嵌
        jadeware : '37d65908-10eb-11ea-a4ed-000c29f776a7', // 一码一货-玉器
        bulkCargo: "16e53111-d193-4921-a4c4-c1130260018e", // 一码多货-散货
        bareStone : '56627f45-10eb-11ea-a4ed-000c29f776a7', // 裸石
        emptySupport : '6b7208ba-10eb-11ea-a4ed-000c29f776a7' // 空托
      },
      saleTypeShortName: {
        'c25ca409-10ea-11ea-a4ed-000c29f776a7': '素金',
        'e92e0b19-10ea-11ea-a4ed-000c29f776a7': '非素',
        '12d5ab05-10eb-11ea-a4ed-000c29f776a7': '镶嵌',
        '37d65908-10eb-11ea-a4ed-000c29f776a7': '玉器', // 一码一货-玉器
        '16e53111-d193-4921-a4c4-c1130260018e': '散货', // 一码多货-散货
        '56627f45-10eb-11ea-a4ed-000c29f776a7': '裸石',
        '6b7208ba-10eb-11ea-a4ed-000c29f776a7': '空托'
      },
      FINENESS_ID: "017c0a57-10e9-11ea-a4ed-000c29f776a7", // 成色字典值
      STONECATE_ID: "1117da9d-10e9-11ea-a4ed-000c29f776a7", // 石类字典值
      PRODUCT_ID: "c1d363cc-10e6-11ea-a4ed-000c29f776a7", // 成品仓类型
      OLDSILO_ID: "1be50979-10e7-11ea-a4ed-000c29f776a7", // 旧料仓类型
      GIFT_ID: "42a245d2-10e7-11ea-a4ed-000c29f776a7", // 礼品仓类型
      MAINTAIN_ID: "5f3f9e4d-10e7-11ea-a4ed-000c29f776a7", // 维修仓类型
      OLDDECORATIONS_ID: "af7c7434-51fe-4040-ba3c-614f08c767d4", // 旧饰仓类型
      LABELING_ID: "3e08e4c4-d3d9-46b9-a1f5-7bdb1be313e0", // 贴标仓类型
      COMMISSIONCLASS_ID: "81cd5562-10e9-11ea-a4ed-000c29f776a7", // 提成分类字典Id
      orderStatus: {
        notSave: 100, // 未保存单据
        hasSave: 101, // 已保存单据
        outbound: 201, // 已出库
        received: 202, // 已接收
        returnInTransit: 203, // 退回在途
        revoked: 204 // 已撤销
      },
      orderStatusName: {
        100: "未保存单据",
        101: "已保存单据",
        201: "已出库",
        202: "已接收",
        203: "退回在途",
        204: "已撤销"
      },
      orderStatusList: [
        { Id: 100, Name: "未保存单据" },
        { Id: 101, Name: "已保存单据" },
        { Id: 201, Name: "已出库" },
        { Id: 202, Name: "已接收" },
        { Id: 203, Name: "退回在途" },
        { Id: 204, Name: "已撤销" }
      ],
      express_dicId: "aa3e4443-ee3c-4396-8327-2c8dd404b205", // 快递公司字典Id
      openAccountStaffList: [],
      codeIndex: 0,
      buttonStatus: false
    }
  },
  mixins: [keys],
  computed: {
    // gramDigit() {
    //   return this.$stores.gramDigit
    // },
    // ctDigit() {
    //   return this.$stores.ctDigit
    // },
    // priceDigit() {
    //   return this.$stores.priceDigit
    // }
  },
  methods: {
    pageChange(pageIndex) {
      this.pager.pageIndex = pageIndex;
      this.getList();
    },
    pageSizeChange(pageSize) {
      this.pager.pageSize = pageSize;
      if (this.pager.pageIndex == 1) {
        this.getList();
      }
    },
    handleReset(form = 'form') {
      // this.$refs[form] && this.$refs[form].resetFields();
    },
    hanldeClearForm(form = 'formData') {
      _.each(this[form], (value, key) => {
        this[form][key] = '';
      });
    },
    handleFormReset(callback = 'formData') {
      this.handleReset();
      if (typeof callback == 'function') {
        callback();
      } else if (typeof callback == 'string') {
        this.hanldeClearForm(callback);
      }
    },
    handleFormResetAndGetList(callback) {
      this.handleFormReset(callback);
      this.pageChange(1);
    },
    organizeData(formData, isPost) {
      let pager = {
        ...this.pager
      };
      let data = _.extend({}, formData, pager);
      // post请求 不清理空参数
      if (!isPost) {
        _.each(data, (value, key) => {
          if (isNull(value)) {
            delete data[key];
          }
        });
      }
      delete data.total;
      return data;
    },
    transferKey(formData, uppercase = true) {
      _.each(formData, (value, key) => {
        key = String(key);
        if (key) {
          delete formData[key];
          formData[(uppercase ? key[0].toUpperCase() : key[0].toLowerCase()) + key.slice(1)] = value;
        }
      })
      return formData;
    },
    getAjaxList(fun, data, list) {
      if (list === undefined) {
        list = this.list;
      }
      return new Promise((resolve, reject) => {
        fun(data).then(res => {
          let dataItem = res.data;
          let result = [];
          if (!dataItem) {
            result = [];
          } else if (_.isArray(dataItem)) {
            result = dataItem;
          } else if (dataItem.data_list || dataItem.DataList) {
            result = dataItem.data_list || dataItem.DataList;
            this.pager.pageIndex = dataItem.page || dataItem.Page;
            this.pager.total = dataItem.total_count || dataItem.TotalCount || dataItem.PageCount;
            this.PageStatistics = (_.isArray(dataItem.PageStatistics) ? dataItem.PageStatistics[0] : dataItem.PageStatistics) || {};
            if (Object.keys(this.PageStatistics).length) {
              this.showTableFooter = true;
            } else {
              this.showTableFooter = false;
            }
          }
          list.splice(0, list.length, ...result);
          if (!result.length) {
            this.pager.total = 0;
          }
          if (!list.length) {
            this.PageStatistics = {};
            this.showTableFooter = false;
          }
          resolve(res);
        }).catch(res => {
          list.splice(0, list.length);
          this.pager.pageIndex = 1;
          this.PageStatistics = {};
          this.showTableFooter = false;
          this.pager.total = 0;
          reject(res);
        });
      });
    },
    // 处理页面路由传参
    setPageParameter(url, params, query) {
			let navigateToUrl = url;
			let paramsArr = [];
			let queryArr = [];
			let paramsStr = "";
			let queryStr = "";
			if (params) {
				_.each(params || {}, (value, key) => {
					paramsArr.push(value);
				});
				paramsStr = paramsArr.join("/");
			}
			if (query) {
				_.each(query || {}, (value, key) => {
					queryArr.push(`${key}=${value}`);
				});
				queryStr = queryArr.join("&");
			}
			if (paramsStr) {
				navigateToUrl += `/${paramsStr}`;
			}
			if (queryStr) {
				navigateToUrl += `?${queryStr}`;
			}
			console.log(navigateToUrl);
			return navigateToUrl;
		},
    setThousandOfCharacters(num) { // 设置千位符-单个字段
      let numStr = "";
      if (num && _.isNumber(+num) && !_.isNaN(num) && Math.abs(num) >= 1000) {
        num = +num;
        numStr = String(num).replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
      } else {
        numStr = num;
      }
      return numStr;
    },
    cancelThousandOfCharacters(numStr) { // 取消千位符-单个字段
      let num = 0;
      if (numStr && _.isString(numStr)) {
        num = String(numStr).replace(/,/g, '');
        if (_.isNumber(Number(num)) && !_.isNaN(Number(num))) {
          num = +num;
        }
      } else {
        num = numStr;
      }
      return num;
    },
    setThousandForList(list, pageKeys) { // 针对于列表中的数字设置千位符，list为列表数据；pageKeys：列表页面上须改为千位符的字段集合，为避免多余的循环
      let keys = pageKeys || this.thousandKeyList || [];
      _.each(list || [], item => {
        _.each(keys, key => {
          if (item[key]) {
            item[key] = this.cancelThousandOfCharacters(item[key]); // 个别页面直接使用会导致格式化后字符串再次格式化，出现NaN的情况
            item[key] = this.setThousandOfCharacters(item[key]);
          }
        });
      });
      return list;
    },
    cancelThousandForList(list, pageKeys) { // 针对于列表中的数字取消千位符
      let keys = pageKeys || this.thousandKeyList || [];
      _.each(list || [], item => {
        _.each(keys, key => {
          if (item[key]) {
            item[key] = this.cancelThousandOfCharacters(item[key]);
          }
        });
      });
      return list;
    },
    getNoExpression(str) {
      if (str) {
        str = String(str).replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
      }
      return str;
    }
  }
}
