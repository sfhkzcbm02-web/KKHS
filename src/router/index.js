import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import signup from '@/views/signup/index.vue'
import goods from '@/views/goods/index.vue'
import home from '@/views/home/index.vue'
import goodsdetail from '@/views/goodsdetail/index.vue'
import personal from '@/views/personal/index.vue'
import privacy from '@/views/privacy/index.vue'
import points from '@/views/points/index.vue'
import coupon from '@/views/coupon/index.vue'
import message from '@/views/message/index.vue'
import order from '@/views/order/index.vue'
import pay from '@/views/pay/index.vue'
import search from '@/views/search/index.vue'
import orderdetail from '@/views/orderdetail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: 'goods/:id',
          component: goods
        },
        {
          path: 'goodsdetail/:id',
          component: goodsdetail
        },
        {
          path: 'personalInfo',
          component: personal,
          children: [
            {
              path: '0',
              component: privacy
            },
            {
              path: '1',
              component: points
            },
            {
              path: '2',
              component: coupon
            },
            {
              path: '3',
              component: message
            },
            {
              path: '4',
              component: order
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/orderdetail',
      component: orderdetail
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  }
})

export default router
