import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import WheelView from '@/views/WheelView.vue'
import EarnView from '@/views/EarnView.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'WheelView',
        component: WheelView
      },
      {
        path: '/earn',
        name: 'EarnView',
        component: EarnView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
