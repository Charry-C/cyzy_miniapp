<script setup>
const mock={
    time:{
        "startDate": "2024-03-01",
        "endDate": "2024-04-01"
    },
    location:"佛山校区"

}

</script>

<template>
    <view class="detail-box root">
        <view class="title">关于招聘</view>
        <view class="tiem"><view style="font-size: 4.3vw; font-weight: bold; padding: 1vh 0;" ><uni-icons type="fire"></uni-icons>招聘时间</view>{{ mock.time.startDate }} 至 {{ mock.time.endDate }}</view>
        <view class="location"><view style="font-size: 4.3vw; font-weight: bold; padding: 1vh 0;"><uni-icons type="location"></uni-icons>地点</view>{{ mock.location }}</view>
    </view>
  
</template>



<style lang="scss">
.root{
    --bigFont:5vw;
    --middleFont:4vw;
    --samllFont:3.3vw
}
.detail-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    .title{
        font-weight: bold;
        font-size: var(--bigFont);
    }
    .tiem{
        font-size: var(--middleFont);
    }
}
</style>