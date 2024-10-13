<script setup>
import {ref,onMounted} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'

let formData=useFormStore().formData
const emit=defineEmits(['check-is-allow','update:modelValue'])
let gameName=defineProps(['modelValue'])
let game=ref('')

const checkInput=(e)=>{
    game.value=e.target.value
    emit('update:modelValue',game.value)
    if(game.value.length > 0){
        formData.gameName=game.value
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
    game.value=gameName.modelValue
})
// TODO 该组件可删除
</script>

<template>

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
