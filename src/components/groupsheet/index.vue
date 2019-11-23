<template>
<div class="group-sheet">
  <div class="title">
    <span>{{sheetName}}</span>
    <i class="icon-circle-right"></i>
  </div>
  <div class="content" v-if="sheetList.length">
    <router-link class="sheet-list"></router-link>
  </div>
</div>
</template>