<script setup>
import pertitleShoew from './components/pertitleShow.vue'
import perInfo from './components/perInfo.vue'
import perdescShow from './components/perdescShow.vue'
import showTime from '@/components/showTime.vue'
import bottomNav from '@/components/bottomNav.vue'
const getContacts = () => {
  uni.showToast({
    icon: "none",
    title: "ok"
  })
}

// 获取详细信息(请求卡片详情页接口/user/card/info/?type=''&id=)
// 传入数据至组件将数据还原即可


</script>

<template>
  <pertitleShoew />
  <perInfo />
  <perdescShow />
  <view class="free-time">
    <view class="tip">空闲时间表</view>
    <showTime />
  </view>
  <bottomNav />
</template>



<style lang="scss">
.free-time {
  margin: 3vw 3vh;
  padding-bottom: 3vh;

  .tip {
    margin-bottom: 3vh;
    font-size: 5vw;
    font-weight: bold;
  }
}
</style>
