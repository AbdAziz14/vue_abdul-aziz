import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '@/layout/defaultLayout.vue'
import defaulView from '@/views/defaultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: defaulView,
        children: [
          {
            path: 'news',
            name: 'NewsView',
            component: HomeView
          }
        ]
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
