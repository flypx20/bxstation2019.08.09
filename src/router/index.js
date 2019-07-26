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
    path: '/feeds',
    component: TabLayout,
    children: [{
      path: '/feeds',
      name: 'Feeds',
      component: () => import('@/views/feeds/Feeds'),
      meta: {
        title: '保险聚合'
      }
    }]
  }]
})

export default router
