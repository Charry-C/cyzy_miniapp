<script setup>
import {ref,reactive} from 'vue'
const emit=defineEmits(['del-item','check-input'])
const props=defineProps(['contact'])
const options=reactive([{text:"删除",	style: {backgroundColor: 'rgb(214, 0, 0)'}}])

const deleteItem=(val)=>{
    emit('del-item',val)
}

const checkIsRight=()=>{
    emit('check-input')
}

</script>

<template>
<uni-swipe-action>
    <uni-swipe-action-item
            :right-options="options"
            show="true"
            @click="deleteItem(contact.type)"
        >

    <view class="item">
        <view class="card-title">
        {{ contact.type }}
        </view>
        <input
            class="ipt"
            v-model="contact.value"
            :placeholder="`请输入${contact.type}`"
            placeholder-class="input-placeholder"
            @input="checkIsRight"
        />
    </view>
    </uni-swipe-action-item>
</uni-swipe-action>
</template>


<style lang="scss">
.item{
    position: relative;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    width: 90vw;
    margin: 8vw auto;
    margin-top: 10vw;
    padding: 5vw;
    .card-title{
        position: absolute;
        background-color: #000000;
        color: #fff;
        width: 100%;
        height: 4vh;
        border-radius:2vw 2vw 0 0;
        left: 0;
        top: -4vh;
        text-align: center;
        line-height: 4vh;
        font-weight: bold;
        font-size: 4vw;
    }
    .ipt{
        height: 10vw;
        border: none;
        border-bottom: 1px solid #aeaeae;
        padding-left: 2vw;
    }

}

</style>