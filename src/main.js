import Vue from 'vue'
import App from './App'

import "lodash";

import { store, mutations } from '@/store';

Vue.config.productionTip = false;

Vue.prototype.$stores = store;
Vue.prototype.$mutations = mutations;

import base from '@/mixins/base';
Vue.mixin(base);

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
