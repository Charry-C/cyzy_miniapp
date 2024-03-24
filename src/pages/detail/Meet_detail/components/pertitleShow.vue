<script setup>


const mock={
    position:"前端开发工程师",
    salary:""
}


</script>

<template >
    <view class="pertitle-box">
        <view class="salary" v-if="mock.salary">{{mock.salary}}￥/次</view>
        <view class="position-box">{{mock.position}}</view>
        <view class="verify"><uni-icons type="checkbox-filled"></uni-icons> 学生认证</view>
    </view>
</template>



<style lang="scss">
.pertitle-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    padding-top: 0vh;
    margin: 2vh 2vw;

    .position-box{
        font-size: 7vw;
        font-weight: bold;
        margin-bottom: 3vh;
    }
    .salary{
        float: right;
        margin-top: 3vw;
        font-size: 5vw;
        font-weight: bold;
    }
    .verify{
        color: #00b13e;
        font-weight: bold;
    }

}

</style>