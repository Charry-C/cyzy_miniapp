<script setup>


const mock={
    perDescription:"我掌握多项前端开发技能，包括Vue框架、uni-app框架的使用，基础也比较扎实，已经学习了一年的前端，学习了JavaScript，css，如果大家需要前端开发的人才可以与我联系，我现在缺项目经验，需要多参加比赛学习",
}


</script>

<template >
    <view class="per-desc-box">
        <view class="title">个人简介</view>
       <view class="value">
        {{ mock.perDescription }}
       </view>
    </view>
</template>



<style lang="scss">
.per-desc-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    .title{
        font-size: 5vw;
        font-weight: bold;
    }
    .value{
        margin-top: 2vh;
        font-size: 4vw;
        padding: 3vw;
    }


}

</style>