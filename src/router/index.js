import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'

import Test from '@/components/Test.vue'

const routes = [{ path: '/', component: Home }, { path: '/test', component: Test } ]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
