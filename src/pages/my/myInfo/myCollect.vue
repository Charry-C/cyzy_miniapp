<script setup>
import topBackBar from '@/components/topBackBar.vue';
import tabCom from '@/pages/index/components/tabCom.vue';

</script>
<template>
  <topBackBar />
  <view class="my-collect"> 我的收藏 </view>
  <tabCom :is-only-show="true" />
</template>
<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.my-collect {
  text-align: center;
  font-size: 6vw;
  padding: 3vw 0 5vw 0;
  color: #22cbff;
  font-weight: 700;
}
</style>
