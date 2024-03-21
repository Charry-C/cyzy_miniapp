<script setup>
const mock=[
    {
        department:"外联部",
        description:"外联部负责拉赞助,获得社团资金"
    },
    {
        department:"宣传部",
        description:"宣传部负责社团的宣传任务,是社团的广告者"
    },
    {
        department:"学术部",
        description:"学术部负责策划活动"
    },
    {
        department:"秘书部",
        description:"秘书部负责社团资金的管理"
    },
]

</script>

<template>
    <view class="dep-card-box root">
        <view class="title">部门介绍</view>
        <view class="dep-card" v-for="(dep,index) in mock" :key="index">
            <view class="dep-title">{{ dep.department }}</view>
            <view class="dep-desc">{{ dep.description }}</view>
        </view>
    </view>
  
</template>



<style lang="scss">
.root{
    --bigFont:5vw;
    --middleFont:4.5vw;
    --samllFont:3.8vw
}
.dep-card-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    .title{
        font-size: var(--bigFont);
        font-weight: bold;
    }
    .dep-card{
        border-bottom: 0.5vw dotted #547c51;
        padding: 1vh 0;
        .dep-title{
            font-weight: bold;
            font-size: var(--middleFont);
        }
        .dep-desc{
            margin-top: 0.5vh;
            font-size: var(--samllFont);
        }
        &:nth-last-child(1){
            border-bottom: none;
        }
    }
}
</style>