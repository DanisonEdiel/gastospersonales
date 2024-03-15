import { createRouter, createWebHistory } from 'vue-router'
import AppPdf from './components/AppPdf.vue'
import GastosPersonales from './components/Gastospersonal.vue'


const routes = [
  {
    path: '/apppdf',
    name: 'AppPdf',
    component: AppPdf
  },
  {
    path: '/gastospersonales',
    name: 'GastosPersonal',
    component: GastosPersonales
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
