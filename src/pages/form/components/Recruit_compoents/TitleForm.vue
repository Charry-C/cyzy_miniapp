<script setup>
import {ref,reactive,defineEmits,onMounted} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'
import GameJoin from '@/pages/form/components/Recruit_compoents/GameJoin.vue'

const emit=defineEmits(['get-allow'])
let formData=useFormStore().formData

//# ref-start
let input=ref({
    title:"",
    gameName:"123",
    clubDes:"342"
})



let fontLimit=ref(50)
let mode=ref('mode1')


let checkList = reactive({
        mode1:[
        {
            input: "title",
            value: false,
        },
        {
            input:"clubDes",
            value:false
        }
        ],
        mode2:[
        {
            input: "title",
            value: false,
        },
        {
            input: "gameName",
            value: false,
        },
        {
            input:"clubDes",
            value:false
        }
    ]
    })


//检查缓存与填写
const checkGo = (arr) => {
    let flag = true
    if(mode.value=='mode1'){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].value){
                let keys=Object.keys(input)[i]
                Object.values(input)[i]=formData[keys]
            }else{
                flag=false
            }
        }
    }

    if(mode.value=='mode2'){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].value){
                let keys=Object.keys(input)[i]
                Object.values(input)[i]=formData[keys]
            }else{
                flag=false
            }
        }
    }

    return flag
}


//# ref-end



//# start-method 

//检查input1框
const checkInput1=(inputIndex)=>{
    const input1=input.value.title
    if(input1.length>0 ){
        formData.clubName=input1
        checkList[mode.value][0].value=true
 
    }else if(input1.length>=fontLimit){
        formData.clubName=''
        checkList[mode.value][0].value=false
    }else{
        checkList[mode.value][0].value=false
    }


    //检查所有框
    if(checkGo(checkList[mode.value])){
        emit('get-allow',true)
    }else{
        emit('get-allow',false)

    }
}

// //检查子input2框
const checkInput2=(value)=>{
    console.log("childrenCheck",value);
    if(value){
        checkList[mode.value][1].value=true
    }else{
        checkList[mode.value][1].value=false
    }
    //检查所有框
    if(checkGo(checkList[mode])){
        emit('get-allow',true)
    }else{
        emit('get-allow',false)
    }
}

// //检查input3框
const checkInput3=()=>{
    const input3=input.value.clubDes
    if(input3.length>0 ){
        formData.clubDetail=input3
        checkList[mode.value][1].value=true
    }else if(input3.length>=fontLimit){
        formData.clubDetail=''
        checkList[mode.value][1].value=false
    }else{
        checkList[mode.value][1].value=false
    }
    //检查所有框
    if(checkGo(checkList[mode.value])){
        emit('get-allow',true)
    }else{
        emit('get-allow',false)
    }
}
//# end-method


//init
onMounted(()=>{
    console.log('社团名称组件挂在了');
    //检查缓存


    //检查所有框
    if(checkGo(checkList[mode.value])){
        emit('get-allow',true)
    }
})

</script>

<template>
  <view class="title-form">
    <view class="tip">让我们来填写{{formData.recruitmentType === '社团招募' ? '社团' : '团队'}}的完整名称吧！</view>
    <view class="small-tip">
        请您认真填写，以便审核快速通过~
    </view>
    <input class="uni-input" :placeholder="'请您填写' + (formData.recruitmentType === '社团招募' ? '社团' : '团队') + '名称'" 
    v-model="input.title" @input="checkInput1" 
    :style="{ border: input.title.length >= fontLimit ? '2px solid red' : '2px solid green' }"/>
    <view v-if="input.title.length>=fontLimit" style="font-size: 3vw; color: red;">社团名称不能超过50个字符</view>
    <GameJoin v-if="formData.recruitmentType == '团队招募'" v-model="input.gameName" />
    <view class="tip">让我们来填写{{formData.recruitmentType === '社团招募' ? '社团' : '团队'}}的详细介绍吧~</view>
    <view class="text-box">
        <textarea
        class="textarea"
        v-model="input.clubDes"
        @input="checkInput3"
        placeholder="请填写社团的简介"
        />
    </view>

</view>
</template>

<style lang="scss">
//
.title-form{
    padding: 0 3vw;
    margin-bottom: 3vw;
    .tip{
        font-size: 6vw;
        margin: 8vw 0;
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
.text-box{
    display: flex;
    .textarea{
            white-space: pre-wrap;
            width: 100%;
            line-height: 5vw;
            padding: 2vw;
            font-size: 3.5vw;
            border-radius: 1vw;
            border: 0.6vw solid #098245;
        }
}


</style>