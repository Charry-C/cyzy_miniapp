<script setup>
import {ref,onMounted} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'

let formData=useFormStore().formData
const emit=defineEmits(['check-is-allow'])
let gameName=defineProps(['modelValue'])



const checkInput=()=>{
    if(gameName.modelValue.length > 0){
        formData.gameName=gameName.modelValue
        emit('check-is-allow',true)
    }else{
        formData.gameName=''
        emit('check-is-allow',false)
    }
}

onMounted(()=>{
    console.log("比赛组件被挂载");
    if(formData.gameName!==''){
        gameName.modelValue=formData.gameName
        emit('check-is-allow',true)
    }else{
        emit('check-is-allow',false)
    }
    console.log("gameName",gameName.modelValue);
})

</script>

<template>
  <view class="game-join">
    <view class="tip">
        请填写队伍要参与的比赛名称
    </view>
    <input class="uni-input" placeholder="请您填写队伍参与比赛的名称" v-model="gameName.modelValue" @input="checkInput"/>
  </view>
</template>



<style>
    .tip{
        font-size: 6vw;
        margin: 10vw 0;
    }
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 2px solid green;
        border-radius: 1vw;
    }
</style>