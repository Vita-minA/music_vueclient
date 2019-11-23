<template>
<div class="loading" :class="{'absolute' : absolute}">
  <div class="c" :class="{size, 'vertical' : vertical}" :style="{height : height}">
    <vue-loaders name="ball-scale-multiple" scale="1"></vue-loaders>
    <p>{{name}}</p>
  </div>
</div>
</template>
<script>
export default {
  props: {
    // 图片和文字是否垂直显示 默认水平显示
    vertical: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: '正在加载...'
    },
    // 显示大小 small 和 auto 两种
    size: {
      type: String,
      default: 'auto'
    },
    absolute: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '140px'
    }
  }
}
</script>