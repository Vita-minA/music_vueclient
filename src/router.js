import Vue from 'vue'
import Router from 'vue-router'
// import { Hash } from 'crypto';

// import Main from './views/Main.vue'
const Main = () => import('./views/Main.vue')

// 底栏切换的五个页面
const Home = () => import('./views/home')
const Video = () => import('./views/video')
const Mine = () => import('./views/mine')
const Friend = () => import('./views/friend')
const Account = () => import('./views/account')

// 首页的几类组件
const Recommend = () => import('./views/home/recommend')
// const Song = () => import('./views/home/song')
const Search = () => import('./views/home/search')
// const Play = () => import('./views/home/play')
// const Daily = () => import('./views/home/daily')
const Playlist = () => import('./views/home/sheet/playlist')
const Sheet = () => import('./views/home/sheet')
const Rank = () => import('./views/home/rank')
const Radio = () => import('./views/home/radio')

const Live = () => import('./views/home/live')

Vue.use(Router)

/**
 * 配置路由
 * meta对象的各个属性含义
 */

const router = new Router({
  // mode: 'history'
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'home',
      redirect: '/main/home',
      component: Main,
      // 首页
      children: [{
          path: '/main/home',
          name: 'home',
          redirect: '/main/home/recommend',
          component: Home,
          meta: {
            keepAlive: true
          },
          children: [{
            path: '/main/home/recommend',
            name: 'homerecommend',
            component: Recommend,
            meta: {
              keepAlive: true
            }
          }]
        },
        //  视频
        {
          path: '/main/video',
          name: 'video',
          component: Video,
          meta: {
            keepAlive: true
          }
        },
        //  我的
        {
          path: '/main/mine',
          name: 'mine',
          component: Mine,
          meta: {
            keepAlive: true
          }
        },
        //  云村
        {
          path: '/main/friend',
          name: 'friend',
          component: Friend,
          meta: {
            keepAlive: true
          }
        },
        //  账号
        {
          path: '/main/account',
          name: 'account',
          component: Account,
          meta: {
            keepAlive: true
          }
        },
        //  歌单的列表
        {
          path: '/main/sheet',
          name: 'sheet',
          component: Sheet,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home']
          }
        },
        //  歌单页面
        {
          path: '/main/playlist',
          name: 'playlist',
          component: Playlist,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home']
          }
        },
        // 电台
        {
          path: '/main/radio',
          name: 'radio',
          component: Radio,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home']
          }
        },
        // 直播
        {
          path: '/main/live',
          name: 'live',
          component: Live,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home']
          }
        },
        //  排行榜
        {
          path: '/main/rank',
          name: 'rank',
          component: Rank,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home']
          }
        },
        //  搜索页面
        {
          path: '/main/search',
          name: 'search',
          component: Search,
          meta: {
            keepAlive: true,
            transition: 'fade-left',
            activeRouter: ['/main/home'],
            hideFixedMenu: true
          }
        }
      ]
    }
  ]
})

export default router