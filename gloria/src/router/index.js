import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'
import CreateBot from '@/components/CreateBot'
import TeamMembers from '@/components/teamMembers'
import Dashboard from '@/components/Dashboard'
import Agents from '@/components/LiveAgents'
import AccessErr from '@/components/AccessErr'
import Files from '@/components/Files'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
   
    {
        path: '/teamMembers',
        name: 'teamMembers',
        component: TeamMembers,
    },
    {
        path:'/create',
        name:'create',
        component:CreateBot,
    },
    {
      path:'/',
      name:'dashboard',
      component:Dashboard,
  },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard,
  },
   {
        path: '/chat',
        name: 'chat',
        component: Chat,
      },
    {
      path:'/files',
      name:'files',
      component:Files,
  },
  {
    path:'/agents',
    name:'agents',
    component:Agents,
},
    {
      path: '*', redirect: '/'
    }
  ],
  
})