<script setup>
import topTitle from '@/components/topTitle.vue';
import topTitleDesc from '@/components/topTitleDesc.vue'
import { useFormStore } from '@/stores/modules/formInfo';
import { onMounted,ref } from 'vue';
const formData=useFormStore().applyformData
 
const tip1='介绍自己\n \n1.掌握的技能\n2.参加什么比赛,获得怎么样的奖项\n3.个人绩点'
const tip2='介绍自己\n \n1.什么时间有空\n2.是否准时，快速\n3.是否诚信，受到一众好评'

let emit=defineEmits(['allow-next'])
let description=ref()

const checkAllow=()=>{
    if(description.value){
        console.log("description:gogo");
        console.log(description.value);
        formData.perDescription=description.value
        console.log("formData.perDescription",formData.perDescription);
        emit('allow-next',true)
    }else{
        console.log("description:nogogo");
        emit('allow-next',false)
    }
}


onMounted(()=>{
    if(formData.perDescription){
        description.value=formData.perDescription
    }
    checkAllow()
})

</script>



<template>
    <view class="per-desc-form">
        <topTitle topTitle="现在，来详细介绍一下你自己吧" />
        <topTitleDesc topTitleDesc="在这里，你可以填写你的个人获奖经历，个人绩点，个人优势等等能更好地展现自己的描述" />
        <view class="uni-textarea">
              <textarea class="textarea" v-model="description" @input="checkAllow" :placeholder="formData.applyType=='技术型'?tip1:tip2" ></textarea>
        </view>
    </view>
  
</template>



<style lang="scss">
.uni-textarea{
    display: flex;
    margin: 2vh 3vw;
    .textarea{
        white-space: pre-wrap;
        width: 100%;
        border: 0.5vw solid #e8e8e8;
        padding: 3vw;
    }
}

</style>