import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Content1 from '@/components/content1'
import Content2 from '@/components/content2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/content1',
      component: Index,
      children:[
          {path:'content1',component:Content1},
          {path:'content2',component:Content2}
      ]
    }
  ]
})
