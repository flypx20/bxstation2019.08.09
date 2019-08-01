import Vue from 'vue'
import Router from 'vue-router'

import TabLayout from '../views/layout/TabLayout.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: TabLayout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Home'),
      meta: {
        title: '我的首页'
      }
    }]
  }, {
    path: '/editbroker',
    name: 'Editbroker',
    component: () => import('@/views/home/Editbroker')
  }, {
    path: '/editbanner',
    name: 'Editbanner',
    component: () => import('@/views/home/Editbanner')
  }, {
    path: '/products',
    component: TabLayout,
    children: [{
      path: '/products',
      name: 'Products',
      component: () => import('@/views/products/Products'),
      meta: {
        title: '保险产品'
      }
    }]
  }, {
    path: '/productdetail',
    name: 'ProductDetail',
    component: () => import('@/views/products/ProductDetail')
  }, {
    path: '/comparison',
    name: 'Comparison',
    component: () => import('@/views/comparison/Comparison')
  }, {
    path: '/comparisonlist',
    name: 'ComparisonList',
    component: () => import('@/views/comparison/ComparisonList')
  }, {
    path: '/comparisontable',
    name: 'ComparisonTable',
    component: () => import('@/views/comparison/ComparisonTable')
  }, {
    path: '/editchannel',
    name: 'EditChannel',
    component: () => import('@/views/personal/EditChannel')
  }, {
    path: '/feeds',
    component: TabLayout,
    children: [{
      path: '/feeds',
      name: 'Feeds',
      component: () => import('@/views/feeds/Feeds'),
      meta: {
        title: '保险聚合'
      }
    }, {
      path: '/personal',
      component: TabLayout,
      children: [{
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/personal/Personal'),
        meta: {
          title: '个人中心'
        }
      }]
    }]
  }]
})

export default router
