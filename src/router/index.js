import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactsList from '../views/ContactsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts-list',
    component: ContactsList
  },
  {
    path: '/contact/:id',
    name: 'contact-show',
    component: () => import('../views/ContactShow.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
