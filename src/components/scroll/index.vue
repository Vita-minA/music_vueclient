<template>
  <div class="bt-scroll">
    <slot name="scroll-header"></slot>
    <div class="wrapper"
         ref="wrapper"
         style="{background: background}">
      <div class="content">
        <slot name="scroll-content"></slot>
        <div class="pullup-wrapper"
             v-if="needPullUp">
          <div class="before-trigger"
               v-if="!isPullUpLoad">
            <loading :vertical="false"
                     height="60px"></loading>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
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
    initScroll() {
      let data = {};
      let pullDownRefresh = {
        threshold: 50,
        stop: 20
      };
      let pullUpLoad = {
        threshold: 50
      };
      if (this.needPullDown) {
        data.pullDownRefresh = pullDownRefresh;
      }
      if (this.needPullUp) {
        data.needPullUp = pullUpLoad;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        },
        ...data
      })

      // 初始化事件
      this._resize()
      this._initPullUpLoad()
      this._initPullDownRefresh()
      this.finishPullUp()
      this.finishPullDown()
    },
    _initPullUpLoad() {
      if (this.needPullUp) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp', this)
        })
      }
    },
    _initPullDownRefresh() {
      if (this.needPullDown) {
        this.scroll.on('pullingDown', () => {
          this.$emit('pullingDown', this)
        })
      }
    },
    // 这里需要用到监听器吗？
    _resize() {
      window.addEventListener('resize', () => {
        if (!this.scroll || !this.scroll.enabled) {
          return;
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          if (this.scroll.isInTransition) {
            this._onScrollEnd();
          } else {
            if (this.autoplay) {
              this._play();
            }
          }
          this.refresh();
        }, 60);
      })
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    this.$nextTick(() => {
      let _this = this;
      setTimeout(function () {
        _this.initScroll()
      })
    })
  }
}
</script>
<style scoped>
.bt-scroll {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.bt-scroll .wrapper {
  width: 100%;
  height: 100%;
}
.bt-scroll .wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  top: 50%;
  left: 0;
  right: 0;
  background: #fff;
}
.bt-scroll .wrapper .content {
  background: #fff;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.bt-scroll .wrapper .content .pullup-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bt-scroll .wrapper .content .pullup-wrapper .before-tigger {
  font-size: var(--f_small_x);
}
.bt-scroll .wrapper .content .pullup-wrapper .before-tigger span {
  color: gray;
}
</style>