import Vue from 'vue'
import Router from 'vue-router'
import {handleLocalStorage} from '../utils/util'
const Index = () => import('@/views/index/index');
const Home = () => import('@/views/home/home');
const AllTransaction = () => import('@/views/allTransaction/allTransaction');
const AllBlock = () => import('@/views/allBlock/allBlock');
const Delegate = () => import('@/views/delegate/delegate');
const NoResult = () => import('@/views/noResult/noResult');

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
        },
        {
          path: '/allTransaction',
          name: 'allTransaction',
          component: AllTransaction
        },
        {
          path: '/allBlock',
          name: 'allBlock',
          component: AllBlock
        },
        {
          path: '/delegate',
          name: 'delegate',
          component: Delegate
        },
        {
          path: '*',
          name: 'noResult',
          component: NoResult
        }
      ]
    }
  ]
})
