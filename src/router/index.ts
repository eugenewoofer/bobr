import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BobrView from '@/views/BobrView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bobr',
    name: 'bobr',
    component: BobrView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
