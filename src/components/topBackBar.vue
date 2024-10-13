<script setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
const goBack = () => {
  uni.navigateBack()
}
</script>

<template>
  <view class="top-nav" :style="{ 'paddingTop': safeAreaInsets.top + 40 + 'px' }">
    <view class="back" @click="goBack">
      <uni-icons type="left" size="30"></uni-icons>
    </view>
  </view>

</template>

<style lang="scss">
.top-nav {
  position: sticky;
  top: 0vh;
  background-image: linear-gradient(180deg, #2bffd174 0%, #6afffa7c 50%, #ffffff15 100%, );

}

.back {
  position: absolute;
  top: 5.8vh;
  left: 3vw;
  font-weight: bold;
}
</style>
