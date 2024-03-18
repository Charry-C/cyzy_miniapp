<script setup>

let props=defineProps(['topTitleDesc'])


</script>

<template>
  <view class="top-title-desc">
    {{ topTitleDesc }}
  </view>
</template>



<style lang="scss">
.top-title-desc{
    font-size: 5vw;
}

</style>