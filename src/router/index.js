import Vue from 'vue'
import Router from 'vue-router'
import DemoRouter from './modules/demo.js'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/login')
    },
    {
      path:'/',
      name:'layout',
      component: () => import('@/views/layout/layout'),
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component: () => import('@/views/layout/index')
        },
      ]
    },
    
    // DemoRouter,
    {
      path:'*',
      redirect:'/404'
    },
    {
      path:'/404',
      name:'404',
      component: () => import('@/views/404')
    },
    {
      path:'/500',
      name:'500',
      component: () => import('@/views/500')
    },
  ]
  
})
export default router;
