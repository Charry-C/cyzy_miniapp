<script setup>


const mock={
    perDescription:"我是一个实力很强的选手，我真的很牛逼我真的很牛逼我真的很牛逼，比蔡徐坤牛，补丁真纯真，不会玩元神，讨厌万源市呢的人",
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