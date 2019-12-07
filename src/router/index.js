import Vue from 'vue'
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const Home = () => import('../views/Home.vue')
const Music = () => import("../views/Music.vue")
const Mainland = () => import("../views/music/mainland.vue")
const Movies = () => import("../views/music/movies.vue")
const Migumusic = () => import("../views/music/migumusic.vue")
const Hktw = () => import("../views/music/hktw.vue")
const Eur_usa = () => import("../views/music/eur_usa.vue")
const Jpn_kor = () => import("../views/music/jpn_kor.vue")
const Chatroom = () => import("../views/Chatroom.vue")
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/chatroom',
    component: Chatroom
  },
  {
    path: '/music',
    component: Music,
    redirect: '/music/migumusic',
    children: [{
        path: '/music/mainland',
        component: Mainland
      },
      {
        path: '/music/movies',
        component: Movies
      },
      {
        path: '/music/migumusic',
        component: Migumusic
      },
      {
        path: '/music/eur_usa',
        component: Eur_usa
      },
      {
        path: '/music/hktw',
        component: Hktw
      },
      {
        path: '/music/jpn_kor',
        component: Jpn_kor
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router