<script setup>
import {ref} from 'vue'

const mock='广东财经大学数模研究社是学生自治的学术性社团，以“勤于数学思考，善于应用创新”为宗旨，以营造和宣扬学术文化氛围，利于为参加数模学生服务为目标。目的在于提高学生建立数学模型和运用计算机技术解决实际问题的综合能力，鼓励广财大学生踊跃参加课外科技活动，培养创造精神及合作意识。同时为该校组织参加全国数学建模大赛和美国数学建模大赛输送大量人才。'

</script>

<template>
    <view class="desc-box root">
        <view class="title">
            社团简介
        </view>
        <view class="desc">
            {{ mock }}
        </view>
    </view>
  
</template>



<style lang="scss">
.root{
    --bigFont:6vw;
    --middleFont:5vw;
    --samllFont:3.5vw
}
.desc-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    .title{
        font-size: var(--middleFont);
        font-weight: bold;
    }
    .desc{
        font-size: var(--samllFont);
        padding: 2vw;
    }
}
</style>