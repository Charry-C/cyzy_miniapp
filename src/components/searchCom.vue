<script setup>
// 获取屏幕安全距离
const titleName = defineProps(['title'])

</script>
<template>
  <view class="uni-form-item uni-column">
    <uni-search-bar class="uni-mt-10" bgColor="#fff" textColor="#656565" radius="100" placeholder="搜索关键词"
      clearButton="auto" cancelButton="none" />
  </view>
</template>
