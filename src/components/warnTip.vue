<script setup>

let props=defineProps(['warnTip'])

</script>

<template>
  <view class="warn-tip">
    {{ warnTip }}
  </view>
</template>



<style lang="scss">
    .warn-tip{
        color: red;
        font-size: 3vw;
    }
</style>