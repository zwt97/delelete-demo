import Vue from 'vue'
export let store = Vue.observable({
  IsAllowNewRole: false,
  IsHeader: false,
  isHeadStore: localStorage.getItem('IsHeadStore') == 'true',
  menuList: [],
  rights: {},
  Logo: '',
  EmpName: '',
  StoreId: '',
  StoreName: '',
  MerchantName: '',
  Account: '',
  JobNumber: '',
  isGetRightNow: false,
  offsetWidth: 0,
  goldPriceParams: {},
  gramDigit: 3,
  ctDigit: 3,
  priceDigit: 2,
  reportConfigInfo: {}, // 品牌配置-报表配置
  isFlowScreen: false, // 小于 分辨率 1368 时， 为 true
  isHighScreen: false, // 大于 分辨率 1368 时， 为 true
  isMiddleScreen: false, // 1600 分辨率
  isSenstiveFiled: false, // 是否显示敏感字段
  senstiveFiledData: [], // 敏感字段
  cateTypeId: ""
})
export let mutations = {
  setMenuList(data) {
    store.menuList = data || []
  },
  setIsHeadStore(data) {
    store.isHeadStore = data || false
  },
  setIsHeader(data) {
    store.IsHeader = data || false
  },
  setIsAllowNewRole(data) {
    store.IsAllowNewRole = data || false
  },
  setRights(data) {
    store.rights = data || {}
  },
  setLogo(data) {
    store.Logo = data
  },
  setEmpName(data) {
    store.EmpName = data
  },
  setStoreName(data) {
    store.StoreName = data
  },
  setStoreId(data) {
    store.StoreId = data
  },
  setMerchantName(data) {
    store.MerchantName = data
  },
  setAccount(data) {
    store.Account = data
  },
  setJobNumber(data) {
    store.JobNumber = data
  },
  setIsGetRightNow(data) {
    store.isGetRightNow = data
  },
  setOffsetWidth(data) {
    store.offsetWidth = data
  },
  setGoldPriceParams(data) {
    store.goldPriceParams = data;
  },
  setGramDigit(data) {
    store.gramDigit = data;
  },
  setCtDigit(data) {
    store.ctDigit = data;
  },
  setPriceDigit(data) {
    store.priceDigit = data;
  },
  setReportConfigInfo(data) {
    store.reportConfigInfo = data;
  },
  SET_BASEWIDTH(data) {
    store.baseWidth = data;
  },
  SET_SCREEN(data) {
    store.isFlowScreen = data.isFlowScreen;
    store.isHighScreen = data.isHighScreen;
    store.isMiddleScreen = data.isMiddleScreen;
  },
  setSensitiveFiled(data) {
    store.isSenstiveFiled = data || false
  },
  setSensitiveFiledData(data) {
    store.senstiveFiledData = data || []
  },
  setCateTypeId(data) {
    store.cateTypeId = data
  }
}
