import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      { path: 'home', component: () => import('@/views/Home') },
      { path: 'area', component: () => import('@/views/Area') },
      {
        path: 'houseinfo',
        component: () => import('@/views/HouseInfo')
      },
      { path: 'user', component: () => import('@/views/User') }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/User/component/FavorateList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
