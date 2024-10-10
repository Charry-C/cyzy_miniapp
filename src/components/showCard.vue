<script setup>
import { ref, reactive, defineProps } from 'vue'

const props = defineProps({
  data: Object,
  mode: String
})
// 前往卡片详情页
function goDetail(mode) {
  uni.navigateTo({ url: '../detail/detail?mode=' + mode })
}

</script>

<template>
  <view class="card" @click="goDetail(props.mode)">
    <view class="title">{{ props.data.title }}</view>
    <view class="kind">{{ props.data.kind }}</view>
    <slot name="content"></slot>
    <view class="detail-info">
      <view class="publisher">
        <view class="avatar"></view>
        <view>{{ props.data.publisher }}</view>
      </view>
      <view class="location">{{ props.data.location }}</view>
    </view>
  </view>
</template>

<style lang="scss">
.card {
  padding: 3vh 4vw 1vh 4vw;
  margin: 0 2vw;
  margin-bottom: 3vw;
  border-radius: 3vw;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;

  &:nth-child(1) {
    margin-top: 3vw;
  }

  .salary {
    float: right;
    display: flex;
    --font: 3vw;
    align-items: flex-end;
    font-weight: bold;
    font-size: 4vw;

    .icon {
      font-size: var(--font);
    }
  }


  .title {
    font-size: 4.8vw;
    font-weight: bolder;
    margin-bottom: 2vw;
  }

  .kind {
    font-size: 3.5vw;
    margin-bottom: 2vw;
  }



  .detail-info {
    display: flex;
    font-size: 3.3vw;
    justify-content: space-between;
    align-items: center;

    .publisher {
      display: flex;
      align-items: center;

      .avatar {
        width: 8vw;
        height: 8vw;
        margin-right: 2vw;
        background-color: #22d3ff;
        border-radius: 50%;
      }
    }
  }
}
</style>
