import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('@/views/StatisticsView.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/views/Add.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('@/views/Edit.vue')
    },
    {
      path: '/delete',
      name: 'Delete',
      component: () => import('@/views/Delete.vue')
    }
  ],
})

export default router
