<script setup>
import { onLoad } from "@dcloudio/uni-app"
import {ref} from 'vue'
import recruitDetail from './Recruit_detail/recruitDetail.vue'
import meetDetail from './Meet_detail/meetDetail.vue';
import { useFormStore } from "@/stores/modules/formInfo"

//获取屏幕安全距离
const {safeAreaInsets}=uni.getSystemInfoSync()
const mode=useFormStore().mode

const goBack=()=>{
    uni.navigateBack()
}

</script>

<template>

    <view class="top-nav" :style="{'paddingTop':safeAreaInsets.top+40+'px'}">
        <view class="back" @click="goBack">
            <uni-icons type="left" size="30"></uni-icons>
        </view>
    </view>
    <view class="view con">
        <recruitDetail v-if="mode==1" />
        <meetDetail v-if="mode==2" />
    </view>

</template>



<style lang="scss">
.top-nav{
    position: sticky;
    top: 0vh;
    background-image: linear-gradient(180deg, #2bffd174 0%, #6afffa7c 50%,#ffffff15 100%,);

}
.back{
    position: absolute;
    top: 5.8vh;
    left: 3vw;
    font-weight: bold;
}


</style>