import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { lazyReactInVue } from 'vuereact-combined'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      path: '/reactInVue1',
      name: 'reactInVue1',
      component: () => import( '../views/demo/reactInVue1')
  },
  {
      path: '/reactInVue2',
      name: 'reactInVue2',
      component: () => import( '../views/demo/reactInVue2')
  },
    {
        path: '/reactAntdInVue',
        name: 'reactAntdInVue',
        component: () => import( '../views/demo/reactAntdInVue')
    },
    {
        path: '/lazyReactInVue',
        name: 'lazyReactInVue',
        component: lazyReactInVue(() => import( '../react_app/cc.jsx'))
    },
    {
        path: '/hackthonDemo1',
        name: 'hackthonDemo1',
        component: () => import( '../views/demo/hackthonDemo1')
    },
    {
        path: '/abc',
        name: 'abc',
        component: () => import( '../views/demo/reactAntdInVue1')
    }
]

const router = new VueRouter({
  routes
})

export default router
