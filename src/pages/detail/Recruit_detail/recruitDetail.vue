<script setup>
import titileShow from './components/titileShow.vue';
import detailShow from './components/detailShow.vue';
import depcardShow from './components/depcardShow.vue';
import clubAlblumShow from './components/clubAlblumShow.vue';
import contactsShow from './components/contactsShow.vue';
import descShow from './components/descShow.vue';
import bottomNav from '@/components/bottomNav.vue';

// 获取详细信息(请求卡片详情页接口/user/card/info/?type=''&id=)
// 传入数据至组件将数据还原即可



</script>

<template>
  <titileShow />
  <descShow />
  <detailShow />
  <clubDescShow />
  <depcardShow />
  <clubAlblumShow />
  <contactsShow />
  <bottomNav />
</template>



<style lang="scss"></style>
