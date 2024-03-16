<script setup>
import { ref,defineEmits,reactive } from 'vue'
import { useFormStore } from '@/stores/modules/formInfo';
const formData=useFormStore().formData

const emit=defineEmits(['check-is-allow','del-item'])
const props = defineProps(['data']);
console.log(props.data);

let placeholderCon=reactive([{
  title:"部门",
  value:"部门介绍\n \n1.部门任务\n2.部门活动\n3.部分福利"
},
{
  title:"职位",
  value:"职位介绍\n \n1.职位任务\n2.职位需求\n3.职位福利"
}])

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


const options=reactive([{text:"删除",	style: {backgroundColor: 'rgb(214, 0, 0)'}}])


const delItem=(index)=>{
  console.log("index:",index);
  emit('del-item',index)
  }

//# method-end


</script>

<template>
  <view class="dep-box" >
    <uni-swipe-action>
        <uni-swipe-action-item
            :right-options="options"
            show="true"
            @click="delItem(props.data.id)"
        >
          <view class="content-box">
            <view class="dep-item">
              <input class="uni-input" :placeholder="formData.recruitmentType === '社团招募'?placeholderCon[0].title : placeholderCon[1].title+`${props.data.id}名称`" @input="editTitle($event,props.data.id)"  :value="props.data.department"/>
              <view class="uni-textarea">
              <textarea class="textarea"  :placeholder="formData.recruitmentType === '社团招募' ? placeholderCon[0].value : placeholderCon[1].value" @input="editCon($event,props.data.id)" :value="props.data.description"></textarea>
              </view>
            </view>

          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
  </view>
</template>

<style lang="scss">
.del-box{
  position: absolute;
  top: 2px;
  right: 0;
  height: 33vh;
  background-color: rgb(214, 0, 0);
  border-radius: 3vw;
  padding: 5vw;
  color: #fff;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 4vw;
}
.dep-box{
.dep-item{
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    margin-bottom: 3vh;
    padding:2vw;
    border-radius: 2vw;
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ededed;
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
            border: 0.5vw solid #f0f0f0;
        }
    }
  }
}
</style>