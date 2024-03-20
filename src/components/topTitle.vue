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
        text-align: center;
        padding: 2vh 3vw 5vh 3vw ;
        font-size: 6.2vw;
    }
</style>