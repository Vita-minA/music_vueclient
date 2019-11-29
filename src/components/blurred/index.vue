<template>
  <!-- 这个组件应该放在 nav 下面，而插槽中间应该放所有的内容的复制节点 -->
  <div class="my-blurred">
    <slot name="blurred-header"></slot>
    <div class="wrapper"
         ref="wrapper">
      <div class="content">
        <!-- 在这里放入外面content的复制 -->
        <slot name="blurred-content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.box = this.$refs.wrapper;
    this.box.addEventListener('scroll', () => {
      // 在这里获得 scrollTop ，并设置变量
      // this.style.setProperty("--scrollTop", -this.scrollTop);
      this.style.setProperty("--translation", `translated3d(0,-${this.scrollTop}px,0)`);
    })
  }
}
</script>
<style scoped>
.content {
  -webkit-transform: var(--translation);
  -moz-transform: var(--translation);
  transform: var(--translation);
}

</style>