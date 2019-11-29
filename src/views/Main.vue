// app的框架
// 包含底部菜单栏和盒子
<template>
  <div class="vm-main">
    <!-- <audio id="myAudio" ref="myAudio" :src="musicPlaylingList && musicPlaylingList.id ? 'http://music.163.com/song/media/outer/url?id=' + musicPlaylingList.id + '.mp3' : ''"></audio> -->
    <router-link class="fix-music-btn icon-menu easy-click"
                 v-show="isPlayRouter"
                 to="/main/play"></router-link>
    <Nav>
      <!-- <div class="content-blurred"
           slot="content-blurred">
        <router-view v-if="$route.meta.keepAlive"
                     class="model-view"
                     :class="{'isFull': $route.meta.isFull}"></router-view>
      </div> -->
    </Nav>
    <!-- 切换走的动画效果 -->
    <transition :name="$route.meta.transition">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"
                     class="model-view"
                     :class="{'isFull': $route.meta.isFull}"></router-view>
      </keep-alive>
    </transition>
    <!-- 切换回来的动画效果 -->
    <transition :name="$route.meta.transition">
      <router-view v-if="!$route.meta.keepAlive"
                   class="model-view"
                   :class="{'isFull': $route.meta.isFull}"></router-view>
    </transition>
  </div>
</template>
<script>
import Nav from '@components/nav'
// import music from 'utils/music.js'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Nav
  },
  created() {
    // this.$dutils.utils.console(' this is CloudMusic 1.0', {
    //   isMax: false,
    //   colors: ['#d299c2', '#fef9d7']
    // })
  },
  computed: {
    isPlayRouter() {
      // return (!this.$route.meta.hideFixedMenu && !this.$dutils.exp.isEmptyObject(this.musicPlayList) && this.menuStatus)
      // return (!this.$route.meta.hideFixedMenu && this.menuStatus)
      return false
    },
    ...mapState({
      musicPlayList: state => state.Music['MUSIC_PLAYING_DETAL'],
      menuStatus: state => state.Music['MUSIC_SHOW_FIXED_MENU']
    })
  },

  mounted() {
    // music.initAudioEvent(this.$refs.myAudio)
  },
}
</script>
<style scoped>
.vm-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.vm-main .fix-music-btn {
  position: fixed;
  top: 0;
  right: 0;
  height: var(--auto_h);
  width: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  font-size: var(--f_auto_l);
  color: var(--text_active);
  transition: (all 0.3s);
  z-index: 11;
}
.vm-main .model-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--NAV_H);
}
.vm-main .model-view.isFull {
  bottom: 0;
}
.vm-main .cp-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--NAV_H);
}
.vm-main audio {
  display: none;
}
.router-link-active {
  text-decoration: none;
}
</style>