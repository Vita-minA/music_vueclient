<template>
  <div class="recommend">
    <Scroll ref="scroll">
      <div class="scroll-content"
           slot="scroll-content">
        <!-- swiper -->
        <div class="sider">
          <swiper v-if="banners.length"
                  class="main-sider"
                  :options="swiperOption">
            <swiper-slide v-for="item in banners"
                          :key="item.imageUrl">
              <img :src="item.imageUrl"
                   @click="bannerClick(item)">
            </swiper-slide>
            <!-- <swiper-pagination slot="pagination"></swiper-pagination> -->
            <div class="swiper-pagination"
                 slot="pagination"></div>
          </swiper>
        </div>
        <!-- 五个按钮 -->
        <div class="vm-lists">
          <!-- 每日推荐 -->
          <router-link class="list-entry"
                       to="/main/daily"
                       tag="span">
                       <Calendar></Calendar>
            <span class="entry-name">每日推荐</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/sheet"
                       tag="span">
            <svg-icon icon-class="sheet"></svg-icon>
            <span class="entry-name">歌单</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/rank"
                       tag="span">
            <svg-icon icon-class="rank"></svg-icon>
            <span class="entry-name">排行榜</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/radio"
                       tag="span">
            <svg-icon icon-class="radio"></svg-icon>
            <span class="entry-name">电台</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/live"
                       tag="span">
            <svg-icon icon-class="live"></svg-icon>
            <span class="entry-name">直播</span>
          </router-link>
        </div>
        <!-- 推荐表单 -->
        <GroupSheet api="RECOMMEND_SHEET_LISTS"></GroupSheet>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '@components/scroll'
import GroupSheet from '@components/groupsheet'
import Calendar from '@components/calendar'
export default {
  components: {
    Scroll,
    GroupSheet,
    Calendar
  },
  data() {
    return {
      banners: [],
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination'
      }
    }
  },
  methods: {
    async getBanner() {
      let res = await this.$store.dispatch('BANNER_LISTS')
      this.banners = res.data.banners
    },
    // 点击 banner 的事件
    bannerClick(item) {
      switch (item.targetType) {
        // 如果是首歌的话
        case 1:
          this.$router.push({
            path: '/main/play',
            query: {
              id: item.targetId
            }
          })
          break
        // 歌单详情
        case 10:
          this.$router.push({
            path: '/main/playlist',
            query: {
              id: item.targetId,
              type: 'album'
            }
          })
          break
        case 1000:
          this.$router.push({
            path: '/main/playlist',
            query: {
              id: item.targetId,
              type: 'sheet'
            }
          })
          break
        default:
          return
      }
      if (item.url) {
        window.location.href = item
      }
    }
  },
  mounted() {
    this.getBanner()
  }
}
</script>

<style>
.recommend {
  position: absolute;
  background: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.recommend .scroll-content {
  height:auto;
}
.recommend .scroll-content .sider{
  width: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
}
.recommend .scroll-content .sider .main-sider {
  position: relative;
}
.recommend .scroll-content .sider .main-sider::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 66%;
  right: 0;
  left: 0;
  background: var(--primary_color);
}
.recommend .scroll-content .sider .main-sider .swiper-slide{
  padding: 0.35rem;
  box-sizing: border-box;
}
.recommend .scroll-content .sider .main-sider .swiper-slide img{
  display: block;
  width: 100%;
  border-radius: 0.2rem;
}
.recommend .scroll-content .vm-lists {
  margin-top: 0.3rem;
  display: flex;
  width: 100%;
  align-items: center;
}
.recommend .scroll-content .vm-lists .list-entry {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recommend .scroll-content .vm-lists .list-entry .svg-icon {
  padding: 0.2rem;
  fill: #fff;
  height: 0.8rem;
  width: 0.8rem;
  background-color: var(--icon_red);
  border-radius: 50%;
}
.recommend .scroll-content .vm-lists .list-entry span {
  margin-top: 0.3rem;
  line-height: 1;
  color: var(--f_text_color);
  font-family: monospace;
  font-size: var(--f_auto_l);
}
</style>