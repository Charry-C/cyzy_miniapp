<script setup>
//
import rangeItem from '@/components/rangeItem.vue'
import {defineProps,computed} from 'vue';

const props=defineProps(['item'])
console.log(props.item);
console.log(typeof props.item.value);


const hasChild=computed(()=>{
    if(typeof props.item.value == 'object' &&  props.item.value[0].value !==undefined){
        return true
    }
    return false
})



</script>

<template>
    <view class="title">
        {{ props.item.title }}
    </view>

    <template v-if="typeof props.item.value !=='object' ">
        <view class="value">
            {{ props.item.value }}
        </view>
    </template>
    <template v-else-if="hasChild">
        <rangeItem :data=props.item.value />
    </template>
    <template v-else-if="typeof props.item.value=='object'">
        <view class="value" v-for="i in props.item.value" :key="i">
            {{ i }}
        </view>
    </template>

    

    

</template>

<style lang="scss">
//
.title{
    color:rgb(0, 60, 22);
    font-weight: bolder;
    font-size: 5.5vw;
}
.value{
    margin-top: 2vw;
    }
</style>
