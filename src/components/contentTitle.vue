<script setup>
let props=defineProps(['contentTitle'])


</script>

<template>
  <view class="content-title">
    {{ contentTitle }}
  </view>
</template>

<style lang="scss">
    .content-title{
        font-size: 5vw;
        font-weight: bold;
    }
</style>