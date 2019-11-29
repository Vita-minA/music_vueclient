export default {
  // 返回听歌的用户数量 添加 万 亿等数级单位
  parseNumber: value => {
    return value >= 100000 ? (value >= 10000000 ? (value / 100000000).toFixed(1) + '亿' : Math.floor(value / 10000) + '万') : value
  }
}