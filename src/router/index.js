import Router from 'vue-router';
import Vue from 'vue';
import Overview from '../views/Overview';
import Register from '../views/Register';
import Overdue from '../views/Overdue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name: 'overview',
      component: Overview
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    },
    {
      path:'/overdue',
      name: 'overdue',
      component: Overdue
    }
]
})

