<template>
<div class="recommend">
  <Scroll ref="scroll">
    <div class="scroll-content" slot="scroll-content">
      <!-- swiper -->
      <div class="sider">
        <swiper v-if="banners.length" class="main-sider" :options="swiperOption">
          <swiper-slide v-for="item in banners" :key="item.imageUrl">
            <img :src="item.imageUrl" @click="bannerClick(item)">
          </swiper-slide>
          <swiper-pagination slot="pagination"></swiper-pagination>
        </swiper>
      </div>
      <!-- 五个按钮 -->
      <div class="vm-lists">
        <!-- 每日推荐 -->
        <router-link class="list-entry" to="/main/daily">
          <!-- <img src="assets/images" alt=""> -->
          <span class="entry-name">每日推荐</span>
        </router-link>
        <router-link class="list-entry" to="/main/sheet">
          <svg-icon icon-class="sheet"></svg-icon>
          <span class="entry-name">歌单</span>
        </router-link>
        <router-link class="list-entry" to="/main/rank">
          <svg-icon icon-class="rank"></svg-icon>
          <span class="entry-name">排行榜</span>
        </router-link>
        <router-link class="list-entry" to="/main/radio">
          <svg-icon icon-class="radio"></svg-icon>
          <span class="entry-name">电台</span>
        </router-link>
        <router-link class="list-entry" to="/main/live">
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
  data () {
    return {
      banners: [],
      swiperOptions: {
        notNextTick: true,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  methods: {
    async getBanner () {
      // let res = await this.$store.dispatch()
    }
  }
}
</script>