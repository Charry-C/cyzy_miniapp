<script setup>
import { ref, reactive, defineEmits, onMounted } from 'vue'
import { useFormStore } from '@/stores/modules/formInfo.js'

// 初始化
const emit = defineEmits(['get-allow'])
let formData = useFormStore().formData

//# ref-start
let mode = ref(formData.recruitmentType==='社团招募'?'mode1':'mode2')
let inputList = reactive({
  mode1: {
      GroupName: {
          val: '',
          go: false,
      },
      GroupIntro:{
        val: '',
        go: false,
      },
  },
  mode2: {
      GroupName: {
        val: '',
        go: false,
      },
      competition: {
        val: '',
        go: false,
      },
      GroupIntro: {
        val: '',
        go: false
      }
  }
})

//# ref-end


//# start-method

// 判断是否可Next
const checkGo = ()=>{
  let flag = true
  for (const listMode in inputList) {
    if (listMode === mode.value) {
      for (const key in inputList[listMode]) {
        let iptItem = inputList[listMode][key]
        if(!iptItem.go) return false
      }
    }
  }
  return flag
}


const checkInput =(iptItem,limit)=>{
    if(iptItem.val.length < limit && iptItem.val.length>0){
        iptItem.go = true
    }else{
        iptItem.go = false
    }
    checkGo() ? emit('get-allow', true) : emit('get-allow', false)
}


//# end-method

// init
onMounted(() => {
  // 获取缓存并填充至inputList
  ((mode)=>{
    for(const key in inputList[mode]){
        let iptItem = inputList[mode][key]
        if(formData[key].length){
          iptItem.val = formData[key]
          iptItem.go = true
        }
    }
  })(mode.value)
  if (checkGo()) emit('get-allow', true)
})
</script>

<template>
  <view class="title-form">
    <view class="tip"
      >让我们来填写{{
        formData.recruitmentType === '社团招募' ? '社团' : '团队'
      }}的完整名称吧！</view
    >
    <view class="small-tip"> 请您认真填写，以便审核快速通过~ </view>
    <input
      class="uni-input"
      :placeholder="
        '请您填写' + (formData.recruitmentType === '社团招募' ? '社团' : '团队') + '名称'
      "
      v-model="inputList[mode]['GroupName'].val"
      @input="checkInput(inputList[mode]['GroupName'], 50)"
      :style=" inputList[mode]['GroupName'].go ? {border: '2px solid green'} : {border: '2px solid gray'} "
    />
    <view v-if="inputList[mode]['GroupName'].val.length > 50" style="font-size: 3vw; color: red">
      社团名称不能超过50个字符
    </view>
    <template v-if="formData.recruitmentType === '团队招募'">
      <view class="tip">
          请填写队伍要参与的比赛名称
      </view>
      <input class="uni-input" placeholder="请您填写队伍参与比赛的名称"
      v-model="inputList[mode]['competition'].val"
      @input="checkInput(inputList[mode]['competition'],50)"
      :style=" inputList[mode]['competition'].go ? {border: '2px solid green'} : {border: '2px solid gray'}"
      />
    </template>

    <view class="tip"
      >让我们来填写{{
        formData.recruitmentType === '社团招募' ? '社团' : '团队'
      }}的详细介绍吧~</view
    >
    <view class="text-box">
      <textarea
        class="textarea"
        v-model="inputList[mode]['GroupIntro'].val"
        @input="checkInput(inputList[mode]['GroupIntro'],50)"
        placeholder="请填写社团的简介"
        :style=" inputList[mode]['GroupIntro'].go ? {border: '2px solid green'} : {border: '2px solid gray'} "
      />
    </view>
  </view>
</template>

<style lang="scss">
//
.title-form {
  padding: 0 3vw;
  margin-bottom: 3vw;
  .tip {
    font-size: 6vw;
    margin: 8vw 0;
  }
  .small-tip {
    font-size: 3.5vw;
    margin-bottom: 5vw;
  }
  .uni-input {
    height: 6vh;
    line-height: 6.5vh;
    padding: 0 2vw;
    font-size: 3.5vw;
    border: 0.6vw solid #098245;
    border-radius: 1vw;
  }
}
.text-box {
  display: flex;
  .textarea {
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
