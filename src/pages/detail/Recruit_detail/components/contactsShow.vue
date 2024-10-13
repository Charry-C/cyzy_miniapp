<script setup>

const mock = {
  wxId: "charryc",
  QrCode: Array(9).fill(0)
}

</script>

<template>
  <view class="contacts-box root">
    <view class="title">联系方式</view>
    <view class="contact-type">
      <view class="type">
        <view class="type-title">微信号:</view>
        <view class="type-value">{{ mock.wxId }}</view>
      </view>
      <view class="type" v-if="mock.QrCode.length > 0">
        <view class="type-title">群二维码</view>
        <view class="type-value">
          <view class="type-code" v-for="(code, index) in mock.QrCode" :key="index"></view>
        </view>
      </view>
    </view>
  </view>

</template>



<style lang="scss">
.root {
  --bigFont: 5vw;
  --middleFont: 4vw;
  --samllFont: 3.3vw
}

.contacts-box {
  border-bottom: 0.1vw solid #e8e8e8;
  padding: 3vw;
  margin: 0 2vw;

  .title {
    font-weight: bold;
    font-size: var(--bigFont);
  }

  .type {
    margin-bottom: 1vh;

    .type-title {
      padding: 1vh 0;
      font-size: var(--middleFont);
      font-weight: bold;
    }

    .type-value {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .type-code {
        width: 25vw;
        height: 25vw;
        margin: 2vh 0;
        background-color: rgb(189, 228, 255);
      }
    }

  }
}
</style>
