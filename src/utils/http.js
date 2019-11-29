import vueProject from '@/main.js'
import axios from 'axios'
// 全局的音乐播放 api 地址
const MUSIC_API = process.env.VUE_APP_MUSIC_URL
// axios 配置
let http = axios.create({
  timeout: 15000,
  withCredentials: true,
  baseURL: MUSIC_API,
  params: {
    ts: new Date().getTime()
  }
})
// 请求拦截
http.interceptors.request.use(function (config) {
  // 在这里放置你想要做的
  return config
}, function (error) {
  // 放你想要做的
  return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use(res => {
  // 如果成功就返回
  if (res.data.code === 200) {
    return Promise.resolve(res)
  }
  // if ('success' in res.data) {
  //   console.log(res.data)
  //   return Promise.resolve(res)
  // }
  if (res.data.code === 404) {
    return Promise.reject(res.data)
  }
  let msg = res.data.msg ? res.data.msg : '数据请求报错'
  // 报错专用
  vueProject && vueProject.$msg && vueProject.$msg({text: msg, background: '#FF3366'})
  return Promise.reject(res)
}, error => {
  return Promise.reject(error)
})
export default http