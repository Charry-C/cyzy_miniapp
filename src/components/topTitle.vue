<script setup>

let props=defineProps(['topTitle'])

</script>

<template>
  <view class="top-title">
    {{ topTitle }}
  </view>
</template>



<style lang="scss">
    .top-title{
        font-size: 6.5vw;
        font-weight: bold;
    }
</style>