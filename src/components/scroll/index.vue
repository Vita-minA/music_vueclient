<template>
<div class="bt-scroll">
  <slot name="scroll-header"></slot>
  <div class="wrapper" ref="wrapper" style="{background: background}">
    <div class="content">
      <slot name="scroll-content"></slot>
      <div class="pullup-wrapper" v-if="needPullUp">
        <div class="before-trigger" v-if="!isPullUpLoad">
          <loading :vertical="false" height="60px"></loading>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import BScroll from 'better-scroll'
import Loading from '@components/loading'
export default {
  data() {
    return {
      scroll: null,
      isPullUpLoad: false
    }
  },
  components: {
    Loading
  },
  props: {
    background: {
      type: String,
      default: '#fff'
    },
    click: {
      type: Boolean,
      default: true
    },
    // 是否可以上拉加载
    needPullUp: {
      type: Boolean,
      default: false
    },
    // 是否可以下拉加载
    needPullDown: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // initScroll () {
    //   let data = {}
    //   let pullDownRefresh = {
    //     threshold: 50,
    //     stop: 20
    //   }
    //   let pullUpLoad = {
    //     threshold: 50,
    //   }
    //   // if (this.needPullDown) data.pullDown
    // }
  }
}
</script>