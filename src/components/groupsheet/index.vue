<template>
  <div class="group-sheet">
    <div class="title">
      <span>{{sheetName}}</span>
      <i class="icon-circle-right"></i>
    </div>
    <div class="content"
         v-if="sheetList.length">
      <router-link class="sheet-list"
                   v-for="(item) in showList"
                   tag="span"
                   :key="item.picUrl"
                   :to="{path: '/main/listdetail', query: {id: item.id}}">
        <div class="sheet-image">
          <img :src="item.picUrl">
          <div class="high-quality"
               v-if="item.highQuality">
            <i class="icon-menu"></i>
          </div>
          <div class="tips">
            <svg-icon icon-class="play"></svg-icon>
            <span>{{item.playCount | parseNumber}}</span>
          </div>
        </div>
        <div class="sheet-name">
          {{item.name}}
        </div>
      </router-link>
    </div>
    <!-- <Loading v-else></Loading> -->
  </div>
</template>
<script>
import API from '@/api/index'
// import Loading from '@components/loading'
export default {
  data() {
    return {
      sheetList: []
    }
  },
  components: {
    // Loading
  },
  filters: {

  },
  computed: {
    // 为避免 v-if 和 v-for 一起使用
    showList: function () {
      return this.sheetList.filter((item, index) => {
        return index < 6
      })
    }
  },
  props: {
    // 请求的地址
    api: {
      type: String,
      default: 'RECOMMEND_SHEET_LISTS'
    },
    // 左上角歌单的名称
    sheetName: {
      type: String,
      default: '推荐歌单'
    },
    // 保留，
    parmas: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    // 初始化数据，通过传递不同的请求参数，获取不同的数据
    initData() {
      // 要搞清楚这个 this.$mutils 的来历
      this.$mutils.fetchData(API.sheet[this.api], this.parmas).then(res => {
        this.sheetList = res.data.result

      })
    }
  },
  created() {
    this.initData()
  }
}
</script>
<style>
.group-sheet {
  padding: 0.35rem;
  margin-top: 0.75rem;
  border-top: 1px solid;
  border-top-color: #eee;
}
.group-sheet .title {
  text-align: left;
  margin-bottom: 0.45rem;
}
.group-sheet .title span {
  font-family: var(--f_text_ios);
  font-weight: 400;
  font-size: 0.47rem;
  color: #101010;
}
.group-sheet .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: auto;
}
.group-sheet .content .sheet-list {
  width: 33%;
  margin-bottom: 0.6rem;
}
.group-sheet .content .sheet-list .sheet-image {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.group-sheet .content .sheet-list .sheet-image img {
  height: 2.87rem;
  border-radius: 0.1rem;
}
.group-sheet .content .sheet-list .sheet-image .tips {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  top: 0.05rem;
  bottom: 2.5rem;
  left: 1rem;
  right: 0.3rem;
  z-index: 100;
}
.group-sheet .content .sheet-list .sheet-image .tips .svg-icon {
  display: inline-block;
  flex: 0 0 20%;
  height: 0.35rem;
  fill: #fff;
}
.group-sheet .content .sheet-list .sheet-image .tips span {
  flex: 0 0 auto;
  font-size: 0.35rem;
  color: #fff;
}

.group-sheet .content .sheet-list .sheet-name {
  font-size: 0.34rem;
  font-weight: initial;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  padding: 0 0.15rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>