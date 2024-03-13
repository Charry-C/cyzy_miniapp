<script setup>
//
import {ref} from 'vue'

/**
 * 0：都没选
 * 1：选择佛山
 * 2：选择广州
 * 3：校区不限
 */
const kindSelect=ref(0)

const selectBox=(select)=>{
    console.log(select);
    kindSelect.value=select
    uni.vibrateShort()
}
</script>

<template>
  <view class="select-campus">
    <view class="title">请选择你面向招募的校区</view>
    <view class="select-box-area">
        <view class="select-box" :class="{ 'active-select': kindSelect === 1 }" @click="selectBox(1)">
            <view class="top-title">
                <view class="campus">佛山校区</view>
                <label class="radio"><radio :checked="kindSelect=== 1" /></label>
            </view>
        </view>
        <view class="select-box" :class="{ 'active-select':kindSelect==2 }" @click="selectBox(2)">
            <view class="top-title">
                <view class="campus">广州校区</view>
                <label class="radio"><radio :checked="kindSelect=== 2" /></label>
            </view>
        </view>
        <view class="select-box" :class="{ 'active-select':kindSelect==3 }" @click="selectBox(3)">
            <view class="top-title">
                <view class="campus">校区不限</view>
                <label class="radio"><radio :checked="kindSelect=== 3" /></label>
            </view>
        </view>

    </view>
  </view>
</template>

<style lang="scss">
//
.select-campus{
    .title{
        margin: 12vw 0 10vw 0;
        font-size: 6.5vw;
        text-align: center;
    }
    .select-box-area{
        display: flex;
        flex-direction: column;
        .select-box{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 95vw;
            height: 10vh;
            border: 0.5vw solid #ebebeb;
            margin: 3vw auto;
            padding: 5vw 5vw 7vw 5vw;
            border-radius: 2vw;
            .top-title{
                display: flex;
                justify-content: space-between;
                margin-bottom: 9vw;
                .campus{
                    font-size: 5vw;
                    font-weight: bold;
                }
            }
        }
        .active-select{
            border: 0.5vw solid #108a00;
            background-color: #f7faf7;
        }
    }
}

</style>