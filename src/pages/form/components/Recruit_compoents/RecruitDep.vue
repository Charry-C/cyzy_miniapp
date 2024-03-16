<script setup>
import {ref,reactive,onMounted,defineEmits,nextTick,watch } from 'vue'
import DepItem from '@/components/DepItem.vue';
import { useFormStore } from '@/stores/modules/formInfo';
const emit=defineEmits(['get-allow'])
//#ref-start
let formData=useFormStore().formData

let item=reactive(formData.clubDescription)
console.log("item:",item);
let id=ref(1)

//#ref-end

//0.每一个组件都要检查
//1.输入框长度不能 为0
//2.输入框长度不能 超（可以写一个函数来做，传入写的值，传出false/true）
//思路:子组件每一次edit都 触发 遍历检查一次,每次add都触发检查,检查写成一个函数


const checkIsAllow=()=>{
    console.log("触发了");
    const titleIsOk=item.every((e)=>{
        return e.department.length>0 && e.department.length<20
    })
    const deatilIsOk=item.every((e)=>{
        return e.description.length>0 && e.description.length<200
    })

    console.log("titleIsOk:",titleIsOk);
    console.log("deatilIsOk",deatilIsOk);

    if(titleIsOk && deatilIsOk && formData.clubDescription.length!=0){
        emit('get-allow',true)
    }else{
        emit('get-allow',false)
    }
}



//#method-start
const addDepCom=()=>{
    let addItem=reactive({})
    id.value=item.length

    //init
    addItem.id=id.value+1
    addItem.department=''
    addItem.description=''

    if(id.value>=5){
        uni.showToast({'icon':'error','title':"最多5个部门哦"})
        return
    }
    item.push(addItem)
    //触发检查
    checkIsAllow()
}

// watch(formData.clubDescription, (newValue, oldValue) => {
//   // 处理变化
//   console.log("newVal",newValue);
// }, { deep: true });

//1.让store中的数据删除
//2.让页面的item和store绑定的重新绑定
//3.页面发生更新
const delItem=(index)=>{
    let delItemIndex=0
    
    //找出要删除的对象下标
    formData.clubDescription.forEach((item,i)=>{
        if(item.id==index){
            delItemIndex=i
            return
        }
    })

    //删除
    formData.clubDescription.splice(delItemIndex,1)


    //触发检查
    checkIsAllow()
}

//#method-end


//init
onMounted(()=>{
    console.log('社团部门组件挂在了');
    checkIsAllow()
})


</script>

<template>
  <view class="recruit-dep-form">
    <view class="tip" >来填写你要的{{formData.recruitmentType=="社团招募"?"招聘部门":"招聘职位"}}信息吧~</view>

    <DepItem  v-for="(i,index) in item" :key="index" :data="item[index]" @check-is-allow="checkIsAllow" @del-item="delItem"/>

    <view class="add-dep" @click="addDepCom">
        <view class="add" >+ 添加{{formData.recruitmentType=="社团招募"?"部门":"职位"}}</view>
    </view>
  </view>
</template>

<style lang="scss">
//
.recruit-dep-form{
    padding: 0 3vw;
    .tip{
        font-size: 6vw;
        margin: 5vw;
    }
    .add-dep{
        color: #ffffff;
        font-size: 4vw;
        line-height: 5vh;
        padding-left: 3vw;
        height: 5vh;
        border-radius: 1vw;
        background-color: #008607;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
}
</style>