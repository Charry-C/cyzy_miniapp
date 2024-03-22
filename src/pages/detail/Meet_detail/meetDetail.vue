<script setup>
import pertitleShoew from './components/pertitleShow.vue'
import perInfo from './components/perInfo.vue'
import perdescShow from './components/perdescShow.vue'
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
    <view class="contacts">
        <view class="btn" @click="getContacts">GET CONTACT</view>
    </view>
</template>



<style lang="scss">
.contacts{
    position: fixed;
    bottom: 0;
    height: 8vh;
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
        background-color: #000000;
    }
}
</style>