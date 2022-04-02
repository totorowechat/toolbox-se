import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../components/MainPage.vue'),
      },
      {
        path: 'random-num',
        component: () => import('../views/random-num/index.vue'),
      },
      {
        path: 'statistics-word-num',
        component: () => import('../views/statistics-word-num/index.vue'),
      },
      {
        path: 'translate-10-2',
        component: () => import('../views/transfate-10-2/index.vue'),
      },
      {
        path: 'translate-text-2-ascll',
        component: () => import('../views/translate-text-2-ascll/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
