// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {Menu, DatePicker, Button} from 'ant-design-vue';
Vue.use(DatePicker);
Vue.use(Menu);
Vue.use(Button);
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
