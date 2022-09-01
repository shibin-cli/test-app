import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
        meta: {
          withHeader: true
        }
      },
      {
        path: '/editor',
        component: () => import('@/views/Editor.vue')
      }, {
        path: '/template/:id',
        component: () => import('@/views/TemplateDetail.vue'),
        meta: {
          withHeader: true
        }
      }
    ]
  }, {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
