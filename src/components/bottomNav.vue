<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: Object
})


</script>

<template>
  <view class="bottom-nav">
    <view class="bottom-nav-con">
      <view class="collect-icon"></view>
      <view class="contract">立即沟通</view>
    </view>
  </view>
</template>

<style lang="scss">
.bottom-nav {
  position: sticky;
  bottom: 0px;
  height: 8vh;
  color: #ffffff;
  font-size: 4vw;
  background-color: rgb(255, 255, 255);

  .bottom-nav-con {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;

    .collect-icon {
      width: 5vh;
      height: 5vh;
      background-color: rgb(0, 0, 0);
    }

    .contract {
      width: 60vw;
      height: 5vh;
      background-color: rgb(0, 0, 0);
      border-radius: 4vw;
      text-align: center;
      line-height: 5vh;
    }
  }
}
</style>
