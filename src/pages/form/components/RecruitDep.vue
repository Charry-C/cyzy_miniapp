<script setup>
import {ref,reactive} from 'vue'
import DepItem from '@/components/DepItem.vue';


let item=reactive([1])
let n=ref(1)
const addDepCom=()=>{
    n.value++
    item.push(n.value)
    console.log(item);
}

//操作dom


</script>

<template>
  <view class="recruit-dep-form">
    <view class="tip" >来填写你要的招聘部门信息吧~</view>

    <DepItem  v-for="i in item" :key="i" :num="i"/>

    <view class="add-dep" @click="addDepCom">
        <view class="add" >+ 添加部门</view>
    </view>
  </view>
</template>

<style lang="scss">
//
.recruit-dep-form{
    padding: 0 3vw;
    .tip{
        font-size: 6vw;
        margin: 5vw;
    }
    .add-dep{
        color: #ffffff;
        font-size: 4vw;
        line-height: 5vh;
        padding-left: 3vw;
        height: 5vh;
        border-radius: 1vw;
        background-color: #008607;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
}
</style>