import Vue from 'vue'
import Router from 'vue-router'
import Players from '@/components/Players'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/jogadores',
      name: 'Jogadores',
      component: Players
    }
  ]
})
