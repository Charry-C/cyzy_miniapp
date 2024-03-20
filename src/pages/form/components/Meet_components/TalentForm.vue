<script setup>
import topTitle from '@/components/topTitle.vue';
import { useFormStore } from '@/stores/modules/formInfo';
import {ref,reactive,onMounted} from 'vue'

//数据准备
  const jobList1=reactive([
    '请选择您的职位',
    '数据分析师',
    'UI设计师',
    '前端开发工程师',
    '后端开发工程师',
    'AI开发工程师'
  ])

  const jobList2=reactive([
  '请选择您的职位',
    '代带外卖',  
    '代取快递',
    '代课',
    '代刷',
    '代写'
  ])

  const init=(mode)=>{
    console.log("mode",mode);
    if(mode==1){
        return jobList1
    }else{
        return jobList2
    }
  }

  let formData=useFormStore().applyformData
  const initList=init(formData.applyType=='技术型'?1:2)
  console.log("initList",initList);
  const index=ref(0)
  const emit=defineEmits(['allow-next']) 

  //检查缓存
  const checkForm=()=>{
    if(formData.applyPosition!==''){
        index.value=initList.indexOf(formData.applyPosition)
        //防止上一次缓存查不到影响dom显示
        if(index.value==-1){
            index.value=0
            emit('allow-next',false)
            return
        }
        console.log('applyPosition:gogo');
        emit('allow-next',true)
    }else{
        console.log('applyPosition:nogogo');
        index.value=0
        emit('allow-next',false)
    }
  }

  const bindPickerChange=(e)=>{
        if(e.detail.value==0){
            formData.applyPosition=''
            console.log('applyPosition:nogogo');
            emit('allow-next',false)
        }else{
            index.value=e.detail.value
            formData.applyPosition=initList[index.value]
            console.log('applyPosition:gogo');
            emit('allow-next',true)
        }
    }

onMounted(()=>{
    checkForm()
})

</script>

<template>
    <topTitle top-title="请选择您的技术类型" />
    <view class="talent-card">
		<view class="title-box">
			您的期望职位是:
		</view>
		<view class="picker-box">
			<picker :range="initList"  @change="bindPickerChange($event)" :value="index">
				<view class="uni-input">{{ initList[index]}}</view>
			</picker>
		</view>
    </view>
</template>



<style lang="scss">
.talent-card{
    padding: 3vw;
    font-size: 5vw;
    font-weight: bold;
    .picker-box{
        border: 1vw solid #e3e3e3;
        margin-top: 3vh;
        font-size: 5vw;
        font-weight: bold;
        padding: 3vw;
        text-align: center;
        }
}
</style>
