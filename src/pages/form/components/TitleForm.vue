<script setup>
import VerifyStu from '@/components/VerifyStu.vue';
</script>

<template>
  <view class="title-form">
    <view class="tip">让我们来填写社团的完整名称吧！</view>
    <view class="small-tip">
        请您认真填写，以便审核快速通过~
    </view>
    <input class="uni-input" placeholder="请您填写社团名称" />
  </view>
  <VerifyStu/>
</template>

<style lang="scss">
//
.title-form{
    padding: 0 3vw;
    margin-bottom: 3vw;
    .tip{
        font-size: 6vw;
        margin: 10vw 0;
    }
    .small-tip{
        font-size: 3.5vw;
        margin-bottom: 5vw;
    }
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
}

</style>