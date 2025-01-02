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
      path: '/analyze',
      name: 'Analyze',
      component: () => import('@/views/AnalyzeView.vue')
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
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/views/LogoutView.vue')
    }
  ],
})

export default router
