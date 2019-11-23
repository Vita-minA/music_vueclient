import * as types from '@/store/mutation-types'
import axios from '@/utils/http'
import API from '@/api/index'


let state = {}
const getters = {}
let actions = {}
let mutations = {}

// 获取 home banners 的信息
actions[types.BANNER_LISTS] = () => {
  return new Promise((resolve, reject) => {
    axios.get(API.home.BANNER_LISTS).then(res => {
      resolve(res)
    },err => {
      reject(err)
    })
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}