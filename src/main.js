// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

import createStore from './store/store';

Vue.use(Vuex);

const store = createStore();

import {Menu, DatePicker, Button} from 'ant-design-vue';
Vue.use(DatePicker);
Vue.use(Menu);
Vue.use(Button);
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
