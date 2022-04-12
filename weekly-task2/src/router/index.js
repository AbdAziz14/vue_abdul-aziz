import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/layout/defaultLayout.vue'
import DefaultView from '@/views/defaultView.vue'
import HomeView from '../views/HomeView.vue'
import SectionView from '@/views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'homeAll',
        component: DefaultView,
        children: [
          {
            path: '',
            name: 'HomeView',
            component: HomeView
          },
          {
            path: ':section',
            name: 'SectionView',
            component: SectionView
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
