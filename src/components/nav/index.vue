// 底部菜单栏
<template>
  <div class="cp-nav">
    <router-link v-for="item in mainRt"
                 tag="span"
                 :key="item.name"
                 :to="item.url"
                 class="model-router"
                 :class="isActiveRouter(item.url) ? 'active' : ''">
      <!-- <i :class="item.icon"></i> -->

      <svg-icon :icon-class="item.icon"></svg-icon>
      <span>{{item.name}}</span>
    </router-link>
    <!-- 实现 ios 模糊 -->
    <div class="wrapper"
         ref="wrapper">
      <div class="blurred">
        <slot name="content-blurred"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// import Blurred from '@/components/blurred';
export default {
  data() {
    return {
      mainRt: [
        {
          url: '/main/home',
          name: '发现',
          icon: 'home'
        },
        {
          url: '/main/video',
          name: '视频',
          icon: 'video'
        },
        {
          url: '/main/mine',
          name: '我的',
          icon: 'mine'
        },
        {
          url: '/main/friend',
          name: '云村',
          icon: 'friend'
        },
        {
          url: '/main/account',
          name: '账号',
          icon: 'account'
        }
      ]
    }
  },
  methods: {
    isActiveRouter(url) {
      if (this.$route.meta.activeRouter && this.$route.meta.activeRouter.length) {
        return this.$route.meta.activeRouter.some(item => item.includes(url))
      }
      return false
    }
  },
  components: {
    // Blurred
  },
  // mounted() {
  //   this.box = this.$refs.wrapper;
  //   this.box.addEventListener('scroll', () => {
  //     // 在这里获得 scrollTop ，并设置变量
  //     // this.style.setProperty("--scrollTop", -this.scrollTop);
  //     this.style.setProperty("--translation", `translated3d(0,-${this.scrollTop}px,0)`);
  //   })
  // },
  watch: {
    'this.$refs.wrapper.scrollTop': newVal => {
      this.style.setProperty("--translation", `translated3d(0,-${newVal}px,0)`);
    }
  }
}
</script>
<style scoped>
.cp-nav {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.8);
}
.cp-nav .model-router {
  flex: 0 0 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cp-nav .model-router .svg-icon {
  width: 0.6rem;
  height: 0.6rem;
  padding: 0.1rem;
  /* color: var(--icon_color_nav); */
}
.cp-nav .model-router span {
  font-size: var(--f_small_s);
  font-family: monospace;
  line-height: 1;
  margin-top: 0.1rem;
  color: var(--icon_color_nav);
}
.cp-nav .model-router .svg {
  margin: 0 auto;
  /* padding: 0 0.1rem; */
}
.cp-nav .model-router.router-link-active span {
  color: var(--icon_red);
}
/* .cp-nav .model-router.router-link-active .svg {
  background-color: var(--primary_color);
  /*  width: 30%; */
/* height: 0;
  padding-top: 15%;
  padding-bottom: 15%;  */
/* } */
.cp-nav .model-router.router-link-active .svg-icon {
  fill: #fff;
  background-color: var(--icon_red);
  border-radius: 50%;
}
.cp-nav .content-blurred {
  -webkit-transform: var(--translation);
  -moz-transform: var(--translation);
  transform: var(--translation);
}
</style>