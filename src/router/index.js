import Vue from 'vue'
import Router from 'vue-router'
import {handleLocalStorage} from '../utils/util'
const Index = () => import('@/views/index/index');
const Home = () => import('@/views/home/home');
const AllTransaction = () => import('@/views/allTransaction/allTransaction');
const TransactionDetail = () => import('@/views/transactionDetail/transactionDetail');
const AllBlock = () => import('@/views/allBlock/allBlock');
const BlockDetail = () => import('@/views/blockDetail/blockDetail');
const Delegate = () => import('@/views/delegate/delegate');
const Address = () => import('@/views/address/address');
const Network = () => import('@/views/network/network');
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
          path: '/transaction/detail',
          name: 'transactionDetail',
          component: TransactionDetail
        },
        {
          path: '/allBlock',
          name: 'allBlock',
          component: AllBlock
        },
        {
          path: '/block/detail',
          name: 'blockDetail',
          component: BlockDetail
        },
        {
          path: '/delegate',
          name: 'delegate',
          component: Delegate
        },
        {
          path: '/address',
          name: 'address',
          component: Address
        },
        {
          path: '/network',
          name: 'network',
          component: Network
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
