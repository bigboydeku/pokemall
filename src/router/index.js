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
    component: () => import('../views/Pokemon.vue')
  },
  {
    path: '/pokemon/:slug',
    name: 'pokemon/',
    component: () => import('../views/PokemonChosen.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
