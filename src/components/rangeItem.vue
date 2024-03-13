<script setup>
import { defineProps } from 'vue';

const props=defineProps(['data'])

console.log("props.data",props);

</script>

<template>
    <view class="child-box">
        <view v-for="(item,index) in props.data" :key="index">
            <view class="title">
                    {{ item.title }}
            </view>

            <view class="value" v-if="typeof item.value!=='object'">
                {{ item.value }}
            </view>
            <view class="value" v-else v-for="(item,index) in item.value" :key="index">
                {{ item }}
            </view>

        </view>
    </view>

</template>


<style lang="scss">
.child-box{
    padding-left: 3vw;
    .title{
        font-weight: bold;
        margin: 2vw 0 1vw 0;
    }
    .value{
        padding: 1vw;
    }
}

</style>