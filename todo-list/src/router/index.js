import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import TodoDetailView from '../views/DetailTodoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/todo/:detailId',
    name: 'todoDetailView',
    component: TodoDetailView,
    props: true
  },
  {
    path: '/apollo',
    name: 'ApolloView',
    component: () => import('../views/ApolloView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
