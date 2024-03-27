<script setup>
import pertitleShoew from './components/pertitleShow.vue'
import perInfo from './components/perInfo.vue'
import perdescShow from './components/perdescShow.vue'
import showTime from '@/components/showTime.vue'
const getContacts=()=>{
    uni.showToast({
        icon:"none",
        title:"ok"
    })
}
</script>

<template>
    <pertitleShoew />
    <perInfo />
    <perdescShow />
    <view class="free-time">
        <view class="tip">空闲时间表</view>
        <showTime />
    </view>
    <view class="contacts">
        <view class="btn" @click="getContacts">GET CONTACT</view>
    </view>
</template>



<style lang="scss">
.free-time{
    margin: 3vw 3vh; 
    padding-bottom:10vh;
    .tip{
        margin-bottom: 3vh;
        font-size: 5vw;
        font-weight: bold;
    }
}
.contacts{
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100vw;
    color: #ffffff;

    .btn{
        position: absolute;
        right: 50%;
        transform: translate(50%,-50%);
        top: 50%;
        width: 60vw;
        text-align: center;
        padding:  1.5vh 10vw;
        font-weight: bold;
        border-radius: 2vw;
        background-color: #0084ffd4;
    }
}
</style>