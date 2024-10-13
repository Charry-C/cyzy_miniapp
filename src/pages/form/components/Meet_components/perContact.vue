<script setup>
import { ref,reactive, nextTick, onMounted } from 'vue'
import contactCard from '@/components/contactCard.vue';
import {useFormStore} from '@/stores/modules/formInfo.js'
import topTitle from '@/components/topTitle.vue';


const contactType=reactive([ "微信","QQ","手机","邮箱"])

const emit=defineEmits(['allow-next'])

//载入缓存
const formData=useFormStore().applyformData
let contactsList=reactive(formData.contacts)

//检查函数
//1.检查是否有联系方式
//2.检查联系方式是否为空
const checkForm=()=>{
    //检查缓存
    if(contactsList.length>0){
        emit('allow-next',true)
        console.log("contact:gogo1");

        //检查空
        let allow=contactsList.every((e)=>{
            return e.value!==''
        })
        if(allow){
            emit('allow-next',true)
            console.log("contact:gogo2");
        }else{
            emit('allow-next',false)
            console.log("contact:nogogo2");
        }
    }else{
        emit('allow-next',false)
        console.log("contact:nogogo1");

    }
}




const addItem=(type)=>{
    uni.vibrateShort()
    const item=ref({})
    for (let i = 0; i < contactType.length; i++) {
        if(contactType[i]==type){
            contactType.splice(i,1)
            break
        }
    }
    //赋初值
    item.type=type
    item.value=''
    contactsList.push(item)
    checkForm()
}

const delItem=(type)=>{
    for (let i = 0; i < contactsList.length; i++) {
        if(contactsList[i].type==type){
            contactsList.splice(i,1)
            contactType.push(type)
            break
        }
    }
    checkForm()
}

//初始化页面
const initItem=()=>{

    //去重操作
    for (let type = 0; type < contactType.length; type++) {
        for (let formType = 0; formType < contactsList.length; formType++) {
            if(contactType[type]==contactsList[formType].type){
                contactType.splice(type,1)
                type--
                break
            }
        }

    }

}
initItem()



onMounted(() => {
    checkForm()
})
</script>

<template>
    <topTitle top-title="请选择您的联系方式" />
    <contactCard v-for="(contact,index) in contactsList" :key="index" v-model="contact.value" :contact="contact" @del-item="delItem" @check-input="checkForm"/>
    <view class="add">
        <view class="contact-icon" @click="addItem(type)" v-for="(type,index) in contactType" :key="index">{{ type }}</view>
    </view>
</template>



<style lang="scss">

.add{
    display: flex;
    justify-content: space-evenly;
    margin: 5vw 0;
    padding-bottom: 5vh;
    .contact-icon{
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
        color: #fff;
        font-size: 3.5vw;
        text-align: center;
        line-height: 15vw;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        background-color: #000000;

    }
}
</style>
