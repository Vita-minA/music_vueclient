const API = {
  // 首页
  home: {
    // 轮播图广告
    BANNER_LISTS: `/banner`,

    // 音乐搜索
    MUSIC_SEARCH: `/search`,

    // 最新音乐
    NEW_SONG_LISTS: `/personalized/newsong`
  },
  // 歌单
  sheet: {
    // 获取推荐歌单
    RECOMMEND_SHEET_LISTS: `/personalized`,

    // 每日推荐歌曲
    RECOMMEND_SONGS_LISTS: `recommend/songs`,

    // 获取精品歌单
    HIGHT_QUALITY_SHEET_LISTS: `/top/playlist/highquality`
  }
}
export default API