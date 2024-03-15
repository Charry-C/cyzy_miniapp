<script setup>
import {ref,defineEmits,onMounted} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'
const emit=defineEmits(['get-allow'])
let formData=useFormStore().formData

//# ref-start
let title=ref('')
let fontLimit=ref(50)

//# ref-end

//# start-method 

//表单处理逻辑
const checkTitle=()=>{
    console.log("title.value",title.value);
    if(title.value.length>0 ){
     formData.clubName=title.value
     emit('get-allow',true)
 }else if(title.value.length>=fontLimit){
     formData.clubName=''
     emit('get-allow',false)
 }else{
     formData.clubName=''
     emit('get-allow',false)
 }
}


//# end-method

//init
onMounted(()=>{
    console.log('社团名称组件挂在了');
    if(formData.clubName!==''){
        title.value=formData.clubName
         emit('get-allow',true)
    }else{
        emit('get-allow',false)
    }
})

</script>

<template>
  <view class="title-form">
    <view class="tip">让我们来填写社团的完整名称吧！</view>
    <view class="small-tip">
        请您认真填写，以便审核快速通过~
    </view>
    <input class="uni-input" placeholder="请您填写社团名称" v-model="title" @input="checkTitle" :style="{ border: title.length >= fontLimit ? '2px solid red' : '2px solid green' }"/>
    <view v-if="title.length>=fontLimit" style="font-size: 3vw; color: red;">社团名称不能超过50个字符</view>
  </view>
</template>

<style lang="scss">
//
.title-form{
    padding: 0 3vw;
    margin-bottom: 3vw;
    .tip{
        font-size: 6vw;
        margin: 10vw 0;
    }
    .small-tip{
        font-size: 3.5vw;
        margin-bottom: 5vw;
    }
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
}

</style>