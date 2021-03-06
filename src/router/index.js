import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pokemon/',
    name: 'pokemon',
    component: () => import('../views/Pokemon.vue'),
    children: [
      {
        path: '/pokemon/:slug',
        component: () => import('../views/Pokemon.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
