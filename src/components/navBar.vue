<script setup>
// 获取屏幕安全距离
import searchCom from './searchCom.vue';
const { safeAreaInsets } = uni.getSystemInfoSync()
const props = defineProps(['title', 'isNeedSearch'])

</script>
<template>
  <view class="top-box" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <view class="nav-title">{{ props.title }}</view>
    <searchCom v-if="props.isNeedSearch" />
  </view>
</template>
<style lang="scss">
.top-box {
  padding: 2vw;
  background-image: linear-gradient(180deg, rgba(0, 204, 255, 0.501) 0%, rgba(255, 255, 255, 0.464) 100%);

  .nav-title {
    padding: 3vw;
    font-weight: bolder;
    font-size: 6vw;
    color: #fff;
  }
}
</style>
