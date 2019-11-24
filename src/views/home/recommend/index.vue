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
                       to="/main/daily">
            <!-- <img src="assets/images" alt=""> -->
            <span class="entry-name">每日推荐</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/sheet">
            <svg-icon icon-class="sheet"></svg-icon>
            <span class="entry-name">歌单</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/rank">
            <svg-icon icon-class="rank"></svg-icon>
            <span class="entry-name">排行榜</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/radio">
            <svg-icon icon-class="radio"></svg-icon>
            <span class="entry-name">电台</span>
          </router-link>
          <router-link class="list-entry"
                       to="/main/live">
            <svg-icon icon-class="live"></svg-icon>
            <span class="entry-name">直播</span>
          </router-link>
          <!-- 推荐表单 -->

        </div>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '@components/scroll'
export default {
  components: {
    Scroll
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
  padding: 0.15rem;
  box-sizing: border-box;
}
.recommend .scroll-content .sider .main-sider .swiper-slide img{
  display: block;
  width: 100%;
  border-radius: 0.2rem;
}
</style>