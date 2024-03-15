<script setup>
import { ref,defineEmits } from 'vue'
import { useFormStore } from '@/stores/modules/formInfo';
const formData=useFormStore().formData

const emit=defineEmits(['check-is-allow'])
const props = defineProps(['data']);
console.log(props.data);

//# method-start
const editTitle=(e,id)=>{
  //筛选出 当前被选中的input框
  const targetItem=formData.clubDescription.filter((item)=>{
    return item.id==id
  })
  targetItem[0].department=e.target.value
  emit('check-is-allow')
}

const editCon=(e,id)=>{
    //筛选出 当前被选中的textarea框
  const targetItem=formData.clubDescription.filter((item)=>{
    return item.id==id
  })
  targetItem[0].description=e.target.value
  emit('check-is-allow')
}



//# method-end


</script>

<template>
  <view class="dep-item">
    <input class="uni-input" :placeholder="`部门${props.data.id}名称`" @input="editTitle($event,props.data.id)"  :value="props.data.department"/>
    <view class="uni-textarea">
		<textarea class="textarea"  placeholder=" 部门介绍\n \n1.部门任务\n2.部门活动\n3.部分福利" @input="editCon($event,props.data.id)" :value="props.data.description"></textarea>
	</view>
  </view>
</template>

<style lang="scss">
.dep-item{
    // position: relative;
    // left: 0;
    // background-color: #000000;
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
    .uni-textarea{
        margin: 2vw auto;
        display: flex;
         justify-content: center;
        .textarea{
            white-space: pre-wrap;
            width: 100%;
            line-height: 5vw;
            padding: 2vw;
            font-size: 3.5vw;
            border-radius: 1vw;
            border: 0.5vw solid #ccc;
        }
    }

}
</style>