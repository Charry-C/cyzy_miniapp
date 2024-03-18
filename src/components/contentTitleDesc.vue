<script setup>
let props=defineProps(['contentTitleDesc'])


</script>

<template>
  <view class="content-title-desc">
    {{ contentTitleDesc }}
  </view>
</template>

<style lang="scss">
    .content-title-desc{
        font-size: 4vw;
    }
</style>