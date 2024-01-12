import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from "../views/LoginView.vue"
import UserDataView from "../views/UserDataView.vue"
import ParentView from "../views/ParentView.vue"
import ProductView from "../views/ProductView.vue"
import PiniaView from "../views/PiniaView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/userdata',
      name: 'userdata',
      component: UserDataView
    },
    {
      path: '/emits',
      name: 'emits',
      component: ParentView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView
    }
  ]
})

export default router
