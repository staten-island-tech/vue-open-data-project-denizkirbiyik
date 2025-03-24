import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:amt?/:offset?',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chart1',
      name: 'chart1',
      component: () => import('../views/ChartOneView.vue'),
    },
    {
      path: '/chart2',
      name: 'chart2',
      component: () => import('../views/ChartTwoView.vue'),
    },
  ],
})

export default router
