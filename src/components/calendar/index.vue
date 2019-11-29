<template>
  <!-- 随着时间显示今天的日期 -->
  <div class="calender">
    <svg-icon icon-class="calendar"></svg-icon>
    <span id="date">{{date}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: 0
    }
  },
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      var date = new Date();
      this.date = date.getDate();
    }
  }
}
</script>
<style scoped>
.calender {
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}
.calender #date {
  position: absolute;
  top: 0.22rem;
  right: 0.03rem;
  left: 0;
  bottom: 0;
  color: var(--icon_red);
  font-size: 0.3rem;
  font-weight: 600;
}
</style>