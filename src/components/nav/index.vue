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

  </div>
</template>
<script>
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
  }
}
</script>
<style scoped>
.cp-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
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
  color: var(--primary_color);
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
  background-color: var(--primary_color);
  border-radius: 50%;
}
</style>