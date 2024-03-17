<script setup>
import {ref,reactive} from 'vue'
const emit=defineEmits(['del-item'])
const props=defineProps(['contact'])
const options=reactive([{text:"删除",	style: {backgroundColor: 'rgb(214, 0, 0)'}}])

const deleteItem=(val)=>{
    emit('del-item',val)
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
        <input
            class="ipt"
            v-model="contact.value"
            :placeholder="`请输入${contact.type}联系方式`"
            placeholder-class="input-placeholder"
            @input="checkIsRight"
        />
    </view>
    </uni-swipe-action-item>
</uni-swipe-action>
</template>


<style lang="scss">
.item{
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    width: 90vw;
    height: 20vw;
    margin: 6vw auto;
    padding: 5vw;

    .ipt{
        height: 10vw;
        border: none;
        border-bottom: 1px solid #aeaeae;
        padding-left: 2vw;
    }

}

</style>