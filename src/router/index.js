import Vue from 'vue'
import Router from 'vue-router'
import {handleLocalStorage} from '../utils/util'
const Index = () => import('@/views/index/index');
const Home = () => import('@/views/home/home');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
