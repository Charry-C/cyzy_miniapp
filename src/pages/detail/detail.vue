<script setup>
import recruitDetailPage from './Recruit_detail/recruitDetailPage.vue'

//获取屏幕安全距离
const {safeAreaInsets}=uni.getSystemInfoSync()




</script>

<template>
    <view class="top-nav" :style="{'paddingTop':safeAreaInsets.top+40+'px'}">
    </view>
    <recruitDetailPage :change="safeAreaInsets"/>
    

</template>



<style lang="scss">
.top-nav{
    background-image: linear-gradient(180deg, #5effdc 0%, #95fffb 50%,#ffff 100%,);

}


</style>