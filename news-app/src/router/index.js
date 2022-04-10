import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '@/layout/defaultLayout.vue'
import DefaultView from '@/views/defaultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: DefaultView,
        children: [
          {
            path: '',
            name: 'HomeAll',
            component: HomeView
          },
          {
            path: '/detail',
            name: 'detail',
            component: () => import('../views/AboutView.vue')
          },
          {
            path: '/:type',
            name: 'HomeType',
            component: HomeView
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
