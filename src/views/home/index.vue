// 首页
<template>
  <div class="vm-home">
    <!-- 这里不动 -->
    <div class="fix-top">
      <!-- 搜索区域 -->
      <div class="search-area">
        <!-- 前面的图标 -->
        <!-- <i class="left icon-pencil easy-click"></i> -->
        <svg-icon icon-class="realizesong"
                  class="realizesong"></svg-icon>
        <!-- 输入框 -->
        <div class="input"
             @click="openSearch">
        <svg-icon icon-class="magglass"
                  class="magglass"></svg-icon>
          <span>搜索</span>
        </div>
        <svg-icon icon-class="rhythm"
                  class="rhythm"></svg-icon>        
      </div>
    </div>
    <!-- 下面的滚动区 -->
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  created() {

  },
  methods: {
    openSearch() {
      this.$router.push('/main/search')
    }
  }
}
</script>
<style scoped>
.vm-home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--NAV_H);
}
.vm-home .fix-top {
  height: var(--HEADER_H);
  width: 100%;
  background-color: var(--primary_color);
}
.vm-home .fix-top .search-area {
  height: var(--auto_h);
  padding-top: 0.2rem;
  width: 100%;
  background-color: var(--primary_color);
  display: flex;
  align-items: center;
}
.vm-home .fix-top .search-area .realizesong{
  fill: #ddd;
  flex: 0 0 15%;
}
.vm-home .fix-top .search-area .rhythm{
  fill: #ddd;
  flex: 0 0 15%;
}
.vm-home .fix-top .search-area .left {
  flex: 0 0 70%;
  margin: 0.1rem;
  color: var(--icon_f);
  font-size: var(--f_auto_l);
}
.vm-home .fix-top .search-area .input {
  /* text-align: center; */
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 0.4rem; */
  /* margin-right: 0.9rem; */
  height: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: rgb(219, 76, 68);
  /* background: rgba(255, 255, 255, 0.1); */
  z-index: 1;
  /* color: rgba(255, 255, 255, 0.8); */
  text-indent: 0.1rem;
  font-size: var(--f_small_l);
  padding: 0 0.44rem;
  box-sizing: border-box;
}
.vm-home .fix-top .search-area .input .magglass {
  /* display: inline-block; */
  fill: var(--icon_f);
  width: var(--f_search);
  opacity: 0.7;
}
.vm-home .fix-top .search-area .input span {
  /* display: inline-block; */
  font-size: var(--f_search);
  color: var(--icon_f);
  opacity: 0.7;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.vm-home .fix-top .nav_bar {
  height: calc(var(--HEADER_H) - var(--auto_h));
  display: flex;
  align-items: center;
  justify-content: center;
}
.vm-home .fix-top .nav_bar .nav_var_router {
  color: #fff;
  height: calc(var(--HEADER_H - var(--auto_h) - 0.1rem));
  font-size: var(--f_small_m);
  text-align: center;
  width: 1.5rem;
  position: relative;
  color: var(--text_noactive);
}
.vm-home .fix-top .nav_bar .nav_var_router::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--icon_f);
  width: 0.4rem;
  height: 0.04rem;
  display: none;
}
.vm-home .fix-top .nav_bar .nav_var_router .router-link-active {
  color: var(--text_active);
}
.vm-home .fix-top .nav_bar .nav_var_router .router-link-active::after {
  display: block;
}
.vm-home .home-content {
  position: fixed;
  width: 100%;
  top: var(--HEADER_H);
  bottom: var(--NAV_H);
  background: #fff;
}
</style>