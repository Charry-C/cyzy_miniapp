<script setup>
import {ref} from 'vue'

/**
 * 0：都没选
 * 1：选择社团
 * 2：选择比赛
 */
const kindSelect=ref(0)

const selectBox=(select)=>{
    console.log(select);
    kindSelect.value=select
    uni.vibrateShort()
}

</script>

<template>
<view class="kind-select">
    <view class="title">请选择你的招募类型</view>
    <view class="select-box-area">
        <view class="select-box" :class="{ 'active-select': kindSelect === 1 }" @click="selectBox(1)">
            <view class="top-title">
                <view class="kind">社团招募</view>
                <label class="radio"><radio :checked="kindSelect=== 1" /></label>
            </view>
            <view class="detail">
                我是社团负责人，需要发布社团招募
            </view>
        </view>
        <view class="select-box" :class="{ 'active-select':kindSelect==2 }" @click="selectBox(2)">
            <view class="top-title">
                <view class="kind">比赛招募</view>
                <label class="radio"><radio :checked="kindSelect=== 2" /></label>
            </view>
            <view class="detail">
                我是队伍负责人，需要发布队伍招募
            </view>
        </view>
    </view>
</view>
</template>

<style lang="scss">
//



.kind-select{
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
            height: 25vh;
            border: 0.5vw solid #ebebeb;
            margin: 3vw auto;
            padding: 7vw 5vw 10vw 5vw;
            border-radius: 2vw;
            .top-title{
                display: flex;
                justify-content: space-between;
                margin-bottom: 9vw;
                .kind{
                    font-size: 5vw;
                    font-weight: bold;
                }
            }
            .detail{
                font-size: 4.5vw;
                // font-weight: bold;
            }
        }
        .active-select{
            border: 0.5vw solid #108a00;
            background-color: #f7faf7;
        }
    }
}


</style>